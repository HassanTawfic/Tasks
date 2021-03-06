from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class User(AbstractUser):
    date_of_birth = models.DateField(verbose_name='Date of birth', null=True, blank=False)
    profile_picture = models.ImageField()