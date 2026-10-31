FROM composer:2 AS vendor
WORKDIR /app
COPY composer.json composer.lock symfony.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader --prefer-dist --no-progress
COPY . .
RUN composer dump-autoload --no-dev --classmap-authoritative

FROM dunglas/frankenphp:1-php8.4
ENV APP_ENV=prod APP_DEBUG=0
WORKDIR /app
COPY --from=vendor /app /app
# FrankenPHP serves public/ on the address in SERVER_NAME: plain HTTP on PORT.
CMD ["sh", "-c", "SERVER_NAME=\":${PORT:-8080}\" exec frankenphp run --config /etc/frankenphp/Caddyfile"]
