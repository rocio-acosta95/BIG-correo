

alert("Bienvenido a BIG envios");
alert("Servicio de envios por paqueteria y seguimiento");

const servicios = "envio";
let correo = prompt("Requiere hacer un envio o consultar seguimiento?");
if(correo == servicios){
    peso();
    Envio();
}else{
    seguimiento()
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


function seguimiento(){

let numero = parseInt(prompt("ingrese su numero de seguimiento"));
const numSeguimiento = [243460, 859674, 544014]

for(let i = 0; i < numSeguimiento.length; i++){
    if(numero === numSeguimiento[i]){
        alert("su pedido " + numero + " fue despachado se entregara dentro del plazo informado")
    }
}
}