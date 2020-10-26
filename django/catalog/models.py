from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model


class Address(models.Model):
    road = models.CharField('road', max_length=100)
    zip_code = models.CharField('zip code', max_length=100)
    city = models.CharField('city', max_length=100)
    complement = models.CharField(
        'complement', max_length=100, blank=True, null=True)
    country = models.CharField('country', max_length=100)
    state = models.CharField('state', max_length=100)

    def __str__(self):
        return self.road + " / " + self.country
