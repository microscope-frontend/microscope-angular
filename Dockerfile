FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY www /usr/share/nginx/html
EXPOSE 5000