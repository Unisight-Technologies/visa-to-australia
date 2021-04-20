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
#imports for recaptcha
import environ
import json
import urllib
from django.conf import settings
env = environ.Env()
# reading .env file
environ.Env.read_env()

# from .models import Comment
# from .forms import CommentForm
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

		''' Begin reCAPTCHA validation '''
		recaptcha_response = request.POST.get('g-recaptcha-response')
		url = 'https://www.google.com/recaptcha/api/siteverify'
		values = {
				'secret': settings.GOOGLE_RECAPTCHA_SECRET_KEY,
				'response': recaptcha_response
			}
		data = urllib.parse.urlencode(values).encode()
		req =  urllib.request.Request(url, data=data)
		response = urllib.request.urlopen(req)
		result = json.loads(response.read().decode())
		if result['success']:
			new_contact = models.Contact.objects.create(
				name=name,
				email=email,
				phone=phone,
				subject=subject,
				message=message

			)
			new_contact.save()
			mailHandler.sendMailToUser(request.POST.get('name'), request.POST.get('email'))
			mailHandler.sendMailToVisaToCanada(request.POST.get('name'), request.POST.get('email'),request.POST.get('phone'),request.POST.get('subject'),request.POST.get('message'))
			messages.success(request, 'Your message has been sent successfully!')
			return redirect('index')
		else:
			messages.error(request, 'Invalid reCAPTCHA. Please try again.')
			context={
			'SITE_KEY': env('RECAPTCHA_SITE_KEY')
			}
			return render(request,"contactus.html",context = context)
class Workpage(TemplateView):
	template_name= "workvisa.html"
class Studentpage(TemplateView):
	template_name= "studentvisa.html"
class Investorpage(TemplateView):
	template_name= "investorvisa.html"
class Goldenpage(TemplateView):
	template_name= "goldenvisa.html"

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
