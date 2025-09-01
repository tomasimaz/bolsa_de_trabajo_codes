# Backend - Bolsa de Trabajo

API REST para la bolsa de trabajo de CODES UNLU.

## Tecnologías

### Stack Principal
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **PostgreSQL** - Base de datos relacional
- **JWT** - Autenticación
- **Socket.io** - Notificaciones en tiempo real

### Herramientas de Desarrollo
- **Nodemon** - Reinicio automático en desarrollo
- **Jest** - Testing
- **ESLint** - Linting de código
- **Prettier** - Formateo de código

## Estructura

```
backend/
├── src/
│   ├── controllers/    # Controladores de la API
│   ├── models/         # Modelos de datos
│   ├── routes/         # Definición de rutas
│   ├── middleware/     # Middlewares personalizados
│   └── utils/          # Utilidades y helpers
├── config/             # Configuraciones
├── tests/              # Pruebas unitarias e integración
├── package.json        # Dependencias y scripts
└── .env.example        # Variables de entorno de ejemplo
```

## Endpoints principales (planificados)

- `GET /api/jobs` - Listar ofertas de trabajo
- `POST /api/jobs` - Crear nueva oferta
- `GET /api/jobs/:id` - Obtener oferta específica
- `POST /api/applications` - Postular a oferta
- `GET /api/applications` - Listar postulaciones
- `POST /api/auth/login` - Autenticación
- `POST /api/auth/register` - Registro

## Instalación y Desarrollo

### Prerrequisitos

#### 1. Instalar Node.js
- **Windows**: Descargar desde [nodejs.org](https://nodejs.org/) (versión LTS recomendada)
- **macOS**: Usar Homebrew: `brew install node`
- **Linux (Ubuntu/Debian)**: 
  ```bash
  curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```

#### 2. Verificar instalación
```bash
node --version  # Debe ser v18.0.0 o superior
npm --version   # Debe ser v8.0.0 o superior
```

#### 3. Base de datos
- **PostgreSQL**: [Instrucciones de instalación](https://www.postgresql.org/download/)
  - **Windows**: Descargar desde [postgresql.org](https://www.postgresql.org/download/windows/)
  - **macOS**: `brew install postgresql`
  - **Linux (Ubuntu/Debian)**: `sudo apt-get install postgresql postgresql-contrib`

### Instalación del Proyecto

#### 1. Clonar el repositorio
```bash
git clone https://github.com/CODES-UNLU/bolsa_de_trabajo_codes.git
cd bolsa_de_trabajo_codes/backend
```

#### 2. Instalar dependencias
```bash
npm install
```

#### 3. Configurar variables de entorno
```bash
# Copiar archivo de ejemplo
cp env.example .env

# Editar .env con tus configuraciones
nano .env  # o usar tu editor preferido

#### 4. Configurar PostgreSQL
```bash
# Crear base de datos
createdb bolsa_trabajo

# O usando psql
psql -U postgres
CREATE DATABASE bolsa_trabajo;
\q
```

### Variables de Entorno
Copiar `env.example` a `.env` y configurar:
```env
PORT=3000
NODE_ENV=development
DATABASE_URL=postgresql://username:password@localhost:5432/bolsa_trabajo
JWT_SECRET=tu-secret-key
```

### Scripts Disponibles
- `npm run dev` - Servidor de desarrollo con nodemon
- `npm start` - Servidor de producción
- `npm test` - Ejecutar pruebas
- `npm run lint` - Verificar código

### Dependencias Principales

#### Producción
- **express**: Framework web para Node.js
- **cors**: Middleware para CORS
- **helmet**: Seguridad HTTP
- **morgan**: Logger de requests
- **dotenv**: Variables de entorno
- **jsonwebtoken**: Autenticación JWT
- **bcryptjs**: Encriptación de contraseñas
- **pg**: Cliente PostgreSQL para Node.js
- **sequelize**: ORM para PostgreSQL
- **socket.io**: Comunicación en tiempo real
- **express-validator**: Validación de datos

#### Desarrollo
- **nodemon**: Reinicio automático del servidor
- **jest**: Framework de testing
- **eslint**: Linting de código
- **prettier**: Formateo de código

### Troubleshooting

#### Error: "node: command not found"
- Verificar que Node.js esté instalado correctamente
- Reiniciar la terminal después de la instalación
- En Windows, verificar que Node.js esté en el PATH

#### Error: "npm: command not found"
- npm viene incluido con Node.js
- Si persiste, reinstalar Node.js

#### Error: "EACCES: permission denied"
- En Linux/macOS, usar `sudo npm install` o configurar npm para no usar sudo
- En Windows, ejecutar como administrador

#### Error: "Cannot find module"
- Ejecutar `npm install` para instalar dependencias
- Verificar que estés en el directorio correcto (`backend/`)

#### Error: "connection to database failed"
- Verificar que PostgreSQL esté ejecutándose
- Verificar credenciales en `.env`
- Verificar que la base de datos `bolsa_trabajo` exista
- En Windows: `services.msc` → PostgreSQL → Start

#### Error: "role 'username' does not exist"
- Crear usuario en PostgreSQL:
  ```sql
  CREATE USER username WITH PASSWORD 'password';
  GRANT ALL PRIVILEGES ON DATABASE bolsa_trabajo TO username;
  ```

## Estado

Estructura creada, pendiente de implementar funcionalidades.
