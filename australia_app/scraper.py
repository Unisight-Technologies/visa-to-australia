#%%
#Importing Libraries
import requests
from bs4 import BeautifulSoup

class Scrapper():

	def get_titles(soup):
		return [title.text for title in soup.find_all('strong')[1:11]]

	def get_dates(soup):
		return [date.text for date in soup.find_all('i')[1:11]]

	def get_links(soup):
		links = []
		for s in soup.find_all('strong')[1:11]:
			links.append(s.find('a', href=True)['href'])
		return links

	def get_descriptions(soup):
		descriptions = []
		for i in range(0, 10):
			descriptions.append(str(soup.find_all('br')[(2*i)+1].next_element).rstrip())
		return descriptions


	def __init__():
		base_url = 'https://www.acacia-au.com/immigration-news.php'
		r = requests.get(base_url, headers={"User-agent": "Mozzila/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"})
		c = r.content
		soup = BeautifulSoup(c, "html.parser")

		self.titles=get_titles(soup)
		self.dates=get_dates(soup)
		self.links=get_links(soup)
		self.descriptions=get_descriptions(soup)
