/*NOMBRE: DIEGO UTHURBURU
PARCIAL 1
Enunciado:
Bienvenidos.
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.

*/
function mostrar()
{
    var lado;
    var perimetro;
    
    lado=prompt("Escribir logitud de lado");
    lado=parseFloat(lado);
    
    perimetro=lado*3;
    
    alert("El perimetro del triangulo es: "+perimetro);
}

