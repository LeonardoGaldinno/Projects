from django.db import models
from django.contrib.auth.models import AbstractUser
#  from django.contrib.auth.models import User #Refer to Django user model which we are using here

class User(AbstractUser):
    name = models.CharField(max_length=200, null=True)
    email = models.EmailField(unique=True, null=True)
    bio = models.TextField(null=True)

    avatar = models.ImageField(null=True, default="avatar.svg") # This field depends on another package: python -m install pillow

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

#Create your models here.

class Topic(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name

class Room(models.Model):
    host = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    topic = models.ForeignKey(Topic, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200)
    description = models.TextField(null=True, blank=True)
    participants = models.ManyToManyField(User, related_name='participants', blank=True)
    updated = models.DateTimeField(auto_now=True) #auto_now everytime the save method is called, save the timestamp
    created = models.DateTimeField(auto_now_add=True) #auto_now_add Save the timestamp only the first time the record is created/saved

    class Meta:
        ordering = ['-updated', '-created']

    def __str__(self):
        return self.name

class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  #CASCADE = If the user gets deleted, all the msgs get deleted / #Refer to Django user model which we are using here
    room = models.ForeignKey(Room, on_delete=models.CASCADE) #CASCADE = If the room gets deleted, all the messages get deleted
    body = models.TextField()
    updated = models.DateTimeField(auto_now=True) #auto_now everytime the save method is called, save the timestamp
    created = models.DateTimeField(auto_now_add=True) #auto_now_add Save the timestamp only the first time the record is created/saved
    class Meta:
        ordering = ['-updated', '-created']
        
    def __str__(self):
        return self.body[0:50] #Returns only the first 50 characters of the body

