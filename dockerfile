FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src .

# Expone el puerto en el que la app se ejecuta
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]