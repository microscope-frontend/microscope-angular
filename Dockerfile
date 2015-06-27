FROM node:0.10-onbuild
EXPOSE 5000

COPY www /var/www/app
RUN npm install http-server -g
CMD["http-server", "/var/www/app", "-p", "5000"]