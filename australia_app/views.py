from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import View, TemplateView
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse

from . import models
from .models import News
from . import mailHandler
# import requests
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
from .scraper import Scrapper
# Create your views here.

class Homepage(TemplateView):
    template_name= "index.html"

class Aboutpage(TemplateView):
    template_name= "aboutus.html"

class Comingpage(TemplateView):
    template_name= "coming_soon.html"

class Contactpage(TemplateView):
    template_name= "contactus.html"

    def post(self, request):

        form = request.POST
        name = form.get('name')
        email = form.get('email')
        phone = form.get('phone')
        subject = form.get('subject')
        message = form.get('message')

        new_contact = models.Contact.objects.create(
            name=name,
            email=email,
            phone=phone,
            subject=subject,
            message=message

        )
        new_contact.save()
        mailHandler.sendMailToUser(name, email)
        mailHandler.sendMailToVisaToCanada(name, email, phone, subject, message)
        messages.success(request, "Your query has been successfully submitted. We will get back to you soon.")
        return redirect("contactus")
class Workpage(TemplateView):
    template_name= "workvisa.html"
class Studentpage(TemplateView):
    template_name= "studentvisa.html"
class Investorpage(TemplateView):
    template_name= "investorvisa.html"
class Goldenpage(TemplateView):
    template_name= "goldenvisa.html"

class Spain_Comingpage(TemplateView):
    template_name= "spain_coming_soon.html"

class Denmark_Comingpage(TemplateView):
    template_name= "Denmark_coming_soon.html"

class Italy_Comingpage(TemplateView):
    template_name= "Italy_coming_soon.html"

class Greece_Comingpage(TemplateView):
    template_name= "Greece_coming_soon.html"

class policy(TemplateView):
    template_name= "policy.html"

class terms(TemplateView):
    template_name= "terms.html"

class general(TemplateView):
    template_name= "generaldisclaimer.html"

class givesit(TemplateView):
        template_name= "givesit.html"


class Newspage(View):
    def get(self,request,*args,**kwargs):

        all_news= News.objects.all()
        context= {
        "news":all_news
        }

        return render(request,"news.html",context)

@login_required(login_url='/admin/')
def refresh(request):
    if(models.News.objects.all().exists()):
        for i in range(10):
            old_news = News.objects.all()[0]
            old_news.delete()


    news= Scrapper()
    for i in range(10):
        current_news=News.objects.create(
        title= news.titles[i],
        date= news.dates[i],
        desc= news.descriptions[i],
        link= news.links[i],
        )
        current_news.save()


    return HttpResponse("News fetched successfully!")
