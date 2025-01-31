FROM node:18

# Establece el directorio de trabajo
WORKDIR /app/api_Server

# Copia los archivos de dependencias primero
COPY api_Server/package*.json ./  
# Asegúrate de copiar los dos archivos: package.json y package-lock.json (si existe)

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY api_Server/ .

# Exponer el puerto 3000
EXPOSE 3000

# Ejecutar la API
CMD ["npm", "run", "start:dev"]
