from django.db import models

# Create your models here.
# contact pages
class Contact(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField()
    phone = models.CharField(max_length=100)
    subject = models.CharField(max_length=400)
    message = models.CharField(max_length=800)

class News(models.Model):
    title = models.CharField(max_length=200)
    date = models.CharField(max_length=200)
    desc = models.CharField(max_length=400)
    link = models.CharField(max_length=200)
