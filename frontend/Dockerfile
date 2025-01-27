# Utilisez une image de base officielle de Node.js pour construire l'application
FROM node:18-alpine AS builder

# Définissez le répertoire de travail dans le conteneur
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application dans le répertoire de travail
COPY . .

# Construisez l'application
RUN npm run build

# Utilisez une image de base officielle de Nginx pour servir l'application
FROM nginx:alpine

# Copiez les fichiers de build de l'application dans le répertoire de Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Exposez le port 80 pour le serveur Nginx
EXPOSE 80

# Démarrez le serveur Nginx
CMD ["nginx", "-g", "daemon off;"]