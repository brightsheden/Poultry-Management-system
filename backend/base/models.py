from django.db import models

# Create your models here.

class Chicken(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True)
    breed = models.CharField(max_length=50, blank=True, null=True)
    age =  models.CharField(max_length=50, blank=True, null=True)
    sex =  models.CharField(max_length=50, blank=True, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.breed
 
    