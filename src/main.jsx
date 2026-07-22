import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './styles/globals.css';

/**
 * Punto de entrada de la aplicación.
 * StrictMode activa comprobaciones adicionales de React en desarrollo.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
