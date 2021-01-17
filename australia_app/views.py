from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import View, TemplateView
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

class Newspage(View):
    def get(self,request,*args,**kwargs):
        news= Scrapper()
        for i in range(10):
            current_news=News.objects.create(
            title= news.get_titles[i],
            date= news.get_dates[i],
            desc= news.get_descriptions[i],
            link= news.get_links[i],
            )
            current_news.save()

        all_news= News.objects.all()
        context= {
        "news":all_news
        }

        return render(request,"news.html",context)
