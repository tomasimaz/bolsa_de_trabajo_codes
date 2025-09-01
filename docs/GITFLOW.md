# Flujo de Trabajo GitFlow

Este documento describe el flujo de trabajo GitFlow implementado en el proyecto Bolsa de Trabajo.

## Ramas Principales

### `main` (antes `master`)
- Contiene el código de producción estable
- Solo se actualiza desde `develop` o `hotfix/*`
- Cada commit debe representar una versión estable

### `develop`
- Rama de desarrollo principal
- Contiene las últimas características desarrolladas
- Se integra con `feature/*` y `release/*`

## Ramas de Soporte

### `feature/*`
- Para desarrollar nuevas características
- Se crean desde `develop`
- Se fusionan de vuelta a `develop`
- Nomenclatura: `feature/nombre-caracteristica`

### `release/*`
- Para preparar una nueva versión de producción
- Se crean desde `develop`
- Solo correcciones de bugs y preparación de release
- Se fusionan a `main` y `develop`
- Nomenclatura: `release/v1.0.0`

### `hotfix/*`
- Para correcciones urgentes en producción
- Se crean desde `main`
- Se fusionan a `main` y `develop`
- Nomenclatura: `hotfix/correccion-urgente`

## Flujo de Trabajo

### Desarrollo de Características
1. Crear rama desde `develop`: `git checkout -b feature/nueva-caracteristica develop`
2. Desarrollar y hacer commits
3. Fusionar a `develop`: `git checkout develop && git merge feature/nueva-caracteristica`
4. Eliminar rama: `git branch -d feature/nueva-caracteristica`

### Preparación de Release
1. Crear rama desde `develop`: `git checkout -b release/v1.0.0 develop`
2. Hacer ajustes finales (versionado, documentación)
3. Fusionar a `main`: `git checkout main && git merge release/v1.0.0`
4. Etiquetar versión: `git tag -a v1.0.0 -m "Version 1.0.0"`
5. Fusionar a `develop`: `git checkout develop && git merge release/v1.0.0`
6. Eliminar rama: `git branch -d release/v1.0.0`

### Hotfix
1. Crear rama desde `main`: `git checkout -b hotfix/correccion-urgente main`
2. Corregir el problema
3. Fusionar a `main`: `git checkout main && git merge hotfix/correccion-urgente`
4. Etiquetar versión: `git tag -a v1.0.1 -m "Version 1.0.1"`
5. Fusionar a `develop`: `git checkout develop && git merge hotfix/correccion-urgente`
6. Eliminar rama: `git branch -d hotfix/correccion-urgente`

## Comandos Útiles

```bash
# Inicializar GitFlow
git flow init -d

# Crear feature
git flow feature start nombre-feature

# Finalizar feature
git flow feature finish nombre-feature

# Crear release
git flow release start v1.0.0

# Finalizar release
git flow release finish v1.0.0

# Crear hotfix
git flow hotfix start correccion-urgente

# Finalizar hotfix
git flow hotfix finish correccion-urgente
```

## Convenciones de Commit

- **feat**: Nueva característica
- **fix**: Corrección de bug
- **docs**: Documentación
- **style**: Cambios de formato
- **refactor**: Refactorización de código
- **test**: Agregar o modificar pruebas
- **chore**: Tareas de mantenimiento

Ejemplo: `feat: agregar sistema de autenticación`
