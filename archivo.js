
//let x=1;
//let y=2;
//let z=x%y;
console.log(z);

//let x=true;
//let y=false;

console.log(x); 
console.log(!x);
console.log(!y);
console.log(!!x);


//let x=true;
//let y=false;

console.log(x===x); 
console.log(!x===y);
console.log(x !==y);
console.log(x !==x);


//Comparacion
//let x =5;
//let y =3;

console.log(x>y);
console.log(x<y);
console.log(y>=y);


//Operadores logicos 
//AND
//let x=true;
//let y=false;

console.log(x && y);
console.log(x&&x);

//OR
let x = true;
let y = false;

console.log(x || x);
console.log(x || y);
console.log(y || x);
console.log(y || y);

//COndicionales IF
let z = 35;
if (z > 20) {
    console.log("se cumple la condicion");
}

//Compuesta
if (1+1===3) {
    console.log("se cumple la condicion");
} else {
    console.log("no se cumple la condicion");
}

//Anidadas
var condicion = 2;
if(condicion === 1) {
    console.log("1 por eso me ejecuto");
}else if (condicion === 2) {
    console.log("2, por eso me ejecuto ");
}else {
    console.log("no es 1 o 2,por eso me ejecuto");
}

//selector o decision multiple
//sentencia switch

var nombre = "";
switch(nombre){
    case "pepe":
        console.log("hola pepe");
        break;
        case "luis":
            console.log("hola luis ");
            break;
            case "antonio":
                console.log("hola antonio");
                break;
                default:
                    console.log("ninguno de los nombres que pensamos es " + nombre);
}

//Operador ternario 
var descuento = true;
console.log("el pago son " + (descuento ? "20.000": "50.000"));

//interaccion con el ususario 
const prompt = require("prompt-sync")();
//let nombreUsuario = prompt("¿como te llamas?");
console.log(nombreUsuario);

//conversion de string a entero 

let texto ="58";
let numero = parseInt(texto);

console.log(typeof texto);
console.log(typeof numero);

