# Dockerfile
FROM node:20

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

# Compila a aplicação para produção
RUN npm run build

# Instala o servidor http-server para servir os arquivos
RUN npm install -g http-server

# Expõe a porta usada pelo http-server
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["http-server", "dist", "-p", "3000"]
