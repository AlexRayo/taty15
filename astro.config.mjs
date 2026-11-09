// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Cuando tengas el dominio de Vercel, ponlo aquí para que la vista previa
  // en WhatsApp/Facebook muestre la foto (ej. 'https://taty15.vercel.app').
  // site: 'https://taty15.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
