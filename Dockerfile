FROM nginx
EXPOSE 5000

COPY nginx.conf /etc/nginx/nginx.conf
COPY www /usr/share/nginx/html