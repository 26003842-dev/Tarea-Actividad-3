
var mes;
mes = prompt("Ingresa tu mes de nacimiento 1-12");
var dia;
dia = prompt("Ingresa tu dia de nacimiento 1-31");

var mes = parseInt(mes);
var dia = parseInt(dia);

var signo = "";

switch (mes) {
    case 1: 
        if (dia <= 19) {
            signo = "Capricornio";
        } else {
            signo = "Acuario";
        }
        break;
    case 2: 
        if (dia <= 18) {
            signo = "Acuario";
        } else {
            signo = "Piscis";
        }
        break;
    case 3: 
        if (dia <= 20) {
            signo = "Piscis";
        } else {
            signo = "Aries";
        }
        break;
    case 4: 
        if (dia <= 19) {
            signo = "Aries";
        } else {
            signo = "Tauro";
        }
        break;
    case 5: 
        if (dia <= 20) {
            signo = "Tauro";
        } else {
            signo = "Géminis";
        }
        break;
    case 6: 
        if (dia <= 20) {
            signo = "Géminis";
        } else {
            signo = "Cáncer";
        }
        break;
    case 7: 
        if (dia <= 22) {
            signo = "Cáncer";
        } else {
            signo = "Leo";
        }
        break;
    case 8: 
        if (dia <= 22) {
            signo = "Leo";
        } else {
            signo = "Virgo";
        }
        break;
    case 9: 
        if (dia <= 22) {
            signo = "Virgo";
        } else {
            signo = "Libra";
        }
        break;
    case 10: 
        if (dia <= 22) {
            signo = "Libra";
        } else {
            signo = "Escorpio";
        }
        break;
    case 11: 
        if (dia <= 21) {
            signo = "Escorpio";
        } else {
            signo = "Sagitario";
        }
        break;
    case 12: 
        if (dia <= 21) {
            signo = "Sagitario";
        } else {
            signo = "Capricornio";
        }
        break;
    default:
        signo = "desconocido";
}

alert("Tu signo zodiacal es: " + signo);