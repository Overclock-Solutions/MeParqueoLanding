# landing-meparqueo

Landing page oficial de **MeParqueo**: sitio one-page en español que presenta la app de parqueo inteligente en tiempo real para el centro de Montería, Colombia, con enlaces de descarga a App Store y Google Play.

## Parte del ecosistema MeParqueo

MeParqueo es un sistema IoT de parqueo inteligente en tiempo real. Este repo es la cara pública del producto; los demás componentes viven en repos hermanos de la organización:

| Repo | Descripción | Visibilidad |
|------|-------------|-------------|
| [app-meparqueo](https://github.com/bambai-labs/app-meparqueo) | App móvil React Native para conductores | Público |
| [api-meparqueo](https://github.com/bambai-labs/api-meparqueo) | Backend NestJS | Privado |
| [nodo-meparqueo](https://github.com/bambai-labs/nodo-meparqueo) | Firmware del sensor ESP32 (LoRaWAN) | Privado |
| [web-meparqueo](https://github.com/bambai-labs/web-meparqueo) | Frontend web | Privado |
| **landing-meparqueo** | Landing page (este repo) | Privado |
| [survey-meparqueo](https://github.com/bambai-labs/survey-meparqueo) | Encuestas / validación | Privado |

## ✨ Características

- **One-page con 11 secciones**: hero, problema, solución, tecnología, beneficios, comunidad, impacto, testimonios, FAQ, contacto y descarga (`src/pages/HomePage.tsx`).
- **Formulario de contacto con EmailJS**: envío directo desde el navegador, con selector de rol (usuario o dueño de parqueadero) y estado de envío manejado con Zustand.
- **Animaciones al hacer scroll**: Framer Motion + `react-intersection-observer` para revelar cada sección al entrar en el viewport.
- **Botones de descarga reales**: enlaces a la app publicada en App Store y Google Play (`src/components/ui/AppStoreButtons.tsx`).
- **SEO básico en español**: título y meta description orientados a la búsqueda de parqueadero en Montería.
- **Deploy automático**: GitHub Actions despliega a un VPS por SSH en cada push a `main` (build de Vite servido como estáticos).

## 🛠️ Stack

- **React 18 + TypeScript** sobre **Vite 5**
- **Tailwind CSS 3** (con PostCSS y Autoprefixer)
- **Framer Motion** — animaciones
- **Zustand** — estado del formulario
- **React Router 6** — enrutado (ruta única `/`)
- **@emailjs/browser** — envío del formulario de contacto sin backend
- **lucide-react** — iconos
- **ESLint 9 + typescript-eslint** — linting
- **GitHub Actions** (`.github/workflows/deploy.yml`) — CI/CD a VPS

## 📁 Estructura del proyecto

```
.bolt/                  # Config del scaffolding original (template bolt-vite-react-ts)
.github/workflows/      # deploy.yml: build y deploy al VPS en push a main
src/
├── assets/             # Logo y favicon en SVG
├── components/
│   ├── layout/         # Header y Footer
│   ├── sections/       # Las 11 secciones de la landing
│   └── ui/             # Botones de tiendas, iconos, logo
├── pages/              # HomePage (compone todas las secciones)
└── store/              # Store de Zustand (estado del formulario de contacto)
index.html              # Entry HTML con meta tags SEO en español
```

## 🚀 Desarrollo local

Requisitos: Node.js y npm.

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción (tsc + vite build)
npm run build

# Previsualizar el build
npm run preview

# Lint
npm run lint
```

### Variables de entorno

Copia `.env.example` a `.env` y completa las credenciales de EmailJS:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## 👥 Hecho por bambai-labs

Desarrollado por el equipo de [bambai-labs](https://github.com/bambai-labs).