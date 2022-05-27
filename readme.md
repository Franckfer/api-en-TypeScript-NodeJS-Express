##Dependencias 
class-validator: la dependecia class validator permite generar validadores de clases sobre sobre su contenido a travez de decoradores que van a corresponder al tipo de dato que sea.
cors: lo utilizamos para origen de cruzamiento de datos por ejemplo el consumo de una api del lado del back para que el navegador no nos bloquee la api ni tengamos problemas a la hora de consumir datos.
dotenv: con esta dependencia manejamos las variables de entorno en una clase de configuracion en un archivo y tambien vamos a administrar el ambiente ya sea desarrollo o produccion
express: utilizamos es framework para generar controladores, rutas, levantar un servidor, crear nuestras apis y muchas cosas mas 
morgan: para ver un logger por la consola el cual nos va a mostrar mas informacion sobre las rutas o los distintos metodos GET, POST etc o su status
typeorm: es un orm de base de datos sql el cual lo utilizamos para administar nuestra base de datos
typeorm naming strategies: el cual nos va a permitir renombra de un forma especifica una entidad en la DB

##Dependencias de desarrollo 
* que no van a ser utilizadas en produccion, es decir cuando el servidor este en producción no entraran en el package.json*
nodemon: nos permite levantar un servidor y actulizar el mismo cada vez que detecte un cambio sin tener que detener el proceso

#Comandos
tsc --init: nos permite crear un json con distintas config para TS

