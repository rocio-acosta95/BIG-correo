

alert("Bienvenido a BIG envios");
alert("Servicio de envios por paqueteria y seguimiento");

const servicios = "envio";
const servicio2 =  "seguimiento";
let correo = prompt("Requiere hacer un envio o consultar seguimiento?");
if(correo == servicios){
    peso();
    Envio();
}else{
    if(correo==servicio2){
        seguimiento();
    }
}

function peso(){
   const precioPorKg = 970;
    let precioFinal;
    do{
        precioFinal = parseFloat(prompt("ingrese el peso de lo que quiere enviar"))
    }while(isNaN(precioFinal)){
        precioFinal *= precioPorKg
        alert("el costo de su envio es de " + precioFinal);
    }
    
}


function Envio(){
   alert("Nuestro alcance de envio es (La plata, Caba, Gba)")
   let env =  prompt("ingrese localidad a la que requiere hacer el envio");
   switch(env){
    case "la plata":
        alert("su encomienda llegara en 24hs. Su numero de seguimiento es #243460");
        break;
    case "caba":
        alert("su encomienda llegara entre 48-72hs. Su numero de seguimiento es #859674");
        break;
    case "gba":
        alert("su encomienda llegara entre 72-96hs. Su numero de seguimiento es #440145");
        break;
    default:
        alert("fuera de alcance de envio, disculpe!");
        break;
   }
}

//Use el metodo find para confirmar el numero de seguimiento dentro de un array de objetos 
//y un if else para confirmar el pedido
function seguimiento(){
const numSeguimiento = [
    {ciudad: "la plata", codigo: 243460},
    {ciudad: "buenos aires", codigo: 859674},
    {ciudad: "gran buenos aires", codigo: 440145}
]
let numero = parseInt(prompt("ingrese su numero de seguimiento"));
let pedido = numSeguimiento.find(objeto => objeto.codigo === numero);
if(pedido){
    alert("el pedido " + numero + " fue despachado con exito esperelo dentro del plazo informado, muchas gracias")
}else{
    alert("no se encontro ningun pedido relacionado con el numero ingresado, verifiquelo y intentelo mas tarde.")
}
}