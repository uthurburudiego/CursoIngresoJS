/*
NOMBRE: Diego Uthurburu
EJERCICIO: TP1

1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 

{
    //Variables
	var precioUno;
    var precioDos;
    var precioTres;
    var resultado;
    var total;
    
    //Capturando precios
    precioUno=document.getElementById("txtIdPrecioUno").value;
    precioDos=document.getElementById("txtIdPrecioDos").value;
    precioTres=document.getElementById("txtIdPrecioTres").value;
    
    //Transformando variable a numero
    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);
    
    //Operacion total
    resultado=precioUno + precioDos + precioTres;
    
    alert(resultado);
    
    //Borrado de precios
    document.getElementById("txtIdPrecioUno").value="";
    document.getElementById("txtIdPrecioDos").value="";
    document.getElementById("txtIdPrecioTres").value="";
}
function Promedio () 
{
     //Capturando precios
	precioUno=document.getElementById("txtIdPrecioUno").value;
    precioDos=document.getElementById("txtIdPrecioDos").value;
    precioTres=document.getElementById("txtIdPrecioTres").value;
    
    //Transformando variable a numero
    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);
    
    //Operaciones total y promedio
    total=precioUno + precioDos + precioTres
    resultado=total/3;
    
    alert(resultado)
    
     //Borrado de precios
    document.getElementById("txtIdPrecioUno").value="";
    document.getElementById("txtIdPrecioDos").value="";
    document.getElementById("txtIdPrecioTres").value="";
}
function PrecioFinal () 
{
     //Capturando precios
	 precioUno=document.getElementById("txtIdPrecioUno").value;
    precioDos=document.getElementById("txtIdPrecioDos").value;
    precioTres=document.getElementById("txtIdPrecioTres").value;
    
    //Transformando variable a numero
    precioUno=parseInt(precioUno);
    precioDos=parseInt(precioDos);
    precioTres=parseInt(precioTres);
    
    //Operaciones total y IVA
    total=precioUno + precioDos + precioTres;
    resultado=total+ (total*0.21);
    
    alert(resultado);
    
     //Borrado de precios
    document.getElementById("txtIdPrecioUno").value="";
    document.getElementById("txtIdPrecioDos").value="";
    document.getElementById("txtIdPrecioTres").value="";
}