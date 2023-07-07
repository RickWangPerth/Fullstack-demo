from django.db import models
from .validators import validate_username
# Create your models here.

class Task(models.Model):
  title = models.CharField(max_length=200)
  completed = models.BooleanField(default=False, blank=True, null=True, validators=[validate_username])
      
  def __str__(self):
    return self.title