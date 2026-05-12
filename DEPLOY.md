# ZYTRONIX - Production Deployment Guide

Guía inicial para desplegar ZYTRONIX en un servidor VPS usando Docker, PostgreSQL, FastAPI y Nginx.

## 1. Requisitos del servidor

- Ubuntu Server 22.04 o superior
- Docker
- Docker Compose
- Dominio apuntando al servidor
- Puertos abiertos: 80, 443

## 2. Subdominios recomendados

- `zytronix.online` → frontend principal
- `www.zytronix.online` → frontend principal
- `app.zytronix.online` → aplicación
- `api.zytronix.online` → backend FastAPI

## 3. Crear archivo .env

Copiar el archivo de ejemplo:

```bash
cp .env.example .env
```

Editar valores seguros:

```bash
nano .env
```

Importante:

- Cambiar usuario de base de datos
- Cambiar contraseña de base de datos
- Cambiar contraseña demo
- Cambiar SECRET_KEY

## 4. Levantar servicios

```bash
docker compose up -d --build
```

## 5. Verificar API

```bash
curl http://localhost:8000/health
```

Debe responder:

```json
{"status":"ok"}
```

## 6. Verificar Nginx

Abrir en navegador:

```text
http://zytronix.online
```

## 7. HTTPS / SSL

Para producción se recomienda usar Certbot o Nginx Proxy Manager.

Opción recomendada para primera fase:

- Instalar Nginx Proxy Manager externo
- Apuntar dominios
- Generar SSL Let's Encrypt desde interfaz gráfica

Opción técnica futura:

- Agregar contenedor Certbot
- Renovación automática
- Nginx con certificados montados

## 8. Próximo paso técnico

- Crear migraciones con Alembic
- Crear usuario administrador inicial
- Conectar frontend real al backend
- Configurar backups de PostgreSQL
- Configurar monitoreo

---

© 2026 ZYTRONIX Platform. Diseño del sistema: Christian Lahesa.
