import requests
import json

try:
    key=json.load(open("MA_App\key.json"))["key"] # https://steamcommunity.com/dev/apikey
except:
    key=json.load(open("MA_App/key.json"))["key"]   
lang='english'


def GetPlayerAchievements(appid, steamid): # https://developer.valvesoftware.com/wiki/Steam_Web_API#GetPlayerAchievements_.28v0001.29
    url = f"https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001?key={key}&appid={appid}&steamid={steamid}&l={lang}"
    response=requests.get(url)
    response.raise_for_status()
    if response.status_code != 204:
        return response.json()
    data=response.json()
    return data

def GetGlobalAchievementPercentagesForApp(appid): # https://developer.valvesoftware.com/wiki/Steam_Web_API#GetGlobalAchievementPercentagesForApp_.28v0002.29
    url = f"https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0001?gameid={appid}&l={lang}"
    response=requests.get(url)
    response.raise_for_status()
    if response.status_code != 204:
        return response.json()
    data=response.json()
    return data

def GetGameSearch(search): 
    url = f"https://store.steampowered.com/api/storesearch?term={search}&cc=us&l={lang}&v=1"
    response=requests.get(url)
    response.raise_for_status()
    if response.status_code != 204:
        return response.json()
    data=response.json()
    return data

def GetOwnedGames(steamid):
    url=f"https://api.steampowered.com/IPlayerService/GetOwnedGames/v1?key={key}&steamid={steamid}&include_appinfo=1&include_played_free_games=1"
    response=requests.get(url)
    response.raise_for_status()
    if response.status_code != 204:
        return response.json()
    data=response.json()
    return data

def GetRecentlyPlayedGames(steamid,count):
    url=f"https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1?key={key}&steamid={steamid}&count={count}"
    request=requests.get(url)
    request.raise_for_status()
    if request.status_code != 204:
        return request.json()
    data=request.json()
    return data

def GetUserByName(name):
    url=f"https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1?key={key}&vanityurl={name}"
    response=requests.get(url)
    response.raise_for_status()
    if response.status_code != 204:
        return response.json()
    data=response.json()
    return data

    
if __name__ == "__main__": # 730 = CS:GO
    print(GetPlayerAchievements(730, 76561198139663517),'\n'*2)
    """print(GetGlobalAchievementPercentagesForApp(730),'\n'*2) """
    print(GetGameSearch("Counter-Strike"),'\n'*2)
    print(GetOwnedGames(76561198139663517)['response']['games'],'\n'*2)
    print(GetRecentlyPlayedGames(76561198139663517, 10),'\n'*2)
    print(GetUserByName("Barovisky"),'\n'*2)