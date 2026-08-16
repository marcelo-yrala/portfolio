# Marcelo Yrala — Landing de Portafolio (PFO1)

Landing de portafolio personal de **Marcelo Yrala**, desarrollador de software en formación. Estética de **terminal-plus**: un homenaje a las estaciones de trabajo técnicas de mediados de los 90 y a la documentación de software libre, maquetada como una "workstation" brutalista: bordes duros, sombras de bloque, scanlines CRT y tipografía 100 % monoespaciada. Todo el contenido está en **español**.

La landing se organiza en **una sola página** con cinco secciones navegables (`#presentacion`, `#habilidades`, `#proyectos`, `#formacion`, `#contacto`), barra lateral de navegación en escritorio, barra inferior en móvil y pie de página.

## Descripción del PFO1

Trabajo práctico de la **Tecnicatura Superior en Desarrollo de Software**: construir una **landing de portafolio** personal que demuestre competencias de front end y diseño. La consigna pide: nombre y apellido, presentación, habilidades, contacto y una sección personal (formación); HTML semántico con `header`, `nav`, `main` y `footer`; CSS propio; **Google Fonts**; maquetación con **Flexbox/Grid**; diseño **responsive**; una transición o animación; imágenes con atributo `alt`; un formulario con `label`; un **enlace a GitHub visible**; publicación en **Vercel**; y un `README.md` con descripción, URL de Vercel, decisiones de diseño y la declaración de uso de IA.

## URL de Vercel


```
https://marcelo-yrala.vercel.app/
```

## URL del repositorio

> Repositorio público en GitHub: https://https://github.com/marcelo-yrala/portfolio



## Criterios de la consigna

| Requisito | Cómo se cumple |
| --- | --- |
| **Nombre y apellido** | Sidebar (escritorio), `h1` oculto de la landing y pie de página: **MARCELO YRALA**. |
| **Presentación** | Sección `#presentacion`: terminal con `whoami`, `cat presentacion.txt` y efecto máquina de escribir. |
| **Habilidades** | Sección `#habilidades`: bento de 4 módulos + tablas de competencias + card de enfoque. |
| **Contacto** | Sección `#contacto`: formulario con `label` y enlace de GitHub visible. |
| **Sección personal** | Sección `#formacion`: estudios (Tecnicatura, UBA y formación complementaria). |
| **HTML semántico** | `header` (topbar), `aside`/`nav` (sidebar), `main`, `section`, `article`, `figure`, `form` y `footer` (pie de página del sitio). |
| **CSS propio** | Hoja `assets/css/style.css` con design tokens y componentes propios (sin frameworks). |
| **Google Fonts** | **JetBrains Mono** (títulos, cuerpo y código) + iconos **Material Symbols Outlined**, con `preconnect`. |
| **Flexbox/Grid** | `display: grid` para bento, tablas-directorio, tarjetas y pie; `display: flex` para sidebars, barras, formularios y terminales. |
| **Responsive** | Escritorio ≥768px con sidebar fija de 256px; móvil con topbar + bottombar y contenido apilado. Verificado a 320px/360px sin desbordes. |
| **Transición/animación** | Hover con inversión de color, transiciones, cursor parpadeante, máquina de escribir y *reveal on scroll* (`IntersectionObserver`). |
| **Imágenes con `alt`** | `avatar.svg` y `featured.svg` con descripciones en `alt`. |
| **Formulario con `label`** | Campos `TU_NOMBRE`, `TU_EMAIL` y `MENSAJE` con `<label>` explícito. |
| **Enlace GitHub visible** | Botón **GITHUB** en sidebar, `PROTOCOLOS_ALT` de contacto y pie de página ([https://github.com/marcelo-yrala](https://github.com/marcelo-yrala)). |
| **Publicación en Vercel** | Publicado en <https://marcelo-yrala.vercel.app/> (ver "URL de Vercel"). |

## Estructura de archivos

```
portfolio/
├── index.html          # Landing completa (5 secciones + footer)
├── assets/
│   ├── css/
│   │   └── style.css   # Hoja de estilos única (design tokens + componentes)
│   ├── js/
│   │   └── main.js     # Interactividad (sin dependencias)
│   └── images/
│       ├── avatar.svg  # Avatar pixelado (SVG autocontenido)
│       └── featured.svg# Obra "generativa" del panel destacado
└── README.md
```

> El resto de carpetas del directorio raíz (`*_portfolio_retro*`) contienen los **exports de diseño de Stitch** (HTML de referencia y capturas) usados como fuente para este sitio. `system_static/DESIGN.md` define los tokens de diseño.

## Cómo verlo

El sitio es **100 % estático** — basta con abrir `index.html` en el navegador. Para una experiencia completa:

```bash
# Desde la carpeta portfolio/
python3 -m http.server 8000
# o
npx serve .
```

Luego abre <http://localhost:8000>. Solo se necesita conexión a internet para cargar las fuentes de Google Fonts.

## Sistema de diseño

Todos los valores provienen de `system_static/DESIGN.md` y de los tokens de los exports de Stitch:

- **Colores:** superficies neutras `#fcf9f8`/`#cccccc`, texto `#1c1b1b`, acento primario azul `#003594`/`#002265` y acento secundario rubí `#b80045`/`#e21a5a`.
- **Tipografía:** únicamente *JetBrains Mono* (headline 32px/24px, body 16px/14px, label 12px con tracking, code 13px).
- **Espaciado:** baseline de **4px**, gutters de 16px, márgenes de página de 24px, contenedor máximo de 1200px.
- **Formas:** radio 0 en todos los elementos (sin esquinas redondeadas).
- **Elevación:** sin sombras difusas; bloques de sombra sólidos (`4px 4px 0`), áreas hundidas con inset y fondos grises.
- **Textura:** scanlines CRT fijos y líneas horizontales de 1px sobre el fondo.

### Responsive

- **Escritorio (≥768px):** barra lateral fija de 256px + contenido con margen izquierdo.
- **Móvil (<768px):** barra superior fija + barra de navegación inferior, contenido apilado. Las anclas usan `scroll-margin-top` para no quedar ocultas bajo la barra superior.

## Interactividad (`assets/js/main.js`)

- `IntersectionObserver` para animación *reveal* de bloques al hacer scroll.
- Reloj del sistema en vivo en la barra lateral y topbar.
- Efecto máquina de escribir en el prompt del hero.
- Formulario de contacto: estado en vivo al enfocar/escribir y simulación de envío (`TRANSMITTING...` → `PAYLOAD_DELIVERED`).
- **Scrollspy:** resalta la sección visible en la navegación del sidebar y la bottombar.
- Cursor de terminal parpadeante (CSS).
- `prefers-reduced-motion` respetado para usuarios que evitan animaciones.

## Decisiones de diseño

- **Landing de una sola página** en lugar de multipágina: mejor para un portafolio breve, mantiene el contexto y simplifica la navegación móvil.
- **Estética retro-terminal**: coherente con la consigna "minimalist retro dev" y con la identidad de un desarrollador; permite mostrar habilidades de CSS sin depender de librerías.
- **Contacto como CTA final**: en lugar de un bloque separado "próximos pasos", el formulario de contacto cierra la página y actúa como llamado a la acción.
- **Enlace de GitHub visible** en tres lugares (sidebar, protocolos de contacto y pie) apuntando a [https://github.com/marcelo-yrala](https://github.com/marcelo-yrala), con `target="_blank"` y `rel="noopener noreferrer"`.
- **Imágenes SVG autocontenidas**: `avatar.svg` y `featured.svg` son generadas por IA (ver declaración) y no dependen de recursos externos.

## Justificación técnica: Flexbox y Grid

Se combinan **ambas tecnologías**, eligiendo cada una según la naturaleza del layout, como recomienda la práctica habitual de CSS:

- **`display: grid` para layouts 2D** (dos ejes simultáneos). El *bento* de habilidades (`grid-template-columns: repeat(4, 1fr)`), las tarjetas del *skills-grid* (`repeat(2, 1fr)`), la tabla-directorio de proyectos (`dir-row`/`dir-head` con columnas fijas) y el pie de página del sitio (`grid-template-columns: 1fr 1fr 1fr`) necesitan alinear filas **y** columnas a la vez, algo que Grid resuelve de forma declarativa y predecible.
- **`display: flex` para layouts 1D** (un solo eje). Las barras de navegación (topbar/sidebar/bottombar), los *fields* del formulario (`label` + control en línea), los *module-head*, los `term-window` y las *contact-alt-links* distribuyen contenido en un eje con alineación y *gap*, donde Flex es la opción natural y más simple.

**Decisión técnica:** Grid se usa cuando el contenido debe ocupar una **retícula** (componentes que comparten filas/columnas); Flex se usa para **alinear** o **distribuir** una secuencia de elementos. Ambos conviven y se degradan con `@media` a una sola columna en pantallas angostas, manteniendo el diseño fluido con unidades relativas (`fr`, `%`, `rem`).

## Variables CSS y variantes tipográficas

- **Variables CSS con intención:** el sistema de diseño vive en `:root` como *design tokens* (`--primary`, `--secondary`, `--surface`, `--container-max`, escala tipográfica y de espaciado 4px). Esto permite cambiar la marca completa desde un solo lugar, garantiza contraste y coherencia visual, y documenta la paleta.
- **Variantes tipográficas con intención:** JetBrains Mono se carga en tres pesos — `400` (cuerpo y código), `500` (metadatos/estados) y `700` (títulos, prompts, botones) — con una escala de 5 niveles (headline 32/24, body 16/14, label 12 con `letter-spacing: 0.1em` y mayúsculas, code 13). Los *labels* en mayúscula espaciada refuerzan la jerga técnica de la terminal; el peso 700 marca jerarquía en títulos y elementos interactivos.

## Animaciones personalizadas

- **Cursor de terminal parpadeante** (`@keyframes blink`): refuerza la metáfora de consola en prompts, directorios y la barra de estado.
- **Efecto máquina de escribir** en el hero (JS, sin librerías): escribe `echo "Desarrollo. Diseño. Aprendo. Creo."` con pasos de ~28ms.
- **Reveal on scroll** con `IntersectionObserver`: los bloques aparecen con una transición suave al entrar en el viewport.
- **Scrollspy** (JS): la navegación resalta la sección visible, guiando la lectura en la landing.
- **Hover con inversión de color** en tarjetas, filas-directorio y botones (`transition` 120–160ms).
- Todas las animaciones respetan `prefers-reduced-motion`, y los elementos decorativos (scanlines, cursores) usan `aria-hidden="true"` para no interferir con lectores de pantalla.

## Nivel alcanzado según la rúbrica

| Eje de la rúbrica | Nivel | Evidencia |
| --- | --- | --- |
| Estructura semántica y HTML | Supera | `header`, `nav`, `main`, `aside`, `section`, `article`, `figure`, `form`, `footer`; un solo `h1`; 4+ comentarios explicativos; `alt` en imágenes; roles ARIA (`banner`, `complementary`, `main`, `contentinfo`), `aria-labelledby`, `aria-live`, `role="progressbar"`, `aria-current` y captions `sr-only` en las tablas. |
| Maquetación con Flexbox/Grid | Supera | Combina Grid (retículas 2D: bento, skills-grid, directorio, pie) y Flex (barras, formulario, terminales) con justificación técnica arriba y unidades relativas. |
| Estilización y Google Fonts | Supera | JetBrains Mono con 3 pesos + escala tipográfica; variables CSS/design tokens con intención; contraste y jerarquía coherentes. |
| Interactividad y transiciones | Supera | Animaciones personalizadas (typewriter, cursor blink, reveal, scrollspy) con `prefers-reduced-motion` respetado. |
| Documentación y entrega | Propone/Supera | README avanzado con decisiones justificadas, URL de Vercel, perfil de GitHub y declaración de IA completa. Falta el historial de commits organizado en el repositorio (pendiente de creación). |

## Declaración de uso de IA

Este proyecto se desarrolló con asistencia de herramientas de IA:

- **Herramientas utilizadas:**
  - **Stitch** (diseño): los exports son la referencia visual del sitio; se llevaron a código HTML/CSS/JS.
  - **opencode** con un modelo de IA (plan gratuito, **DeepSeek**): asistencia para escribir y revisar el HTML, CSS y JavaScript.
- **Plan utilizado:** plan gratuito.
- **Experiencia previa:** Experiencia básica creando algunos sitios estáticos y en Python con Flask.
- **Qué revisé y adapté:** el código generado se revisó y ajustó manualmente para cumplir los criterios de la consigna (semántica HTML, un solo `h1`, accesibilidad, responsive, formulario con `label`), se validó el HTML, se verificó con el navegador que no haya desbordes horizontales a 320px/360px y se corrigieron los problemas encontrados (por ejemplo, el tamaño del placeholder del formulario y el desborde del botón CTA en pantallas muy angostas).
- **Imágenes:** `assets/images/avatar.svg` y `assets/images/featured.svg` fueron generadas por IA y guardadas como SVG.

## Personalización

Los valores de marca se centralizan en las variables `:root` del inicio de `assets/css/style.css`. Para cambiar acentos, fuentes o espaciado, basta con editar los tokens (por ejemplo `--primary`, `--secondary`, `--container-max`).

### Enlace de GitHub

El sitio enlaza al perfil público [https://github.com/marcelo-yrala](https://github.com/marcelo-yrala) en tres lugares de `index.html`: sidebar, `PROTOCOLOS_ALT` de contacto y pie de página.

