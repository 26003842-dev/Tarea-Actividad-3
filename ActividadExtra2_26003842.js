
var jugar = "SI";

while (jugar == "SI") {
    
 
    var numero1 = Math.random() * 9;
    var numeroComputadora = Math.floor(numero1) + 1;

    
    var numeroUsuario = prompt("Escriba un numero del 1 al 9");
    numeroUsuario = parseInt(numeroUsuario);

    
    while (numeroUsuario < 1 || numeroUsuario > 9) {
        alert("Debe escribir un numero entre 1 y 9");
        numeroUsuario = prompt("Escriba un numero del 1 al 9");
        numeroUsuario = parseInt(numeroUsuario);
    }

    
    var prediccion = prompt("¿Su numero es mayor, menor o igual al de la computadora?");

    
    if (numeroUsuario > numeroComputadora) {
    
        if (prediccion == "mayor") {
            alert("La computadora eligio " + numeroComputadora + ", usted eligio " + numeroUsuario + ". Su eleccion es mayor. ¡Correcto!");
        } else {
            alert("La computadora eligio " + numeroComputadora + ", usted eligio " + numeroUsuario + ". Su eleccion es mayor. ¡No ha adivinado!");
        }
    }

    if (numeroUsuario < numeroComputadora) {
      
        if (prediccion == "menor") {
            alert("La computadora eligio " + numeroComputadora + ", usted eligio " + numeroUsuario + ". Su eleccion es menor. ¡Correcto!");
        } else {
            alert("La computadora eligio " + numeroComputadora + ", usted eligio " + numeroUsuario + ". Su elección es menor. ¡No ha adivinado!");
        }
    }

    if (numeroUsuario == numeroComputadora) {
      
        if (prediccion == "igual") {
            alert("La computadora eligio " + numeroComputadora + ", usted eligio " + numeroUsuario + ". Su eleccion es igual. ¡Correcto!");
        } else {
            alert("La computadora eligio " + numeroComputadora + ", usted eligio " + numeroUsuario + ". Su eleccion es igual. ¡No ha adivinado!");
        }
    }

   
    jugar = prompt("¿Quiere jugar otra vez? Escriba SI para seguir");
}

var nombre = "JULIO SALGUERO";
var carnet = "26003842";
alert("Nombre: " + nombre + " - Carnet: " + carnet);