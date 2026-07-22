import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Configuración de Vite.
 *
 * Seguridad:
 * - `server.headers` aplica cabeceras de seguridad también en desarrollo,
 *   para detectar problemas de compatibilidad antes del despliegue.
 * - Las cabeceras de producción (CSP completa, HSTS, etc.) se definen
 *   en `vercel.json`, ya que se sirven desde el edge/CDN.
 */
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    },
  },
  build: {
    // Sourcemaps desactivados en producción para no exponer el código fuente.
    sourcemap: false,
  },
});
