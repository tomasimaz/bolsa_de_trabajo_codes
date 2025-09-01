# Configuración GitFlow - Bolsa de Trabajo

Este documento describe la configuración específica de GitFlow para el proyecto.

## Configuración Actual

GitFlow ha sido inicializado con las siguientes configuraciones por defecto:

### Ramas Principales
- **main**: Rama de producción (código estable)
- **develop**: Rama de desarrollo principal

### Prefijos de Ramas de Soporte
- **feature/**: Para nuevas características
- **bugfix/**: Para correcciones de bugs
- **release/**: Para preparar releases
- **hotfix/**: Para correcciones urgentes en producción
- **support/**: Para soporte de versiones anteriores

### Configuración de Etiquetas
- **Prefijo de etiquetas**: Sin prefijo (vacío)
- **Directorio de hooks**: `.git/hooks`

## Comandos de Configuración

```bash
# Verificar configuración actual
git config --list | grep gitflow

# Ver configuración específica
git config --get gitflow.branch.master
git config --get gitflow.branch.develop
git config --get gitflow.prefix.feature
git config --get gitflow.prefix.release
git config --get gitflow.prefix.hotfix
git config --get gitflow.prefix.support
git config --get gitflow.prefix.versiontag
```

## Estado Actual

✅ **GitFlow inicializado correctamente**
✅ **Ramas principales creadas**: `main` y `develop`
✅ **Ramas subidas al repositorio remoto**
✅ **Estructura del proyecto commiteada**

## Próximos Pasos

1. **Crear primera feature branch**:
   ```bash
   git flow feature start nombre-feature
   ```

2. **Desarrollar en la feature branch**

3. **Finalizar feature**:
   ```bash
   git flow feature finish nombre-feature
   ```

4. **Crear release cuando esté listo**:
   ```bash
   git flow release start v1.0.0
   ```

## Convenciones de Nomenclatura

### Feature Branches
- `feature/autenticacion-usuario`
- `feature/lista-ofertas-trabajo`
- `feature/panel-administracion`

### Release Branches
- `release/v1.0.0`
- `release/v1.1.0`
- `release/v2.0.0`

### Hotfix Branches
- `hotfix/correccion-login`
- `hotfix/error-base-datos`
- `hotfix/seguridad-critica`
