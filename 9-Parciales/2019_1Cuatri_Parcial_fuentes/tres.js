/*NOMBRE: DIEGO UTHURBURU
PARCIAL 3

Enunciado:
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
*/

function mostrar()
{
    var precio;
    var porcentaje;
    var descuento;
    var precioFinal;
    
    precio=prompt("Ingrese precio");
    porcentaje=prompt("Ingrese porcentaje de descuento");
    
    precio=parseFloat(precio);
    porcentaje=parseFloat(porcentaje);
    
    
    descuento=(precio*porcentaje)/100;
    precioFinal=precio-descuento;
    
    document.getElementById("elPrecioFinal").value=precioFinal;
    
}
