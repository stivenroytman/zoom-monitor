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

Execute Ctrl+\ combination to kill the process in a way that makes sure that the
server stops listening.
