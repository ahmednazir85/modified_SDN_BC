FROM node
WORKDIR /app-frontend
COPY package.json /app-frontend

COPY . /app-frontend
EXPOSE 3000 8545
CMD ["npm", "start"]
