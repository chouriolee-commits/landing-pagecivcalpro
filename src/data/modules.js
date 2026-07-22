/**
 * Módulos de cálculo de CivCalPro.
 * Las imágenes se importan aquí para que Vite las procese (hash + optimización).
 */
import computosMetricos from '../assets/images/modules/computos-metricos.png';
import dosificacionConcreto from '../assets/images/modules/dosificacion-concreto.png';
import bibliotecaMateriales from '../assets/images/modules/biblioteca-materiales.png';
import estimacionMateriales from '../assets/images/modules/estimacion-materiales.png';
import reportesExportacion from '../assets/images/modules/reportes-exportacion.png';
import { APP_URL } from './navigation';

/**
 * Construye la URL de un módulo específico de la plataforma.
 * Las claves (`computos`, `concreto`, `biblioteca`, `estimacion`, `reportes`)
 * son las mismas que usa internamente la app de CivCalPro.
 */
const moduleUrl = (key) => `${APP_URL}?modulo=${key}`;

export const MODULES = [
  {
    id: 'computos-metricos',
    icon: 'ruler',
    title: 'Cómputos Métricos',
    description:
      'Realiza cómputos detallados de materiales, cantidades y volúmenes.',
    image: computosMetricos,
    href: moduleUrl('computos'),
  },
  {
    id: 'dosificacion-concreto',
    icon: 'mixer',
    title: 'Dosificación de Concreto',
    description:
      'Calcula dosificaciones óptimas de concreto según resistencia y materiales.',
    image: dosificacionConcreto,
    href: moduleUrl('concreto'),
  },
  {
    id: 'biblioteca-materiales',
    icon: 'database',
    title: 'Biblioteca de Materiales',
    description:
      'Accede a una base de datos completa de materiales con sus propiedades.',
    image: bibliotecaMateriales,
    href: moduleUrl('biblioteca'),
  },
  {
    id: 'estimacion-materiales',
    icon: 'chart',
    title: 'Estimación de Materiales',
    description:
      'Estima cantidades de materiales necesarias para tu proyecto.',
    image: estimacionMateriales,
    href: moduleUrl('estimacion'),
  },
  {
    id: 'reportes-exportacion',
    icon: 'file-report',
    title: 'Reportes y exportación',
    description:
      'Genera reportes profesionales y exporta datos en múltiples formatos.',
    image: reportesExportacion,
    href: moduleUrl('reportes'),
  },
];

/** Pasos de la sección "¿Cómo funciona?". */
export const HOW_IT_WORKS_STEPS = [
  {
    id: 'paso-1',
    number: 1,
    title: 'Crea tu proyecto',
    description:
      'Ingresa los datos básicos de tu proyecto y configura las unidades de trabajo.',
  },
  {
    id: 'paso-2',
    number: 2,
    title: 'Selecciona tu módulo',
    description:
      'Elige la herramienta que necesitas según la etapa de tu proyecto.',
  },
  {
    id: 'paso-3',
    number: 3,
    title: 'Ingresa los datos',
    description:
      'Completa la información requerida. Nuestro sistema hace el resto.',
  },
  {
    id: 'paso-4',
    number: 4,
    title: 'Obtén resultados',
    description:
      'Visualiza, analiza y exporta tus resultados de forma profesional.',
  },
];
