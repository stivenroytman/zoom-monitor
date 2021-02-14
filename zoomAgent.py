#!/usr/bin/python

from json import loads,dumps
from selenium.webdriver import Firefox
from os import getenv
from time import sleep
from requests import post

url = getenv("CONFERENCE_URL")

driver = Firefox()

driver.get(url)

with open("getUpdate.js", "r") as JS_scriptFile:
    getUpdate = JS_scriptFile.read()

url = "http://localhost:8000/attend"
headers = {'content-type': 'application/json'}

while True:
    response = input("Continue? (y/n): ")
    if response == 'y':
        JSONout = loads(driver.execute_script(getUpdate))
        print(JSONout)
        post(url = url, data = dumps(JSONout), headers = headers)
    else:
        break







