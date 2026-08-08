# Proyecto Programado 1 — Portafolio Profesional Interactivo

Curso: Programación para Dispositivos Móviles (TPA-4001)

Profesor: Diego Carrillo

Estudiante: Oscar Marín

Tecnología principal: React Native + Expo

## Descripción

Esta aplicación es un portafolio profesional interactivo desarrollado con React Native, Expo y TypeScript. Permite consultar un perfil profesional, visualizar habilidades, explorar una lista de proyectos y abrir detalles individuales de cada proyecto.

La navegación combina Bottom Tabs para cambiar entre Inicio y Proyectos, y Native Stack para abrir y regresar desde la pantalla de detalle.

## Objetivos

- Aplicar React Native en el desarrollo de una aplicación móvil.
- Implementar navegación móvil con Bottom Tabs y Native Stack.
- Utilizar componentes reutilizables para organizar la interfaz.
- Renderizar listas de datos mediante FlatList.
- Aplicar Flexbox para construir interfaces adaptables.
- Manejar estado local con useState.
- Aplicar principios básicos de UI/UX en una aplicación móvil.

## Funcionalidades principales

- HomeScreen con perfil profesional.
- Avatar con iniciales OM.
- Sección Sobre mí.
- Sección de habilidades profesionales.
- Disponibilidad interactiva usando useState.
- Botón Ver mis proyectos.
- ProjectsScreen con lista de proyectos.
- 4 proyectos simulados locales.
- Renderizado de proyectos con FlatList.
- ProjectCard reutilizable.
- ProjectDetailScreen dinámico según el proyecto seleccionado.
- Visualización de categoría, descripción y tecnologías.
- Navegación de regreso desde el detalle.
- Bottom Tabs para Inicio y Proyectos.
- Native Stack para ProjectsScreen y ProjectDetailScreen.

## Navegación

```text
Bottom Tabs
├── Inicio
└── Proyectos
    └── Native Stack
        ├── ProjectsScreen
        └── ProjectDetailScreen
```

Los Tabs permiten cambiar entre la pantalla de Inicio y el módulo de Proyectos. Dentro de Proyectos, el Native Stack permite abrir el detalle de un proyecto y regresar a la lista mediante el botón estándar de navegación.

## Estructura del proyecto

```text
src/
├── components/
│   ├── ProfileHeader.tsx
│   ├── ProjectCard.tsx
│   └── SkillChip.tsx
├── data/
│   └── projects.ts
├── navigation/
│   ├── AppNavigator.tsx
│   ├── ProjectStackNavigator.tsx
│   └── TabNavigator.tsx
├── screens/
│   ├── HomeScreen.tsx
│   ├── ProjectDetailScreen.tsx
│   └── ProjectsScreen.tsx
├── theme/
│   └── theme.ts
└── types/
    ├── navigation.ts
    └── project.ts
```

## Tecnologías utilizadas

- React Native: 0.86.2
- Expo: ~57.0.11
- TypeScript: ~6.0.3
- React: 19.2.3
- React Navigation Native: ^7.3.16
- React Navigation Bottom Tabs: ^7.18.16
- React Navigation Native Stack: ^7.18.8
- React Native Safe Area Context: ~5.7.0
- React Native Screens: ~4.26.0

## Requisitos previos

- Node.js
- npm
- Expo
- Expo Go o Android Emulator

## Instalación

```bash
git clone https://github.com/omarin0508/AppMovilesProy1OscarMarin.git
cd AppMovilesProy1OscarMarin
npm install
```

## Ejecución

Iniciar el servidor de Expo:

```bash
npx expo start
```

También puede ejecutarse con los scripts definidos en `package.json`:

```bash
npm run android
npm start
```

## Conceptos aplicados

### React Navigation

La aplicación usa Bottom Tabs para navegar entre Inicio y Proyectos, y Native Stack para abrir el detalle de un proyecto desde la lista.

### FlatList

ProjectsScreen utiliza FlatList para renderizar de forma ordenada y eficiente los proyectos simulados.

### Flexbox

Las pantallas y componentes utilizan Flexbox para organizar contenido, permitir wrapping de chips y mantener un diseño adaptable.

### useState

HomeScreen usa useState para mostrar u ocultar la disponibilidad profesional de forma interactiva.

### Componentes reutilizables

La interfaz está dividida en componentes reutilizables como ProfileHeader, SkillChip y ProjectCard.

### TypeScript

El proyecto utiliza TypeScript para tipar la navegación, los datos de proyectos y las props de los componentes.

## Manejo de datos

La aplicación no utiliza backend ni conexión a base de datos externa. Los proyectos se manejan como datos simulados locales en `src/data/projects.ts`.

Los datos están separados de la UI para mantener una estructura más clara. No existe persistencia porque no forma parte del alcance requerido para este proyecto.

## Control de versiones

El proyecto se desarrolló utilizando Git y GitHub con ramas independientes para cada bloque de trabajo:

- feature/home-screen
- feature/projects-list
- feature/project-detail
- feature/ui-ux-refinement
- feature/documentation

Cada funcionalidad se trabajó mediante commits progresivos y luego se integró en `main` mediante merges explícitos.

## UI/UX

La interfaz aplica una jerarquía visual clara, espaciado consistente, theme centralizado, diseño responsive, feedback táctil, accesibilidad básica y navegación clara.

El theme centraliza colores, spacing, border radius y tipografía básica en `src/theme/theme.ts`.

## Estado

Proyecto funcional y preparado para evaluación académica.

## Autor

Oscar Marín

Proyecto académico desarrollado para el curso Programación para Dispositivos Móviles (TPA-4001).
