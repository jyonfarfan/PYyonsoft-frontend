creando proyecto.
abrimos la carpeta con VSCODE y ponemos.

npm create vite

nombre proyecto: frontend
typescript + swc

instalando tailwind css

npm i -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

en tailwind.config.js

agregamos
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

e index.css lo borramos.
y agregamos
@tailwind base;
@tailwind components;
@tailwind utilities;

y App.css lo eliminamos igual.

agregamos extension Tailwind CSS IntelliSense

y eliminamos assets que tiene el logo de react para que no ocupe espacio.

y en public cambiamos el logo de vite por el que queramos.

se crea el archivo router.tsx / no vamos a trabajar en app asi que lo eliminamos

e instalamos

npm install react-router-dom

para poder ocuparlo en el router.tsx

instalamos tambien

npm install @tanstack/react-query
npm install @tanstack/react-query-devtools

@tanstack/react-query me da la logica para manejar la API, en vez de ocupar useEffect + useState manualmente se ocupa React Query.

en Main.tsx sacamos App que ya no esta funcionando porque lo borramos y ponemos el Router que va a hacer la logica de nuestra APP y lo declaramos con el import arriba.

**se importan las rutas browserRouter, Routes, Route.**

_browserRouter: prepara toda la logica para ocupar react router dom_
_Routes: nos va a permitir agrupar todas las rutas_
_Route: con este se define el componente que se va a mostrar y la URL._

agregaremos otra extension para hacer los imports de manera mas facil

Simple React Snippets

creamos el Views en /SRC y creamos un archivo que se llame LoginView.tsx para poner nuestro componente.

en Main.tsx sacamos App que ya no esta funcionando porque lo borramos y ponemos el Router que va a hacer la logica de nuestra APP y lo declaramos con el import arriba.

\_PARA NAVEGAR ENTRE COMPONENTES O VISTAS SIEMPRE OCUPAREMOS EL LINK, SOLO EL HREF LO OCUPAREMOS CUANDO TENEMOS QUE IR A UNA PAGINA QUE ESTARIA POR FUERA, EJ, PAGO ETC....
