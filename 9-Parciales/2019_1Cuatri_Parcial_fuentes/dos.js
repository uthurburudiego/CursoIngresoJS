/*NOMBRE: DIEGO UTHURBURU
PARCIAL 2

nunciado:
Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".
*/


function mostrar()
{
    var nombreUno;
    var nombreDos;
    var pesoUno;
    var pesoDos;
    var mensaje;
    var total;
    var promedio;

    
    nombreUno=prompt("Nombre de la primera persona: ");
    nombreDos=prompt("Nombre de la segunda persona: ");
    pesoUno=prompt("Ingrese el peso de la primera persona: ");
    pesoDos=prompt("Ingrese el peso de la segunda persona: ");
    
    pesoUno=parseFloat(pesoUno);
    pesoDos=parseFloat(pesoDos);
    
    total=pesoUno+pesoDos;    
    promedio= ((pesoUno+pesoDos)/2);
    
    mensaje="Ustedes se llaman: ";
    mensaje="Ustedes se llaman: ";
    mensaje=mensaje+nombreUno;
    mensaje=mensaje+" y ";
    mensaje=mensaje+nombreDos;
    mensaje=mensaje+" pesan ";
    mensaje=mensaje+pesoUno;
    mensaje=mensaje+" y ";
    mensaje=mensaje+pesoDos;
    mensaje=mensaje+" kilos, que sumados son ";
    mensaje=mensaje+total;
    mensaje=mensaje+" kilos y el promedio de peso ";
    mensaje=mensaje+promedio;


    alert(mensaje);
    
}
