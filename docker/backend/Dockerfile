FROM node:14.17.0-alpine
WORKDIR /app
COPY ./backend/package.json ./backend/package-lock.json ./
RUN npm install
COPY ./backend ./
EXPOSE 3500
