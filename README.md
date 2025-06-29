# 🔒 Sitio Web de Ciberseguridad

Un sitio web informativo y responsivo sobre ciberseguridad que educa a los usuarios sobre amenazas comunes, mejores prácticas de seguridad y incluye herramientas interactivas para evaluar conocimientos.
## 🌐 Demo en Vivo

**[Ver sitio web desplegado](https://ashranka.github.io/Evaluacion-Modulo2/)**
## 📋 Descripción

Este proyecto es un sitio web educativo de tres páginas que cubre:
- Introducción a la ciberseguridad
- Amenazas cibernéticas comunes
- Consejos y mejores prácticas de seguridad
- Test interactivo de conocimientos

## 🚀 Características

- **Diseño Responsivo**: Compatible con dispositivos móviles, tablets y escritorio
- **Framework Bootstrap 5**: Para un diseño moderno y componentes interactivos
- **Efectos jQuery**: Animaciones suaves y interacciones dinámicas
- **Formulario de Contacto**: Con validación JavaScript
- **Test de Seguridad**: Modal interactivo para evaluar conocimientos
- **Carrusel de Casos Reales**: Ejemplos históricos de ataques cibernéticos

## 🛠 Tecnologías Utilizadas

- **HTML5**: Estructura semántica del contenido
- **CSS3**: Estilos personalizados y animaciones
- **Bootstrap 5.3.7**: Framework CSS para diseño responsivo
- **JavaScript**: Funcionalidad interactiva
- **jQuery 3.6.0**: Manipulación del DOM y efectos
- **Git**: Control de versiones

## 📁 Estructura del Proyecto

```
ciberseguridad-web/
├── index.html              # Página principal
├── Amenzas.html            # Página de amenazas
├── Consejos.html           # Página de consejos
├── assets/
│   ├── css/
│   │   ├── style.css       # Estilos principales
│   │   └── responsive.css  # Media queries para responsividad
│   └── js/
│       └── script.js       # JavaScript principal
├── .gitignore              # Archivos excluidos del repositorio
└── README.md               # Documentación del proyecto
```

## 📱 Páginas del Sitio

### 1. Inicio (index.html)
- Hero section con mensaje llamativo
- Introducción a la ciberseguridad
- Navegación hacia otras secciones

### 2. Amenazas Comunes (Amenzas.html)
- Tarjetas interactivas con información sobre:
    - Phishing
    - Ransomware
    - Malware
    - Ataques DDoS
- Carrusel con casos reales de ataques históricos

### 3. Consejos de Seguridad (Consejos.html)
- Lista de mejores prácticas
- Formulario de contacto con validación
- Test de seguridad en modal interactivo
## 🎯 Funcionalidades Interactivas

### Formulario de Contacto
- Validación de campos obligatorios
- Verificación de formato de email
- Mensajes de confirmación/error

### Test de Seguridad
- 3 preguntas sobre hábitos de seguridad
- Evaluación automática con retroalimentación
- Recomendaciones personalizadas

### Efectos Visuales
- Animaciones CSS3 con hover effects
- Transiciones suaves entre elementos
- Efecto parallax en la sección hero
- Animación de escritura en títulos

## 📊 Responsive Design

El sitio está optimizado para:
- **Móviles**: 320px - 575px
- **Tablets**: 576px - 991px
- **Escritorio**: 992px+

## 🔧 Personalización

### Colores
Las variables CSS en `style.css` permiten cambiar fácilmente la paleta de colores:
```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --danger-color: #dc3545;
    /* ... más variables */
}
```
