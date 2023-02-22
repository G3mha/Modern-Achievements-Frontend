from django.db import models
from django.contrib.auth.models import User

class Achievement(models.Model):
    api_name=models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    description = models.TextField()
    achieved = models.BooleanField(default=False)

    def __str__(self):
        return self.name

class Game(models.Model):
    name = models.CharField(max_length=100)
    steam_game_id = models.IntegerField()
    achievements = models.ManyToManyField(Achievement) 
    completion_rate = models.FloatField(default=0)

    def __str__(self):
        return self.name

class Player(models.Model):
    ### all the below fields are inherited from the User model
    # username = models.CharField(max_length=100)
    # password
    # first_name = models.CharField(max_length=100)
    # last_name = models.CharField(max_length=100)
    # email = models.EmailField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    games = models.ManyToManyField(Game)
    steam_user_id = models.IntegerField()

    def __str__(self):
        return self.user.username