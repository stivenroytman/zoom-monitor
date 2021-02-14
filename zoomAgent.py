#!/usr/bin/python

from json import loads,dumps
from selenium.webdriver import Firefox
from os import getenv
from time import sleep
from requests import post

with open("CONFIG.sh", "r") as configFile:
    url = configFile.readlines()[1].split("L=")[1]

print(f"PYTHON| Conference URL: {url}")

driver = Firefox()

driver.get(url)

with open("recordAttendance.js", "r") as JS_scriptFile:
    getUpdate = JS_scriptFile.read()

url = "http://localhost:8000/attend"
headers = {'content-type': 'application/json'}

input("Press ENTER once CAPTCHA challenge is cleared.")

while True:
    JSONout = loads(driver.execute_script(getUpdate))
    print(JSONout)
    post(url = url, data = dumps(JSONout), headers = headers)
    sleep(300)







