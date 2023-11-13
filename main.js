

alert("Bienvenido a BIG envios");
alert("Servicio de envios por paqueteria");

const servicios = "envio";
let correo = prompt("indique el servicio que requiere");
if(correo !== servicios){
    alert("El servicio que busca no corresponde")
}else{
    peso();
    Envio();
}

function peso(){
   const precioPorKg = 970;
    let precioFinal;
    do{
        precioFinal = parseFloat(prompt("ingrese el peso de lo que quiere enviar"))
        precioFinal *= precioPorKg
    }while(isNaN(precioFinal));
    alert("el costo de su envio es de " + precioFinal);
}

function Envio(){
   alert("Nuestro alcance de envio es (La plata, Caba, Gba)")
   let env =  prompt("ingrese localidad a la que requiere hacer el envio");
switch(env){
 case "la plata":
     alert("su encomienda llegara en 24hs");
     break;
 case "caba":
     alert("su encomienda llegara entre 48-72hs");
     break;
 case "gba":
     alert("su encomienda llegara entre 72-96hs");
     break;
 default:
     alert("fuera de alcance de envio, disculpe!");
     break;
}
}
