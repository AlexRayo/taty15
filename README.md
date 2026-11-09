# Invitación XV años · Tatiana Elizabeth

Astro + Tailwind CSS. Todo el contenido (textos, horas, WhatsApp) está en `src/data/evento.ts`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Publicar en Vercel
1. Sube esta carpeta a un repositorio de GitHub.
2. En vercel.com → Add New → Project → importa el repo (Vercel detecta Astro solo).
3. Cuando tengas la URL final, ponla en `site` dentro de `astro.config.mjs`
   para que la vista previa en WhatsApp muestre la foto.
