from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import pandas as pd
from selenium import webdriver
from bs4 import BeautifulSoup
from selenium.webdriver.common.by import By
import time

options = webdriver.ChromeOptions()

# options.add_argument('--headless')  # runs browser in headless mode
options.add_argument('--no-sandbox')
options.add_argument("--disable-dev-shm-usage")
options.add_argument('--ignore-certificate-errors')
options.add_argument('--disable-gpu')
options.add_argument('--log-level=3')
options.add_argument('--disable-notifications')
options.add_argument('--disable-popup-blocking')
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')

url = "https://stocktwits.com/symbol/AMZN"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'}
driver = webdriver.Chrome('./chromedriver',options=options)

driver.open('http://google.com')