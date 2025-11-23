# MetaTrader 5 - Sistema de Gestión

[![Angular](https://img.shields.io/badge/Angular-11.1.0-red.svg)](https://angular.io/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-4.5.2-purple.svg)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Sistema web para la gestión de MetaTrader 5 que incluye administración de usuarios, pagos, soporte técnico y gestión de riesgos.

> **Nota:** Este es el repositorio del frontend. El backend del proyecto se encuentra en [metaTraderBack](https://github.com/victalejo/metaTraderBack).

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Scripts Disponibles](#-scripts-disponibles)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

## ✨ Características

### Para Usuarios
- 🏠 **Dashboard de Usuario**: Panel principal con información personalizada
- 💳 **Gestión de Pagos**: Integración con ePayco para procesamiento de pagos
- 📊 **Gestión de Riesgos**: Herramientas para análisis y control de riesgos
- 🎫 **Sistema de Soporte**: Creación y seguimiento de tickets de soporte
- ⭐ **Sistema de Calificación**: Evaluación de servicios recibidos
- 👤 **Actualización de Perfil**: Gestión de información personal

### Para Administradores
- 🔐 **Panel de Administración**: Dashboard completo con métricas
- 👥 **Gestión de Usuarios**: Control y administración de cuentas
- 📝 **Administración de Tickets**: Gestión completa del sistema de soporte
- 💰 **Control de Comprobantes**: Validación y seguimiento de pagos
- 📈 **Reportes y Estadísticas**: Visualización de datos en tiempo real

## 🛠 Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- **Framework Frontend**: Angular 11.1.0
- **UI Framework**: Bootstrap 4.5.2
- **Tablas de Datos**: DataTables.net 1.10.23
- **Iconos**: FontAwesome 5.14.0
- **Gestión de Cookies**: ngx-cookie-service 11.0.2
- **Notificaciones**: angular2-notifications 9.0.0
- **HTTP Client**: Angular HttpClient
- **Routing**: Angular Router
- **Testing**: Karma + Jasmine

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 12.x o superior)
- [npm](https://www.npmjs.com/) (versión 6.x o superior)
- [Angular CLI](https://cli.angular.io/) (versión 11.x)

```bash
node --version
npm --version
ng --version
```

## 🚀 Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/victalejo/metaTraderFront.git
cd metaTraderFront/FrontendMt5
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Verificar instalación**

```bash
npm list --depth=0
```

## ⚙ Configuración

### Backend

Este frontend requiere el backend para funcionar correctamente. Asegúrate de clonar e instalar el repositorio backend:

```bash
git clone https://github.com/victalejo/metaTraderBack.git
```

Sigue las instrucciones de instalación en el repositorio del backend antes de continuar.

### Variables de Entorno

El proyecto utiliza dos archivos de configuración de entorno:

- `src/environments/environment.ts` - Para desarrollo
- `src/environments/environment.prod.ts` - Para producción

Configura las URLs de tu API backend en estos archivos:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api'
};
```

### Proxy de Desarrollo

El archivo `proxy.conf.json` permite configurar un proxy para desarrollo:

```json
{
  "/api": {
    "target": "http://localhost:3000",
    "secure": false
  }
}
```

### Integración con ePayco

Configura tus credenciales de ePayco en el archivo de servicios correspondiente.

## 💻 Uso

### Modo Desarrollo

Inicia el servidor de desarrollo:

```bash
npm start
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.

### Compilación para Producción

Genera los archivos optimizados para producción:

```bash
npm run build
```

Los archivos compilados se guardarán en el directorio `dist/`.

### Ejecutar Tests

```bash
# Tests unitarios
npm test

# Tests end-to-end
npm run e2e

# Linting
npm run lint
```

## 📁 Estructura del Proyecto

```
FrontendMt5/
├── e2e/                          # Tests end-to-end
├── src/
│   ├── app/
│   │   ├── components/           # Componentes de la aplicación
│   │   │   ├── home/            # Página de inicio
│   │   │   ├── dashboard/       # Dashboard de usuario
│   │   │   ├── dashboard-admin/ # Dashboard de administrador
│   │   │   ├── login-admin/     # Login de administrador
│   │   │   ├── payment/         # Módulo de pagos
│   │   │   ├── soporte/         # Sistema de soporte
│   │   │   ├── soporte-admin/   # Gestión de tickets (admin)
│   │   │   ├── usuarios-admin/  # Gestión de usuarios (admin)
│   │   │   ├── gestion-riesgos/ # Gestión de riesgos
│   │   │   └── ...              # Otros componentes
│   │   ├── models/              # Modelos de datos
│   │   ├── services/            # Servicios de la aplicación
│   │   └── shared/              # Guardias y utilidades compartidas
│   ├── assets/                  # Recursos estáticos
│   │   ├── images/             # Imágenes
│   │   ├── js/                 # Scripts JavaScript
│   │   └── lib/                # Librerías externas
│   └── environments/            # Configuraciones de entorno
├── angular.json                 # Configuración de Angular
├── package.json                 # Dependencias del proyecto
└── tsconfig.json               # Configuración de TypeScript
```

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Compila el proyecto para producción |
| `npm test` | Ejecuta las pruebas unitarias |
| `npm run lint` | Analiza el código en busca de errores |
| `npm run e2e` | Ejecuta las pruebas end-to-end |

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor, lee nuestra [Guía de Contribución](CONTRIBUTING.md) para más detalles sobre cómo participar en este proyecto.

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Autores

- **victalejo** - [GitHub](https://github.com/victalejo)

## 🔗 Repositorios Relacionados

- [metaTraderBack](https://github.com/victalejo/metaTraderBack) - Backend del sistema (API REST)

## 🙏 Agradecimientos

- Angular Team por el excelente framework
- Bootstrap por los componentes UI
- La comunidad de código abierto

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda, por favor:

- Abre un [issue](https://github.com/victalejo/metaTraderFront/issues)
- Revisa la documentación en el [Wiki](https://github.com/victalejo/metaTraderFront/wiki)

---

⭐️ Si este proyecto te resulta útil, ¡no olvides darle una estrella en GitHub!
