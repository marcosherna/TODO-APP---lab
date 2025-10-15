# Imagen base
FROM nginx:alpine

COPY . /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
