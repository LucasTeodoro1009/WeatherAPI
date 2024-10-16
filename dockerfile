# Use a imagem oficial do Node.js como base
FROM node:20

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia o package.json e package-lock.json para o container
COPY package*.json ./

# Instala as dependências do Node.js
RUN npm install

# Copia todo o código para o container
COPY . .

# Expõe a porta que a aplicação usará
EXPOSE 3000

# Define o comando para iniciar a aplicação
CMD ["npm", "start"]
