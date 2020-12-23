from django.shortcuts import render
from django.views.generic import View, TemplateView

# Create your views here.

class Homepage(TemplateView):
    template_name= "index.html"

class Aboutpage(TemplateView):
    template_name= "aboutus.html"

class Contactpage(TemplateView):
    template_name= "contactus.html"
class Workpage(TemplateView):
    template_name= "workvisa.html"
class Studentpage(TemplateView):
    template_name= "studentvisa.html"
class Investorpage(TemplateView):
    template_name= "investorvisa.html"
class Goldenpage(TemplateView):
    template_name= "goldenvisa.html"    
