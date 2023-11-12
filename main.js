

alert("Bienvenido a BIG envios");
alert("Servicio de encomiendas por paqueteria y seguimiento");

let servicios = "paquete"; "seguimiento";
let correo = prompt("Requiere enviar un paquete o verificar seguimiento?");
if(correo !== servicios){
    alert("El servicio que busca no corresponde")
}else{
    correo == servicios
    peso();
    Envio();
}
function peso(){
    let kg = 970;
    let peso = parseFloat(prompt("ingrese el peso del producto a enviar"));
    for (let i = 0; i = peso;){
    i *= kg;
    alert("el costo de su envio es de " + i);
    break;
   }   
   let e = confirm("desea continuar con el envio?");
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
