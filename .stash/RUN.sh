#!/bin/sh

source ./CONFIG.sh
./server >> data.txt & env/bin/python zoomAgent.py
