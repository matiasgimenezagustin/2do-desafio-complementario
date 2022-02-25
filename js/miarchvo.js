
// Simulador de compras de Ebooks

//objeto constructor de los libros

function Libros (nombre, autor, precio, stock){
    this.nombre = nombre;
    this.autor = autor;
    this.precio = precio;
    this.stock = stock;
}

//Declaro los libros (objetos) a partir del constructor

const libro1 = new Libros ("Artemisa", "Andy Weir", 2000, 10);
const libro2 = new Libros ("Todos Nosotros", "Kike Ferrari", 2500, 5);
const libro3 = new Libros ("La Tierra Errante", "Cixin Lu", 3000, 5);
const libro4 = new Libros ("La Esfera Luminosa", "Cixin Lu", 2500, 5);
const libro5 = new Libros ("Visiones de Robot", "Isaac Asimov", 3000, 10);
const libro6 = new Libros ("El Mesias de Dune", "Frank Hebert", 2000, 3);

//Declaro Arrays a partir de los nuevos objetos

const listaNombresLibros = [libro1.nombre, libro2.nombre, libro3.nombre, libro4.nombre, libro5.nombre, libro6.nombre];
const listaLibros =  [libro1, libro2, libro3, libro4, libro5, libro6];

//Declaro las variables globales

let pedirLibros;
let esc;
let pedirCantidades;

//Declaro funciones basicas para el ciclo


function pedirNombre(){
    let nombreUser = prompt ("Ingrese su nombre:");
    return nombreUser;
}

function pedirLibro(){
    let stringNombres = listaNombresLibros.join("\n- ");
    pedirLibros = prompt("Bienvenido "+ pedirNombre() + "\nElija un libro de nuestro catalogo: \n- " + stringNombres);
}
function stringDescriptivo (nameObject){

    let stringDescripcion = "Indique la cantidad de libros desea comprar:" + "\n"+ "Nombre: " + nameObject.nombre + "\n- " + "Autor: " + nameObject.autor + "\n- " + "Precio: " + nameObject.precio;
    return stringDescripcion;
}
function pedirCantidad(nameObject){
    pedirCantidades = parseInt(prompt(stringDescriptivo(nameObject)));
}
function precio(nameObject){
    let precio = parseInt(pedirCantidades) * parseInt(nameObject.precio);
    return precio;
}

function stockInsuficiente(){
    alert("¡No hay stock suficiente!");
}
function decirPrecio (funcionPrecio){
    alert("El precio de su compra es: " + funcionPrecio + "$" + "\nGracias por su compra");
}
function condicionalCantidad(nameObject){
    if (pedirCantidad > nameObject.stock ){
        stockInsuficiente();
    }else{

        decirPrecio(precio(nameObject));
    }
}

//Declaro el Ciclo While que usare para simular el comprador, esta vez abuse del return y el ; jajajaja

while (esc != "ESC"){
    
    pedirLibro();
    if (pedirLibros == libro1.nombre){
        
        pedirCantidades = parseInt(prompt(stringDescriptivo(libro1)));
        condicionalCantidad(libro1);

    }else if ( pedirLibros == libro2.nombre){

        pedirCantidades = prompt(stringDescriptivo(libro2));
        condicionalCantidad(libro2);
        
    }
    else if ( pedirLibros == libro3.nombre){

        pedirCantidades = prompt(stringDescriptivo(libro3));
        condicionalCantidad(libro3);
        
    }
    else if ( pedirLibros == libro4.nombre){

        pedirCantidades = prompt(stringDescriptivo(libro4));
        condicionalCantidad(libro4);
        
    }
    else if ( pedirLibros == libro5.nombre){

        pedirCantidades = prompt(stringDescriptivo(libro5));
        condicionalCantidad(libro5);
        
    }
    else if ( pedirLibros == libro6.nombre){

        pedirCantidades = prompt(stringDescriptivo(libro6));
        condicionalCantidad(libro6);
        
    }
    esc = prompt("Si quiere seguir comprando ponga continuar\nToque ESC si quiere finalizar sus compras");
    if (esc != "continuar"){
        break;
    }
} 