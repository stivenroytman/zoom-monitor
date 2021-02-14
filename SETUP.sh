#!/bin/sh

python3 -m venv env 
env/bin/pip install --upgrade pip setuptools wheel
env/bin/pip install -r requirements.txt
go build server.go
cp .stash/RUN.sh ./RUN.sh

echo "#!/bin/sh" > CONFIG.sh
read -p 'Zoom URL: ' ZOOM && echo "CONFERENCE_URL=$ZOOM" >> CONFIG.sh

# read -p 'Server Port (8000): ' PORT
# if [[ -z $PORT ]]; then
# 	PORT=8080
# fi
# echo "PORT=$PORT" >> CONFIG.sh
