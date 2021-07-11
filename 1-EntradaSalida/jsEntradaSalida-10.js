/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe ;
var descuento;
var resultado;
    
    importe = document.getElementById("txtIdImporte").value;
     
    importe= parseInt(importe);
    descuento=prompt("Ingrese el descuento");
    descuento=parseInt(descuento);
    
    resultado= importe - ((importe * descuento)/100);
     
	document.getElementById("txtIdResultado").value = resultado;
}