# Zoom-Monitor

## Purpose

I made this to keep track of office hour attendance for one of the student orgs
that I manage. It bundles together a Python-Selenium based Zoom agent, a set of
JavaScript functions for pulling data out of the Selenium instance more
conveniently, and a GoLang server for catching POST requests from the Python
Zoom agent. All of that is glued together by a few shell scripts.

## System Dependencies

1. python3
2. python3-venv
3. golang
4. firefox-geckodriver (until I figure out a way to make the code more agnostic)

Note: This program is only expected to work properly on a Linux system. 

## Usage

```sh
git clone https://github.com/stivenroytman/zoom-monitor
cd zoom-monitor
./SETUP.sh # can be reexecuted if inaccurate information is given to prompts
./RUN.sh
```

This sequence of commands will spawn a browser window at the specified Zoom
meeting URL. Take whichever steps are necessary to join the meeting. Finally, go
back to the terminal where you initially executed this program, and press ENTER. 
It will print the JSON requests which were sent from the Zoom agent, and record
them line by line to data.txt file. 

Execute Ctrl+\ combination to kill the process in a way that makes sure that the
server stops listening.

## TODO

1. Improve portability by adding code that determines what webdrivers are
   available on the deployment system, rather than rigidly assuming Firefox.
2. Figure out a more graceful termination mechanism. The one currently
   suggested doesn't look pretty at all, and was a last moment consideration.
3. Add Python script for data parsing to some widely used format like CSV.

