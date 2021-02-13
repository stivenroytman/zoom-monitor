# Zoom-Monitor

## Purpose

I need a way to keep track of zoom conference attendance for the student org which I manage. The best solution 
that I came up with thus far uses an external API to send attendance notifications to my phone. I need a way to create
a more persistent record however, since the logging provided by zoom isn't reliable. The idea then is to:

1. Create a Go server that listens for POST requests on localhost.
2. On the same server, an instance of Zoom will be running, with JavaScript being executed in the browser console.
3. That JavaScript code will make POST requests to the Go server with attendance information scraped from the browser.
4. The server will append received POST requests to a CSV file.

