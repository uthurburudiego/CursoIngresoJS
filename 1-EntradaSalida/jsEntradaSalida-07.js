/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
var numeroUno;
var numeroDos;
    
numeroUno=document.getElementById("txtIdNumeroUno").value;
numeroDos=document.getElementById("txtIdNumeroDos").value;
    
numeroUno = parseInt(numeroUno);
numeroDos = parseInt(numeroDos);

    alert(numeroUno+numeroDos);
    
     document.getElementById("txtIdNumeroUno").value = "";
     document.getElementById("txtIdNumeroDos").value = ""; 
}

function restar()
{
	numeroUno=document.getElementById("txtIdNumeroUno").value;
    numeroDos=document.getElementById("txtIdNumeroDos").value;
    
numeroUno = parseInt(numeroUno);
numeroDos = parseInt(numeroDos);

    alert(numeroUno-numeroDos);
    
     document.getElementById("txtIdNumeroUno").value = "";
     document.getElementById("txtIdNumeroDos").value = ""; 
}

function multiplicar()
{ 
	numeroUno=document.getElementById("txtIdNumeroUno").value;
    numeroDos=document.getElementById("txtIdNumeroDos").value;
    
numeroUno = parseInt(numeroUno);
numeroDos = parseInt(numeroDos);

    alert(numeroUno*numeroDos);
    
     document.getElementById("txtIdNumeroUno").value = "";
     document.getElementById("txtIdNumeroDos").value = ""; 
}

function dividir()
{
	numeroUno=document.getElementById("txtIdNumeroUno").value;
    numeroDos=document.getElementById("txtIdNumeroDos").value;
    
numeroUno = parseInt(numeroUno);
numeroDos = parseInt(numeroDos);

    alert(numeroUno/numeroDos);
    
 document.getElementById("txtIdNumeroUno").value = "";
 document.getElementById("txtIdNumeroDos").value = "";    
}

