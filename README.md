# AI News — Sitio estático (HTML/CSS/JS)

Sitio sencillo para publicar y buscar noticias de IA. Sin frameworks ni build. Perfecto para desplegar en Netlify con deploy continuo desde GitHub.

## Estructura
├── index.html ├── styles.css ├── script.js

### Abrir PowerShell en la carpeta de destino 

En Explorador de archivos, ve a la carpeta donde quieres guardar el proyecto (por ejemplo, D:\clase-dorina\ o Documentos).

Haz Shift + clic derecho sobre un espacio vacío y elige:

“Abrir en Terminal” (Win 11) o

“Abrir ventana de PowerShell aquí” (Win 10).

Ahora ejecuta:

git clone https://github.com/TU-USUARIO/ai-news-site.git
cd ai-news-site

Resultado: se creará ai-news-site dentro de esa carpeta y te moverás dentro de ella.

# 2) Crear y cambiar a tu propia rama (NO trabajar en main)
git checkout -b ramadorina

# 4) Editar archivos en tu editor VS code
# index.html, styles.css, script.js 

# 5) Ver qué cambió
git status

# 6) Añadir los cambios al commit
git add .

# 7) Guardar los cambios con un mensaje claro
git commit -m "content: añade noticia X"

# 8) Publicar tu rama al repositorio remoto (primer push con -u)
git push -u origin ramadorina

# 9) Abrir el Pull Request (PR)
# Ve a GitHub: verás un botón "Compare & pull request" -> crear PR hacia main.
# En la descripción, explica brevemente qué cambiaste.

# 10) Si te piden cambios: corrige y vuelve a subir
# (no hace falta crear otra rama ni otro PR)
git add .
git commit -m "fix: ajustes tras revisión"
git push




