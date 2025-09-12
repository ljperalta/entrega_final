## 📦 Imagen en Docker Hub

La imagen oficial se encuentra disponible en:  
👉 [Docker Hub - leoperalta905/mi-app](https://hub.docker.com/repository/docker/leoperalta905/mi-app/general)

Descargar la imagen desde Docker Hub:

```bash
docker pull leoperalta905/mi-app

Ejecutar Imagen descargada:

docker run -d -p 3000:3000 --env-file .env leoperalta905/mi-app
---

## 🛠️ Requisitos previos
- Archivo `.env` configurado con las variables necesarias, por ejemplo:

```env
PORT=3000
MONGO_URI=mongodb+srv://<usuario>:<password>@cluster0.mongodb.net/<db>?retryWrites=true&w=majority
