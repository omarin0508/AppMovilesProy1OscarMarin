import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'project-management-system',
    title: 'Sistema de Gestión de Proyectos',
    shortDescription:
      'Aplicación para organizar proyectos, tareas y seguimiento de actividades.',
    description:
      'Aplicación enfocada en facilitar la organización y visualización de proyectos mediante una interfaz clara y estructurada.',
    technologies: ['React Native', 'TypeScript', 'Expo'],
    category: 'Móvil',
  },
  {
    id: 'engineering-dashboard',
    title: 'Dashboard de Ingeniería',
    shortDescription:
      'Panel visual para consultar información técnica y métricas de proyectos.',
    description:
      'Dashboard diseñado para presentar datos técnicos de forma clara, permitiendo consultar indicadores y visualizar información relevante para proyectos de ingeniería.',
    technologies: ['React', 'TypeScript', 'Data Visualization'],
    category: 'Web',
  },
  {
    id: 'professional-web-portfolio',
    title: 'Portafolio Profesional Web',
    shortDescription:
      'Sitio web para presentar experiencia, habilidades y proyectos profesionales.',
    description:
      'Portafolio digital orientado a mostrar información profesional mediante una interfaz moderna, ordenada y adaptable a diferentes dispositivos.',
    technologies: ['React', 'TypeScript', 'CSS'],
    category: 'Web',
  },
  {
    id: 'task-control-app',
    title: 'Aplicación de Control de Tareas',
    shortDescription:
      'Aplicación móvil para organizar actividades y dar seguimiento a tareas pendientes.',
    description:
      'Aplicación sencilla para gestionar tareas mediante estados locales, priorizando facilidad de uso y navegación rápida.',
    technologies: ['React Native', 'Expo', 'TypeScript'],
    category: 'Móvil',
  },
];
