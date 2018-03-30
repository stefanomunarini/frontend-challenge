from django.db import models


class Country(models.Model):
    name = models.CharField(max_length=63, primary_key=True, unique=True)
    title = models.CharField(max_length=255)
    image = models.CharField(max_length=63)
    music = models.CharField(max_length=63)
    description = models.TextField()
