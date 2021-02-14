#!/bin/sh

. ./CONFIG.sh
./server >> data.txt & SERVER_PID=$! 

env/bin/python zoomAgent.py || kill $SERVER_PID
