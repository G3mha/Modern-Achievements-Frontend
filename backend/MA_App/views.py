import requests
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import Http404, HttpResponseForbidden, JsonResponse, HttpResponseBadRequest
from django.shortcuts import redirect
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .models import Achievement, Game, Player
from .serializers import AchievementSerializer, GameSerializer, PlayerSerializer
from rest_framework.decorators import api_view
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from .steam_api_lib import *

lang='english'


@api_view(['POST'])
def signup(request):
    print('starting signup')
    if request.method == 'POST':
        username = request.data['username']
        password = request.data['password']
        first_name = request.data['first_name']
        last_name = request.data['last_name']
        email = request.data['email']
        steam_user_name=request.data['steam_username']
        
        if '@' not in email:
            return JsonResponse({'HttpStatusCode': 404, 'message': 'Email is invalid'})
        if (User.objects.filter(email=email).exists()):
            return JsonResponse({'HttpStatusCode': 404, 'message': 'Email is already in use'})
        if not (first_name.isalpha() and last_name.isalpha()):
            return JsonResponse({'HttpStatusCode': 404, 'message': 'First and last name must be alphabetic'})
        if (User.objects.filter(username=username).exists()):
            return JsonResponse({'HttpStatusCode': 404, 'message': 'Username already exists'})
        
        user = User.objects.create_user(username=username, email=email, password=password, first_name=first_name, last_name=last_name)
        steamid=GetUserByName(steam_user_name)
        
        steamid = steamid['response']['steamid']
        games = GetOwnedGames(steamid)
        games = games['response']['games']
        games_class=[]
        for game in games:
            try:
                achieved_count=0
                achievements_class=[]
                achievements = GetPlayerAchievements(game['appid'],steamid)
                achievements = achievements['playerstats']['achievements']
                for achievement in achievements:
                    achievement_class=Achievement(api_name=achievement['apiname'],name=achievement['name'],description=achievement['description'],achieved=achievement['achieved'])
                    achievement_class.save()
                    achieved_count+=achievement['achieved']
                    achievements_class.append(achievement_class)
                game_class=Game(name=game['name'],steam_game_id=game['appid'],completion_rate=achieved_count/len(achievements_class))
                game_class.save()
                game_class.achievements.set(achievements_class)
                games_class.append(game_class)
            except:
                pass
        player = Player.objects.create(user=user, steam_user_id=steamid)
        player.save()
        player.games.set(games_class)
        print('successfully created user')
        user = authenticate(username=username, password=password)
        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            print('user signed up and logged in!')
            return JsonResponse({'HttpStatusCode': 200, 'token': token.key})
        return JsonResponse({'HttpStatusCode': 404, 'message': 'User not able to be created'})

@api_view(['POST'])
def login(request):
    print('starting login')
    if request.method == 'POST':
        print('request method is post')
        username = request.data['username']
        password = request.data['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            print('user is not none')
            token, created = Token.objects.get_or_create(user=user)
            print('user logged in!')
            return JsonResponse({'HttpStatusCode': 200, 'token': token.key})
        return JsonResponse({'HttpStatusCode': 404, 'message': 'User not found'})

@api_view(['GET'])
def search_db_user(request):
    print(request)
    if request.method == 'GET':
        search_term = request.GET.get('searchTerm')
        players=Player.objects.all()
        wanted_players=[]
        for player in players:
            if search_term.lower() in player.user.username.lower():
                wanted_players.append(player)
        if len(wanted_players) > 0:
            serialized_players = PlayerSerializer(wanted_players,many=True)
            response = Response(serialized_players.data)
            response['HttpStatusCode'] = 200
        else:
            response = JsonResponse({'HttpStatusCode': 404, 'message': 'No users found'})
        return response

@api_view(['GET'])
def search_steam_username(request):
    if request.method == 'GET':
        search_term = request.GET.searchTerm
        steamid=GetUserByName(search_term)
        try:
            player = Player.objects.get(steam_user_id=steamid)
        except Player.DoesNotExist:
            return JsonResponse({'HttpStatusCode': 404})
        serialized_player = PlayerSerializer(player)
        return Response(serialized_player.data)

@api_view(['GET'])
def gamesFromSteamId(steamid):
    try:
        player = Player.objects.get(steam_user_id=steamid)
    except Player.DoesNotExist:
        return JsonResponse({'HttpStatusCode': 404})
    games=GetOwnedGames(steamid)['response']['games']
    games_serializer=GameSerializer(games,many=True)
    return Response(games_serializer.data)

@api_view(['GET'])
def achievementsFromGame(steamid,appid):
    try:
        player = Player.objects.get(steam_user_id=steamid)
    except Player.DoesNotExist:
        return JsonResponse({'HttpStatusCode': 404})
    achievements=GetPlayerAchievements(steamid,appid)['playerstats']['achievements']
    achievements_serializer=AchievementSerializer(achievements,many=True)
    return Response(achievements_serializer.data)

@api_view(['GET'])
def getUserData(request, username):
    if request.method == 'GET' and (User.objects.filter(username=username).exists()):
        user_search = User.objects.filter(username=username)
        if len(user_search) == 1:
            user = user_search.first()
            player = Player.objects.get(user=user)
            games_serializer=GameSerializer(player.games.all(),many=True)
            print('user found')
            return Response({'HttpStatusCode': 200, 'games': games_serializer.data})
    return JsonResponse({'HttpStatusCode': 404, 'message': 'User not found'})
