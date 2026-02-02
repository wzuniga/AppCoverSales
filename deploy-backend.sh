#!/bin/bash

# Script de despliegue para Backend

# Salir si ocurre un error
set -e

echo "📂 Entrando al directorio del backend..."
cd backend

echo "⬇️ Actualizando repositorio..."
git pull

echo "📦 Instalando dependencias..."
npm install

echo "🔄 Generando cliente de Prisma..."
npx prisma generate

echo "🔨 Construyendo proyecto..."
npm run build

echo "🔁 Reiniciando servicio con PM2..."
pm2 restart backend-cover-sales

echo "✅ Despliegue completado con éxito."
