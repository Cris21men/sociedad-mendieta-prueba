# MENDIETA - Multiservicios de Construcción

Página web profesional para MENDIETA, especialistas en Carpintería Metálica, Melamina, Drywall, Aluminio y Vidrio.

## 🚀 Características

- ✅ Diseño moderno y profesional
- ✅ 100% Responsive (móvil, tablet, desktop)
- ✅ Carruseles interactivos con 10 imágenes por categoría
- ✅ Marca de agua "MENDIETA" en todas las imágenes
- ✅ Integración completa con WhatsApp (QR + botón flotante)
- ✅ Formulario de contacto funcional
- ✅ Animaciones suaves y profesionales
- ✅ SEO optimizado
- ✅ TypeScript para código más seguro

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultrarrápido
- **Swiper** - Carruseles modernos
- **React Icons** - Iconografía
- **Framer Motion** - Animaciones

## 📋 Requisitos Previos

- Node.js 16+ instalado
- NPM o Yarn

## 🚀 Instalación

1. **Instalar dependencias:**
```bash
npm install
```

2. **Configurar información de la empresa:**
Edita el archivo `/src/data/company.ts` con tus datos reales:
- RUC
- Teléfono
- Email
- Dirección
- Link del grupo de WhatsApp

3. **Agregar las imágenes:**
Coloca tus imágenes en las siguientes carpetas:
- `/public/images/carpinteria-metalica/` (metal-01.jpg hasta metal-10.jpg)
- `/public/images/melamina/` (melamina-01.jpg hasta melamina-10.jpg)
- `/public/images/drywall/` (drywall-01.jpg hasta drywall-10.jpg)
- `/public/images/aluminio-vidrio/` (vidrio-01.jpg hasta vidrio-10.jpg)

4. **Agregar logos:**
Coloca tus logos en `/public/images/logos/`:
- `mendieta-logo.png` (logo oscuro)
- `mendieta-logo-blanco.png` (logo blanco)
- `favicon.ico` (icono del navegador)

5. **Agregar QR de WhatsApp:**
Coloca el código QR en `/public/images/qr/whatsapp-grupo-qr.png`

## 💻 Comandos Disponibles

### Modo desarrollo:
```bash
npm run dev
```
Abre el navegador en `http://localhost:3000`

### Construir para producción:
```bash
npm run build
```
Genera los archivos optimizados en la carpeta `/dist`

### Vista previa de producción:
```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
mendieta-construccion/
├── public/               # Archivos estáticos
│   └── images/          # Imágenes del sitio
├── src/
│   ├── components/      # Componentes React
│   ├── types/           # Tipos TypeScript
│   ├── data/            # Datos de la aplicación
│   ├── utils/           # Funciones auxiliares
│   ├── styles/          # Estilos CSS
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Punto de entrada
├── package.json         # Dependencias
└── tsconfig.json        # Configuración TypeScript
```

## ✏️ Personalización

### Cambiar colores:
Edita `/src/styles/variables.css` y modifica las variables CSS.

### Agregar más servicios:
Edita `/src/data/services.ts` y agrega nuevos servicios con sus imágenes.

### Modificar textos:
Los textos principales están en:
- `/src/data/company.ts` - Info de la empresa
- `/src/components/Hero.tsx` - Sección principal
- `/src/components/Services.tsx` - Sección de servicios

## 📱 Integración WhatsApp

El sitio incluye dos formas de contacto por WhatsApp:

1. **Botón flotante:** Siempre visible en la esquina inferior derecha
2. **Código QR:** En la sección de contacto para unirse al grupo

Configura el link del grupo en `/src/data/company.ts`:
```typescript
whatsappGroup: {
  link: 'https://chat.whatsapp.com/TuCodigoDeGrupoAqui',
}
```

## 🌐 Deployment

### Vercel (Recomendado):
```bash
npm install -g vercel
vercel
```

### Netlify:
1. Conecta tu repositorio en netlify.com
2. Build command: `npm run build`
3. Publish directory: `dist`

## 📄 Licencia

© 2024 MENDIETA Construcción & Diseño. Todos los derechos reservados.

## 🤝 Soporte

Para soporte técnico, contacta a:
- Email: contacto@mendieta.com
- WhatsApp: +51 999 888 777

---

**Desarrollado con ❤️ para MENDIETA**
