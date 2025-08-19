# ---------- RUNTIME STAGE ----------
FROM nginx:stable-alpine

# Удаляем дефолтный конфиг nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копируем свой конфиг (если нужен SPA роутинг)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем готовый билд (primeBuild) в папку, которую раздаёт nginx
COPY primeBuild /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]