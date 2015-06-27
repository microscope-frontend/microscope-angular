FROM node:0.10-onbuild
EXPOSE 5000

COPY www /var/www/app
RUN npm install http-server -g
RUN http-server /var/www/app -p 5000