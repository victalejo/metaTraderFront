# Guía de Contribución

¡Gracias por tu interés en contribuir a MetaTrader 5 - Sistema de Gestión! Este documento proporciona las pautas y mejores prácticas para contribuir al proyecto.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo Puedo Contribuir?](#cómo-puedo-contribuir)
- [Configuración del Entorno de Desarrollo](#configuración-del-entorno-de-desarrollo)
- [Proceso de Contribución](#proceso-de-contribución)
- [Estándares de Código](#estándares-de-código)
- [Guía de Estilo](#guía-de-estilo)
- [Commits y Mensajes](#commits-y-mensajes)
- [Pull Requests](#pull-requests)
- [Reportar Bugs](#reportar-bugs)
- [Solicitar Nuevas Características](#solicitar-nuevas-características)

## 📜 Código de Conducta

Este proyecto y todos sus participantes están regidos por un código de conducta. Al participar, se espera que mantengas este código. Por favor, reporta comportamientos inaceptables abriendo un issue.

### Nuestro Compromiso

- Usar un lenguaje acogedor e inclusivo
- Respetar diferentes puntos de vista y experiencias
- Aceptar críticas constructivas de manera profesional
- Enfocarse en lo que es mejor para la comunidad
- Mostrar empatía hacia otros miembros de la comunidad

## 🤔 ¿Cómo Puedo Contribuir?

Hay muchas formas de contribuir a este proyecto:

### 1. Reportar Bugs
- Usa la plantilla de issues para reportar bugs
- Describe el problema con el mayor detalle posible
- Incluye pasos para reproducir el error
- Proporciona capturas de pantalla si es relevante

### 2. Sugerir Mejoras
- Abre un issue describiendo la mejora propuesta
- Explica por qué esta mejora sería útil
- Proporciona ejemplos de uso si es posible

### 3. Contribuir con Código
- Corrige bugs reportados
- Implementa nuevas características
- Mejora la documentación
- Optimiza el rendimiento

### 4. Mejorar la Documentación
- Corrige errores tipográficos
- Añade ejemplos de uso
- Traduce la documentación
- Mejora las explicaciones existentes

## 🛠 Configuración del Entorno de Desarrollo

### Prerrequisitos

```bash
node --version  # v12.x o superior
npm --version   # v6.x o superior
```

### Instalación

1. **Fork el repositorio**

   Haz clic en el botón "Fork" en la parte superior derecha de la página del repositorio.

2. **Clona tu fork**

   ```bash
   git clone https://github.com/TU_USUARIO/metaTraderFront.git
   cd metaTraderFront/FrontendMt5
   ```

3. **Añade el repositorio original como upstream**

   ```bash
   git remote add upstream https://github.com/victalejo/metaTraderFront.git
   ```

4. **Instala las dependencias**

   ```bash
   npm install
   ```

5. **Verifica que todo funcione**

   ```bash
   npm start
   ```

## 🔄 Proceso de Contribución

### 1. Sincroniza tu Fork

Antes de empezar a trabajar, asegúrate de que tu fork esté actualizado:

```bash
git checkout main
git fetch upstream
git merge upstream/main
git push origin main
```

### 2. Crea una Rama

Crea una rama para tu contribución:

```bash
git checkout -b feature/nombre-descriptivo
```

Convenciones para nombres de ramas:
- `feature/` - Para nuevas características
- `bugfix/` - Para corrección de bugs
- `docs/` - Para cambios en documentación
- `refactor/` - Para refactorización de código
- `test/` - Para añadir o modificar tests

### 3. Realiza tus Cambios

- Escribe código limpio y bien documentado
- Sigue los estándares de código del proyecto
- Añade tests si es necesario
- Actualiza la documentación si es relevante

### 4. Prueba tus Cambios

```bash
# Ejecuta los tests
npm test

# Verifica el linting
npm run lint

# Prueba en el navegador
npm start
```

### 5. Commit tus Cambios

```bash
git add .
git commit -m "tipo: descripción breve del cambio"
```

### 6. Push a tu Fork

```bash
git push origin feature/nombre-descriptivo
```

### 7. Crea un Pull Request

- Ve a tu fork en GitHub
- Haz clic en "Compare & pull request"
- Completa la plantilla de PR
- Espera la revisión

## 💻 Estándares de Código

### TypeScript

- Usa TypeScript estricto
- Define tipos explícitos para variables y parámetros
- Evita el uso de `any` cuando sea posible
- Usa interfaces para objetos complejos

```typescript
// ✅ Bueno
interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(id: number): User {
  // ...
}

// ❌ Malo
function getUser(id: any): any {
  // ...
}
```

### Angular

- Sigue la guía de estilo oficial de Angular
- Un componente por archivo
- Usa servicios para lógica compartida
- Implementa OnDestroy para limpiar suscripciones

```typescript
// ✅ Bueno
export class MyComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.myService.getData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        // ...
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
```

### HTML/Templates

- Usa nombres de variables descriptivos
- Evita lógica compleja en templates
- Usa pipes para transformaciones

```html
<!-- ✅ Bueno -->
<div *ngIf="isUserLoggedIn">
  <p>{{ userName | titlecase }}</p>
</div>

<!-- ❌ Malo -->
<div *ngIf="user && user.token && user.token.length > 0">
  <p>{{ user.name.toUpperCase() }}</p>
</div>
```

### CSS/SCSS

- Usa clases semánticas
- Evita IDs para estilos
- Sigue la metodología BEM si es posible
- Prefiere variables para colores y espaciados

```css
/* ✅ Bueno */
.user-card {
  padding: var(--spacing-md);
  background-color: var(--color-primary);
}

.user-card__title {
  font-size: 1.5rem;
}

/* ❌ Malo */
#card1 {
  padding: 15px;
  background-color: #007bff;
}
```

## 🎨 Guía de Estilo

### Formato de Código

El proyecto usa TSLint para mantener la consistencia del código:

```bash
npm run lint
```

### Convenciones de Nomenclatura

- **Componentes**: PascalCase - `UserDashboardComponent`
- **Servicios**: PascalCase + Service - `UserService`
- **Variables**: camelCase - `userName`
- **Constantes**: UPPER_SNAKE_CASE - `MAX_USERS`
- **Archivos**: kebab-case - `user-dashboard.component.ts`

### Estructura de Archivos

```
my-component/
├── my-component.component.ts
├── my-component.component.html
├── my-component.component.css
└── my-component.component.spec.ts
```

## 📝 Commits y Mensajes

### Formato de Commits

Usamos Conventional Commits para mensajes de commit claros:

```
tipo(alcance): descripción breve

[cuerpo opcional]

[footer opcional]
```

### Tipos de Commits

- `feat`: Nueva característica
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (espacios, puntos y coma, etc.)
- `refactor`: Refactorización de código
- `test`: Añadir o modificar tests
- `chore`: Cambios en el proceso de build o herramientas

### Ejemplos

```bash
feat(payment): añadir integración con PayPal

fix(login): corregir validación de email

docs(readme): actualizar instrucciones de instalación

refactor(user-service): simplificar lógica de autenticación

test(dashboard): añadir tests unitarios para componente
```

## 🔍 Pull Requests

### Antes de Enviar

- [ ] El código compila sin errores
- [ ] Todos los tests pasan
- [ ] El código sigue los estándares del proyecto
- [ ] La documentación está actualizada
- [ ] Los commits siguen el formato convencional
- [ ] No hay conflictos con la rama main

### Plantilla de PR

```markdown
## Descripción
Breve descripción de los cambios realizados

## Tipo de Cambio
- [ ] Bug fix
- [ ] Nueva característica
- [ ] Cambio breaking
- [ ] Documentación

## ¿Cómo se ha probado?
Describe las pruebas realizadas

## Checklist
- [ ] Mi código sigue los estándares del proyecto
- [ ] He realizado una auto-revisión
- [ ] He comentado el código en áreas complejas
- [ ] He actualizado la documentación
- [ ] Mis cambios no generan nuevas advertencias
- [ ] He añadido tests que prueban mi corrección/característica
- [ ] Los tests nuevos y existentes pasan localmente
```

### Proceso de Revisión

1. Un mantenedor revisará tu PR
2. Se solicitarán cambios si es necesario
3. Una vez aprobado, se fusionará con main
4. Tu contribución aparecerá en el siguiente release

## 🐛 Reportar Bugs

### Antes de Reportar

- Busca en los issues existentes
- Verifica que estás usando la última versión
- Intenta reproducir el problema

### Plantilla de Bug Report

```markdown
**Descripción del Bug**
Descripción clara y concisa del problema

**Pasos para Reproducir**
1. Ve a '...'
2. Haz clic en '...'
3. Observa el error

**Comportamiento Esperado**
Qué esperabas que sucediera

**Capturas de Pantalla**
Si aplica, añade capturas

**Entorno**
- OS: [e.g. Windows 10]
- Navegador: [e.g. Chrome 95]
- Versión: [e.g. 1.0.0]

**Contexto Adicional**
Cualquier otra información relevante
```

## ✨ Solicitar Nuevas Características

### Plantilla de Feature Request

```markdown
**¿Tu solicitud está relacionada con un problema?**
Descripción clara del problema

**Describe la solución que te gustaría**
Descripción clara de lo que quieres que suceda

**Describe alternativas consideradas**
Alternativas que has considerado

**Contexto Adicional**
Cualquier otra información o capturas
```

## 🏆 Reconocimiento de Contribuidores

Todos los contribuidores serán reconocidos en el archivo CONTRIBUTORS.md y en los release notes.

## 📞 ¿Necesitas Ayuda?

Si tienes preguntas sobre cómo contribuir:

- Abre un issue con la etiqueta `question`
- Revisa la documentación del proyecto
- Contacta a los mantenedores

---

¡Gracias por contribuir a MetaTrader 5 - Sistema de Gestión! 🎉
