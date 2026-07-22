# CivCalPro — Landing Page

Landing page oficial de **CivCalPro**, el software de cálculo para la construcción.
Redirige a la plataforma real: **https://civcalpro.vercel.app/**

Construida con **React 18 + Vite**, CSS puro con design tokens y sin dependencias
de UI de terceros.

---

## 🚀 Inicio rápido

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo (http://localhost:5173)
npm run build     # build de producción en /dist
npm run preview   # previsualizar el build
npm run lint      # análisis estático con ESLint
```

---

## 📁 Arquitectura

```
src/
├── app/            # Composición raíz (App.jsx) y estilos de componentes compartidos
├── assets/         # Imágenes, iconos y logo procesados por Vite
├── components/
│   ├── ui/         # Primitivas reutilizables: Button, Badge, SectionTitle, Icon, Container
│   ├── layout/     # Navbar (scrollspy + menú móvil) y Footer (newsletter + contacto)
│   └── cards/      # Tarjetas: FeatureCard, ModuleCard, TestimonialCard, StatCard
├── sections/       # Una carpeta por sección (JSX + CSS colocalizados)
├── data/           # Contenido separado de la UI (textos, enlaces, módulos, normas)
└── styles/         # Sistema global: variables (tokens), reset, tipografía, utilidades, animaciones
```

### Principios de diseño del código

- **Separación contenido/presentación**: todos los textos y enlaces viven en
  `src/data/`. Añadir un módulo, testimonio o norma es agregar un objeto a un
  array — sin tocar componentes.
- **Colocation**: cada sección tiene su JSX y su CSS juntos, de modo que se
  pueden añadir, eliminar o reordenar secciones editando solo `App.jsx`.
- **Design tokens**: colores, radios, sombras y espaciados centralizados en
  `styles/variables.css`. Un cambio de marca no requiere tocar componentes.
- **Componentes documentados** con JSDoc (props y propósito).
- **Accesibilidad**: HTML semántico, `aria-*` en menú móvil y formularios,
  `sr-only` para lectores de pantalla, `prefers-reduced-motion` respetado.

### Navegación

| Enlace del navbar | Destino |
| --- | --- |
| Inicio | `#inicio` (Hero) |
| Características | `#caracteristicas` |
| Módulos | `#modulos` |
| Normas | `#normas` |
| Contacto | `#contacto` (Footer con formulario y correo) |
| Probar CivCalPro | https://civcalpro.vercel.app/ (pestaña nueva) |

---

## 🔒 Ciberseguridad

Medidas implementadas en la web:

1. **Content Security Policy (CSP)** — definida en `vercel.json`:
   `default-src 'self'` bloquea scripts, estilos, imágenes y conexiones de
   orígenes no propios; `frame-ancestors 'none'` previene clickjacking;
   `object-src 'none'` y `base-uri 'self'` cierran vectores clásicos de
   inyección. No se carga ningún recurso de terceros (iconos y fuentes son
   locales), lo que permite una CSP estricta.
2. **Cabeceras de seguridad** (`vercel.json`, aplicadas por el edge de Vercel):
   - `Strict-Transport-Security` (HSTS con preload) — fuerza HTTPS.
   - `X-Content-Type-Options: nosniff` — evita MIME sniffing.
   - `X-Frame-Options: DENY` — refuerzo anti-clickjacking.
   - `Referrer-Policy: strict-origin-when-cross-origin` — limita fuga de URLs.
   - `Permissions-Policy` — deshabilita cámara, micrófono, geolocalización, etc.
   - `Cross-Origin-Opener-Policy: same-origin` — aísla el contexto de navegación.
3. **Enlaces externos seguros**: todo enlace externo lleva
   `rel="noopener noreferrer"` (automático en el componente `Button` y en los
   datos de navegación) para prevenir *reverse tabnabbing*.
4. **Formulario de newsletter endurecido**: validación y saneamiento del email
   en cliente (trim, patrón, `maxLength` 254) y campo *honeypot* contra bots.
   Las suscripciones se reenvían al buzón del propietario mediante
   [FormSubmit](https://formsubmit.co) (único origen externo permitido en
   `connect-src` de la CSP). La primera suscripción dispara un correo de
   activación de FormSubmit que debe confirmarse una sola vez.
5. **Sin `dangerouslySetInnerHTML`** en todo el proyecto: React escapa el
   contenido renderizado, eliminando XSS por inyección de HTML.
6. **Sin secretos en el repositorio**: `.env*` está en `.gitignore`.
7. **Sourcemaps desactivados** en producción (`vite.config.js`).
8. **Dependencias mínimas** (solo React y tooling) → superficie de ataque de
   cadena de suministro reducida. Ejecutar `npm audit` periódicamente.

> Nota: la CSP completa se aplica en producción vía cabeceras HTTP (no meta
> tags) porque el modo desarrollo de Vite requiere scripts inline para HMR.

---

## 🖼 Assets

- `src/assets/logo/civcalpro-logo.png` — logo original de CivCalPro.
- `src/assets/images/hero/` — mockup del dashboard en laptop.
- `src/assets/images/modules/` — ilustraciones de cada módulo.

Las imágenes se importan desde JS para que Vite les aplique hashing y
optimización en el build.

---

## ☁️ Despliegue

Pensada para Vercel (el archivo `vercel.json` ya define las cabeceras de
seguridad). También funciona en cualquier hosting estático sirviendo `/dist`;
en ese caso replica las cabeceras en la configuración del servidor
(nginx `add_header`, Netlify `_headers`, etc.).
