# PruebaTecnica

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

##Instrucciones:

Para correr el proyecto solo es necesario instalar las dependencias con "npm install" y correrlo con el "ng serve"

##Instrucciones de uso:

### Login y Registro
El proyecto al por defecto entrada a la página de inicio donde uno podrá elegir si desea Ingresar o Registrarse. Para ingresar solo basta con colocar su usuario y contraseña (por defecto coloque mi usuario y contraseña, pero de igual manera se puede borrar), en caso de que se desee registrar se debe dar click en "CREAR UNA AQUÍ", seguido de esto lo llevara a la pagina de registro. En caso hacer login o registrarse se generará un token el cual le permite ingresar a la aplicación.

### Rick y Morty
La aplicación tiene un header el cual tiene las siguientes funcionalidades:
* Ir a todos los personajes de Rick y Morty.
* Listar los episodios de Rick y Morty.
* Ir a los favoritos agregados.
* Salir de su cuenta

En la página de listado se mostrarán los personajes de Rick y Morty, este listado es un scroll infinito, por lo cual podrá bajar infinitamente hasta que llegué al último personaje, también por comodidad se implementó un botón de subida el cual aparece cuando se hace scroll, al presionarlo sube automáticamente hasta el top de la aplicación.

En la página de Episodios se mostrarán los episodios de Rick y Morty, esta tabla es paginada y ajustada al tamaño de los episodios. Dentro de la tabla se podrá navegar a un episodio donde contendrá subvista de los personajes de dicho episodio.

En la página de favoritos se mostrarán los personajes agregados a favorites. Se agregó unicamente el nombre y el estado de vida. (No se implementó el editar y el borrar).

Cada card de personaje tiene un botón de agregar a favoritos el cual enviara el personaje a la colección de favoritos, si el personaje ya este agregado no lo agregara.

Para salir de la cuenta basta con oprimir el boton de LogOut, el cual eliminara el token generado.
