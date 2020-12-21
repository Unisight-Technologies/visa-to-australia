from django.shortcuts import render
from django.views.generic import View, TemplateView

# Create your views here.

class Homepage(TemplateView):
    template_name= "index.html"

class Innerpage(TemplateView):
    template_name= "inner-page.html"

class Portfolio_details(TemplateView):
    template_name= "portfolio-details.html"
