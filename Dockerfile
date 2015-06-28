from nginx
ENV PORT 5000
COPY www /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf