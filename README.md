# Social_App

Hola a todos, este proyecto ha sido una entrevista tecnica, la cual debia realizar un login, un registro, menu lateral con informacion
poder crear, eliminar y editar sus publicaciones y poder filtrar las publicaciones

Este proyecto se realizo con las siguentes siguiendo el patron de diseño MVC, tiene las siguientes configuraciones para que lo corras:

![image](https://github.com/SerGarHor/Social_App/assets/93298529/99139ff4-d561-49c1-98b9-b56caa3d6e72)

El backend de este proyecto tambien esta en el repositorio, aca el link: https://github.com/SerGarHor/Back_Social_App

Funciones importantes:

Se creo un servicio para poder controlar el token ya que el login y cada petición va con el JWT, por ende para ahorrar codigo cree este servicio
para que en cada petición se haga envio de el token en los headers

![image](https://github.com/SerGarHor/Social_App/assets/93298529/26f0a638-f96f-4dad-8503-884b5070c42a)

Se creo un guard para que el usuario que no este registrado o no se logue no tenga ingreso al home de la app

![image](https://github.com/SerGarHor/Social_App/assets/93298529/088b273f-ded2-4ad6-afd9-f99f24ffed5b)

He creado dos componentes para ser reutilizados en ciertas partes del codigo que tenia que hacer cosas parecidas
son dos dialog

![image](https://github.com/SerGarHor/Social_App/assets/93298529/c9e0de58-5450-4be4-9623-3b610705873e)

En un servicio podemos encontrar todas las peticiones http que se realizan en la app, esto con el fin de tener estructurado todo en un mismo archivo y organizado

![image](https://github.com/SerGarHor/Social_App/assets/93298529/e47a7093-84a3-4573-91ca-21aaf82d1c23)

Esto es como lo mas importante de la app, el resto ya puedes mirar el codigo y ver componente por componente 

Muchas suerte en el camino de la programación 🧑‍💻

