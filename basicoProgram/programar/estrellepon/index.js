//node.js nos permite ejecutar codigo en java script y npm nos permite crear proyectos, agregarles librerias, etc. descargamos version 18.14.2 LTS de nodejs.org/en/ . instalamos y configuramos y verificamos con la terminal de comandos: node -v y npm -v. en la terminal uso principlamente cd.. para ir a carpeta anterior o cd (nombre de carpeta a la que quiero ir) y ls o dir para listar lo que hay en esa carpeta.

//creamos en la terminal el nombre del proyecto con todas las dependecias. este debe estar en la carpeta de nuestro juego. inicamos en terminal con npm init y enter, le ponermos nombre del proyecto y llenamos espacios que nos va pidiendo. te muestra la configuracion y damos aceptar . y ya se puede ver como quedó abriendo el package.json que tiene dicha configuración, que ya debe estar creado en la carpeta tambien. dentro de este esta el main donde lo llamamos index.js ahora cremos este docuemnto. le damos en nuevo archivo y lo nombramo sigual con extension .js
//en est earchivo ponemos ejemplo: console.log("hola Node") y en la terminal de comandos estando en la misma carpeta que esta este documento le doy node index.js y enter y nos ejecuto el codigo dentro de index.js.
// hay una libreria que nos permite crear servidores web, se llama express.js. en node.js se necesita instalar express y decirle a nuestro codigo que vammos a usarla, importar la libreria y tambien decirle el puerto de nuestro servidor para saber a q ue servidor nos estamos conectando desde nuestra computadora

//instamalos express por medio del terminal, ponemos npm install express y enter. cuando ya se instale, en package.json no va a aparecer dependencies y express y que ya podemos usarlo. y ahora creamos nuevo proyecto donde usemos express:

const express = require("express") /* creo una variable para importar libreria express.  require nos permite usar las librerias que instalamos con npm*/
const cors = require("cors")

/* con express podemos crear una aplicacion  para representar a nuestro srvidor y se encargue de poner todo el codigo para poder recibir las peticiones de los clientes y responderlas */

const app = express() // variable que va al macenar esa aplicacion. asi se genera una copia del servidor que voy a estar utilzando
//VISITAR SITIO "EXPRESS.JS"


app.use(express.static('public')) //importacion para hacer comunicacion con otros dispositivos conectados a la misma red. se puede llamar public o como sea. en esa carpeta metemos todos nuestros archivos eestaticos y asi podremos acceder al fronted de nuestra aplicacion desde el servidor de node.js. Creamos esta carpeta y metemos los archivos estaticos dentro.
 //le decimos a express que use esta libreria llamada cors
app.use(cors()) //como es una funcion lleva parentesis
app.use(express.json())//con esto ya deshabilité todos los posibles errores relacionado con cors y habilité la capacidad de recibir petviciones POST que traigan contenido en formato JSON

// creamos una lista de jugadores que se van a unir al servidor.
const jugadores = []

//cada vez que se agregue un jugador, vamos a hacer que nuestra pagina en el frontend llame un servicio en nuestro backend, para que se registre ese jugador y le devuelva su id

class Jugador {
    constructor(id) {
        this.id = id
    }
    asignarEstrellepon(estrellepon) { //estrellepon
        this.estrellepon = estrellepon
    }

    actualizarPosicion(x, y) { //coordenadas del estrellepon (hacemos esto para que el jugador guarde sus propias coordenadas)
        this.x = x
        this.y = y
    }

    asignarAtaques(ataques) {
        this.ataques = ataques
    }
}

class Estrellepon {
    constructor(nombre) {
        this.nombre = nombre
    }
}

app.get("/unirse", (req, res) => {// arrow function con variable req:peticion y   variable res: objeto qe nos permite manejar las respuesta al usuario
    const id = `${Math.random()}` //`${math.random()}` es un template string, vamos a hacer que ese numero se convierta en una cadena de texto. creamos un valor para que sea identificador unico, existen librerias para crear mejores identificadores unicos. una vez creado el id, lo agregamos a la lista de jugadores. ahora creamos una clase que va a representar a cada uno de los jugadores
    const jugador = new Jugador(id)

    jugadores.push(jugador)//agrego cada jugador a la lista y devolver su id
    res.setHeader("Access-Control-Allow-Origin", "*")//es para indicarle desde que origen vamos a permitirle que se hagan peticiones a nuestro servidor. usamos "*" para indicarle que cualquier origen es valido(no es recomendable por inseguro) * instalamos libreria CORS para solucionar esto y arriba la importamos 
    res.send(id)
}) //
//funcion app.get: cada vez que un cliente solicte un recurso(get: dar un recurso), vamos a relizar algo. 2 cosas: 1) indicarle en que URL solicitar ese recurso y 2) como le vamos a procesar esa solicitud, como le vamos a recibir los datos de esa peticion y tambien como vamos a responder a esa peticion.


app.post("/estrellepon/:jugadorId", (req, res) => { //vamos a recibir datos en JSON, creamos un segundo servicio llamado "/estrellepon/:jugadorId". se cra una variable tipo parametro(jugdorId): la cuaal viene en la URL al momento de realizar una peticion, luego se pone la funcion caallback que procesa la solicitud 
    const jugadorId = req.params.jugadorId || "" //asi accedemos a esta variable que se envio en la URL, si no lllegar a existir esta variable, ponemos || ""
    const nombre = req.body.estrellepon || "" //aqui recibo el nombre de mi estrellepon
    const estrellepon = new Estrellepon(nombre)//aqui se crea un objeto tipo estrellepon que recibe como primer argumento el nombre 
    //creamos una funcion definida ya en javaScript que nos permite buscar en tre todas las listas algun elemento que cumpla con alguna condicion y si existe nos devuelve un numero mayor que 0(nos retorna el numero de lista de ese objeto, si lo encuentra), la funcion se llama findIndex

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)//en la lista jugadores tengo la funcion findIndex que recibe otra funcion que es la que recibe la condicionn: encontramos un jugador cuando  el jugadorId que mandaron el la URL sea igual al jugador de la lista(cuando tambien tenga ese mismo id). Todo eso retorna en un valor que se guardara en la variable jugadorIndex.
    //ahora solo verificamos que sea mayor que 0
    
    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarEstrellepon(estrellepon)//en la lista general de todos los jugadores, busca el numero del jugador encontrado anteriormente y le asigan el estrellepon enviado desde el frontend con la funcion asignarEstrellepon
    }
    console.log(jugadores)//para obtener la lista de jugadores que se han agregado
    console.log(jugadorId)//ahora imprimo el jugador id, el valor del jugador qu esta haciendo esta peticion. como esta variable no esta definida, ENTONCES la extraemos de la solicitud que hace el cliente (REQ)
    res.end() //por ahora no respondemos nada
}) //ahora vamos a consumir esta peticion, con una petciion desde el FRONTEND, vamos a estrellepon.js donde el usuario eleige su estreellepon(usamos fetch de nuevo)


app.post("/estrellepon/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].actualizarPosicion(x, y)
    }

    //Aqui lo que vamos a hacer es obtener las demas coordenadas de todos los otros jugadores, menos la del jugador que acabda de hacer la solicitud

    const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id) //funcion que me devuelva todos los enemigos y ya que se teienen se devuelven a traves de la respuesta de esta peticion.
    //devolvemos un JSON por que en XPRESS.js no se pueden devolver listas, solo JSON
    //Entonces devolvemos un json que contenga esta lista
    res.send({
        enemigos
    })

    //res.end() //respondemos con un dato vacio
})


//ahora vamos a recibir datos sobre los ataques de cada usuario(personaje)
app.post("/estrellepon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const ataques = req.body.ataques || []// en caso de que no viniera nada, no va a llegar una cadena vacia, si no una lista vacia


    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarAtaques(ataques) // si el jugador existe, se añade la funcion para asignar los ataques correspondientes
    }
   
    res.end()

}) 

//creamos otro servicio para enviar los ataques del jugador colision desde el servidor
app.get("/estrellepon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const jugador = jugadores.find((jugador) => jugador.id === jugadorId)
    res.send({
        ataques: jugador.ataques || []
    })
})




app.listen(8080, () => {
    console.log("Servidor funcionando")
})// app. listen agrega capcidad de iniciar el servidor le indicamos un puerto 8080 por donde escuche las peticiones. Necesita minimo un callback para funcionar. console.log para indicar que el servidor ya arrancó. ahora lo ejecutamos con node index.js en la terminal

// nos debe aparecer "servidor funcionando", le damos ctrl + c para terminar proceso por ahora.

//para ver funcionamiento, vamos a navegador y ponemos localhost:8080/unirse y enter (el servdor debe estar activo) y ya nos va a dar la id(nuestro identificador generado con math. random). quiere decir que nuestro servidor estrellepon es una sal a de juego y se esta llenado con mas y mas jugadores con sus ids


// ABRO PARENTESIS(
 /* URI: URL + URN : UNIFORM RESOURCE IDENTIFIER : Forma en la que podemos conectarnos a un sitio, por medio de ese identificador unico
 
URL= UNIQUE RESOURCE LOCATION: localizacion especifica de un recurso
URN= nombre del recurso

URI : https://platzi.com:44/search?search=js#title

URL :  https://platzi.com:44/search?search=js

URN : #title

Esquema : https : varia a otros dependiendo si es para web o correo u otros 

Dominio : platzi.com : cada sitio tiene uno propio y tambien se puede acceder por medio de IP. Cuando accedamos a NUESTRA propia computadora, lo vamos a llamar LOCAL HOST
 
Puerto : 44 : numero por medio del cual le decimos a la computadora, a cual de todos los programas que tiene ejecutandose, nos queremos conectar(son muchos)

Ruta : search : ruta a la cual nos estamos conecrando, el recurso que queremos obtener de este sitio. en este caso la cadena de busqueda (search )

Cadena de busqueda : (opcional) sirve para enviarle algunas variables, datos para filtrar la informacion para encontrar de forma mas eespecifica
 
Nombre : title : nombre especifico

cada pagina web tiene su propio servidor y su propio nombre de dominio :  platz, wiipedia, google


cada puerto esta dedicado a una cosa distinta dentro del local host

para web: 80 en http y 443 para https

si usamos otro puerto, debemos indicarlo dentro de la URI

usaremos el puerto 8080, or que no es el puerto por defecto

cada puerto con un programa, correo, proyectoo de nodejs


PROTOCOLO HTTP nos permite hacer peticiones y obtener respuestas

HTTP tiene verbos: GET, POST, PUT, PATCH

GET: pedir o traer un recurso
POST: enviamos datos en segundo plano, pueden ser datos sensibles como un inicio de sesión
PUT: reemplaza representaciones actuales, es decir, las modifica
DELETE: elimina ese recurso
Hay más pero estas son las principales o las más usadas que utilizaras en el desarrollo BACK-END

POST: PARA ENVIAR DATOS SENSIBLES, EN SEGUNDO PLANO (PRIVADO)

buscar mas verbos*
 



 */

//CIERRA PARENTESIS )

//Ahora si, continuamos creando sal de juego con estrellepon. Vamos a el js de nuestro juego en la seccion de iniciar juego  tenemos que agregarle esa capacidad de que cuando se cargue el juego por primera vez en nuestro navegador, se invoque el servicio que creamos en nuestro node.js para unirnos a sala de juego y obtener nuestro id. creamos funcion unirseAlJuego()

//JSON: javaScript object notation, es un tipo de objeto en ell cual se define su estructura y no se define por medio de una clase. Y a traves de su estructura(con datos reales) ya definimos tambien el objeto(estructura y datos)

//estructura: {"clave":"valor"} //(ejemplo de pedido a reaturante)
//ejemplo: {Nombre:"Diana", Edad: 27}
//instalamos npm install cors en el terminal(especialmente diseñada para utilzar con express)

//ahora importamos libreria cors al inicio de mi proyecto


//despues de hacer que el servidor me envie las coordenadas y me pinte a los personajes de los demas jugadores en la partida, veo que  los personajes continuan titilando en la pantalla y eso es por el retardo entre el fronent y el backend (comunicacion). por ello creamos una variable auxiliar que va a ser la que estaremos dibujando.


//(con hostname seaccede al nombre del dispositivo)
//digitamos ipconfig para obtener info del dispositivo y copiamos Direccion IPv4 del dispositivo
//ya teniendola la ponemos como link asi: 192.168.1.104:8080/
