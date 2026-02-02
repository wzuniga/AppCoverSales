#!/bin/bash

# Script de despliegue para Frontend

# Salir si ocurre un error
set -e

echo "📂 Entrando al directorio del frontend..."
cd frontend

echo "⬇️ Actualizando repositorio..."
git pull

echo "📦 Instalando dependencias..."
npm install

echo "🔨 Construyendo proyecto..."
npm run build

echo "🔁 Reiniciando servicio con PM2..."
pm2 restart frontend-cover-sales

echo "✅ Despliegue completado con éxito."
