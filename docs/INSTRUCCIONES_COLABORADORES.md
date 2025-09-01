# Guía para Colaboradores - Bolsa de Trabajo

Esta guía explica paso a paso cómo configurar el entorno de desarrollo para trabajar en el proyecto.

## 🚀 Configuración Inicial para Todos

### 1. Clonar el Repositorio
```bash
git clone https://github.com/CODES-UNLU/bolsa_de_trabajo_codes.git
cd bolsa_de_trabajo_codes
```

### 2. Verificar e Instalar GitFlow
```bash
# Verificar si GitFlow está instalado
git flow version

# Si no está instalado, instalar GitFlow:

# Windows (con Chocolatey)
choco install git-flow

# Windows (con Scoop)
scoop install git-flow

# macOS
brew install git-flow

# Linux (Ubuntu/Debian)
sudo apt-get install git-flow

# Linux (CentOS/RHEL/Fedora)
sudo yum install git-flow
# o
sudo dnf install git-flow

# Instalación manual (si los anteriores no funcionan)
# Descargar desde: https://github.com/nvie/gitflow/releases

# Verificar instalación exitosa
git flow version
# Debería mostrar algo como: "git-flow version 1.12.3 (AVH Edition)"
```

### 3. Cambiar a la Rama de Desarrollo
```bash
git checkout develop
git pull origin develop
```

> **Nota**: Si no puedes instalar GitFlow, puedes usar comandos Git nativos equivalentes:
> ```bash
> # En lugar de: git flow feature start nombre-feature
> git checkout -b feature/nombre-feature develop
> 
> # En lugar de: git flow feature finish nombre-feature
> git checkout develop
> git merge feature/nombre-feature
> git branch -d feature/nombre-feature
> ```

---

## 👨‍💻 Para Desarrolladores del Backend

### Prerrequisitos
- **Node.js** (versión 18 o superior)
- **PostgreSQL** instalado y ejecutándose
- **Git** con GitFlow

### Instalación de Node.js

#### Windows
1. Descargar desde [nodejs.org](https://nodejs.org/) (versión LTS)
2. Ejecutar el instalador
3. Reiniciar la terminal

#### macOS
```bash
brew install node
```

#### Linux (Ubuntu/Debian)
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Verificar Instalación
```bash
node --version  # Debe ser v18.0.0 o superior
npm --version   # Debe ser v8.0.0 o superior
```

### Configurar Backend
```bash
cd backend

# Instalar dependencias
npm install

# Configurar variables de entorno
cp env.example .env

# Editar .env con tus configuraciones
# Usar tu editor preferido (VS Code, nano, etc.)
```

### Configurar PostgreSQL
```bash
# Crear base de datos
createdb bolsa_trabajo

# O usando psql
psql -U postgres
CREATE DATABASE bolsa_trabajo;
\q
```

### Variables de Entorno (.env)
```env
PORT=3000
NODE_ENV=development
DATABASE_URL=postgresql://tu_usuario:tu_password@localhost:5432/bolsa_trabajo
JWT_SECRET=tu-secret-key-aqui
CORS_ORIGIN=http://localhost:5000
```

### Ejecutar Backend
```bash
# Servidor de desarrollo (con reinicio automático)
npm run dev

# Servidor de producción
npm start

# Ejecutar pruebas
npm test

# Verificar código
npm run lint
```

---

## 🎨 Para Desarrolladores del Frontend

### Prerrequisitos
- **Navegador web moderno** (Chrome, Firefox, Safari, Edge)
- **Git** con GitFlow
- **Servidor web local** (opcional, recomendado)

### Instalación de Servidor Local (Recomendado)

#### VS Code + Live Server
1. Instalar extensión "Live Server"
2. Click derecho en `frontend/src/index.html`
3. Seleccionar "Open with Live Server"

#### Python (si tienes Python instalado)
```bash
cd frontend/src
python -m http.server 8000
# Abrir http://localhost:8000
```

#### Node.js (si tienes Node.js)
```bash
cd frontend/src
npx serve .
# Abrir la URL que aparezca
```

### Configurar Frontend
```bash
cd frontend

# No hay dependencias que instalar (HTML/CSS/JS puro)
# Solo abrir index.html en el navegador o usar servidor local
```

### Estructura del Frontend
```
frontend/
├── src/              # Código fuente
│   ├── index.html    # Página principal
│   ├── css/          # Estilos
│   ├── js/           # JavaScript
│   └── pages/        # Otras páginas
├── public/           # Archivos PWA
│   ├── manifest.json
│   ├── service-worker.js
│   └── icons/
└── assets/           # Recursos
    ├── images/
    └── fonts/
```

---

## 🔄 Flujo de Trabajo GitFlow

### Para Todos los Desarrolladores

#### 1. Crear Feature Branch
```bash
# Desde develop
git checkout develop
git pull origin develop

# Crear nueva feature
git flow feature start nombre-de-tu-feature
```

#### 2. Desarrollar
- Hacer cambios en tu código
- Hacer commits frecuentes con mensajes descriptivos

```bash
git add .
git commit -m "feat: agregar funcionalidad X"
```

#### 3. Finalizar Feature
```bash
git flow feature finish nombre-de-tu-feature
```

#### 4. Subir Cambios
```bash
git push origin develop
```

---

## 🐛 Troubleshooting Común

### Backend

#### Error: "node: command not found"
- Verificar que Node.js esté instalado
- Reiniciar terminal después de instalación

#### Error: "connection to database failed"
- Verificar que PostgreSQL esté ejecutándose
- Verificar credenciales en `.env`
- En Windows: `services.msc` → PostgreSQL → Start

#### Error: "Cannot find module"
- Ejecutar `npm install` en la carpeta `backend/`

### Frontend

#### Página no carga correctamente
- Usar servidor local en lugar de abrir archivo directamente
- Verificar consola del navegador para errores

#### Cambios no se ven
- Hard refresh (Ctrl+F5 o Cmd+Shift+R)
- Verificar que estés editando el archivo correcto

### Git

#### Error: "git flow: command not found"
- **Instalar GitFlow** siguiendo las instrucciones de la sección "Verificar e Instalar GitFlow"
- **Alternativa**: Usar comandos Git nativos equivalentes
- **Verificar PATH**: Asegurarse de que GitFlow esté en el PATH del sistema

#### Error: "git-flow: command not found" (después de instalación)
- Reiniciar terminal/consola
- Verificar que la instalación fue exitosa: `git flow version`
- En Windows, verificar que GitFlow esté en el PATH
- En Linux/macOS, verificar permisos de ejecución

#### Error: "branch already exists"
- Verificar que no haya una rama con el mismo nombre
- Usar `git branch -a` para ver todas las ramas

---

## 📱 Desarrollo de PWA

### Características a Implementar
- Service Worker para funcionamiento offline
- Manifest para instalación
- Notificaciones push
- Diseño responsive

### Herramientas Útiles
- **Chrome DevTools**: Pestaña Application para PWA
- **Lighthouse**: Auditar PWA
- **PWA Builder**: Generar assets

---

## 🚀 Próximos Pasos

1. **Configurar tu entorno** siguiendo esta guía
2. **Crear tu primera feature branch**
3. **Desarrollar funcionalidad asignada**
4. **Hacer commits frecuentes**
5. **Finalizar feature y hacer merge**

## 📞 Soporte

Si tienes problemas:
1. Revisar esta guía
2. Verificar troubleshooting
3. Consultar con el equipo
4. Revisar issues en GitHub

---

**¡Bienvenido al proyecto! 🎉**
