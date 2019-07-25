#!/bin/sh

apt install nginx npm nodejs -y
cd /var/www/
git clone https://github.com/pikou1995/leahjoying.git
cd leahjoying
chmod +x run.sh
./run.sh
