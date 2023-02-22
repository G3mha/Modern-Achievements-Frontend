from django.urls import path

from . import views

urlpatterns = [
    path('api/login/', views.login),
    path('api/signup/', views.signup),
    path('api/search/steam/username/', views.search_steam_username),
    path('api/search/db/username/', views.search_db_user),
    path('api/user/data/<str:username>', views.getUserData),
]
