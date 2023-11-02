

alert("Bienvenido a BIG envios");
alert("Servicios - paqueteria, mensajeria");


let correo = prompt("ingrese que tipo de servicio requiere");
if(correo = "mensajeria", "paqueteria"){
}else{
    alert("servicio no valido");                                        
}

let destino = prompt("ingrese el destino");
switch(destino){
    case "la plata":
        alert("llegara en 24hs");
        break;
    case "caba":
        alert ("el envio demora entre 24 - 48hs");
        break;
    case "gba":
        alert("demora entre 48 - 96hs");
        break;
    default:
        alert("ingrese destino valido");
        break;
} let enviar = confirm("desea continuar con el envio?");



let peso = parseInt(prompt("ingrese el peso aproximado del envio"));
for(let peso = 2; peso <= 5; peso++ ){
    if(peso === 2){
        alert("su pedido tiene un costo de $1875.82");
    let d = confirm("desea continuar con el envio?");
    if(d==true){
        alert("todo listo, muchas gracias");
    }else{
        alert("Adios!");
    }
    }
}
