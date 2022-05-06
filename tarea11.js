function ej1()
{
    var nombre = prompt("Ingrese tu nombre: ");
     alert ('Ahora estas en la matrix, ' + nombre);
}

function ej2()
{
    var numDecimal = parseFloat(prompt("Ingrese el numero decimal: "));
    var numEntero =  parseInt(prompt("Ingrese el numero entero: "));
    var suma = numDecimal+numEntero;
    alert ("El resultado de la suma es: "+suma);
}

function ej3()
{
    var a = parseInt(prompt("Ingrese el primer numero: "));
    var b = parseInt(prompt("Ingrese el segundo numero: "));
    var suma = a+b;
    alert("Suman: " +suma)
    var c = parseInt(prompt("Ingrese el tercer numero: "));
    var multip = suma*c;
    return alert("Multiplicacion de la suma por el ultimo numero: "+multip);
}

function ej4()
{
    var kmRecorridos = parseInt(prompt("Kilometros recorridos: "));
    var LtsGastados = parseFloat(prompt("Litros de combustible gastados: "));
    var consumoTotal = kmRecorridos/LtsGastados;
    return alert("El consumo por Kilometro es de: "+consumoTotal);
}

function ej5()
{
    var fahrenheit = parseFloat(prompt("Ingrese una temperatura expresada en Fahrenheit: "));
    var celcius = (5/9)*(fahrenheit-32);
    return alert("Fahrenheit a Celsius: "+celcius);
}

function ej6()
{
    var a = parseFloat(prompt("Ingrese el primer numero: "));
    var b = parseFloat(prompt("Ingrese el segundo numero: "));
    var c = parseFloat(prompt("Ingrese el tercer numero: "));
    var promedio = (a+b+c)/3;
    return alert("El promedio de los tres es: "+promedio);
}

function ej7()
{
    var numero = parseInt(prompt("Digita un numero: "));
    var descuento = numero - (numero * 0.15);
    return alert("Descontando el 15% queda: "+descuento);
}

function ej8()
{p
    var palabraA = prompt("primer palabra: ");
    var palabraB = prompt("segunda palabra: ");
    var frase = palabraA + " " + palabraB;
    return alert(frase);
}

function ej9()
{
    var texto = prompt("Ingresa un texto: ");
    alert("El caracter en primer lugar: "+texto.charAt(0));
    var indice = prompt("Ingresa un numero positivo menor a "+texto.length+": ");
    if(indice >=0 && indice < texto.length)
    {
        return alert("El caracter en la posicion " + indice + " es: " +texto.charAt(indice));
    }
    else{
        return alert("Por favor ingrese un numero valido");
    }
}

function ej10()
{
    var showsVistos = parseInt(prompt("¿Cuantos shows viste el ultimo año?: "));
    var verdad = prompt("¿Es verdad? (si / no): ");
    if(verdad.toLowerCase() == "si" ? alert(true) : alert(false));
}

function ej11()
{
    var fecha = parseInt(prompt("Ingresa una fecha DDMMAAAA: "));
    alert("Fecha en formato DDMMAAAA: "+fecha);
    var fechaStr = fecha.toString();
    var dia = fechaStr.charAt(0)+fechaStr.charAt(1);
    var mes = fechaStr.charAt(2)+fechaStr.charAt(3);
    var anio = fechaStr.charAt(4)+fechaStr.charAt(5)+fechaStr.charAt(6)
    +fechaStr.charAt(7); 
    return alert("Fecha: "+dia+"/"+mes+"/"+anio);  
}

function ej12()
{
    var numero = parseInt(prompt("Numero entero: "));
    return alert((numero%2 == 0) ? true : false);
}

function ej13()
{
    var edad = parseInt(prompt("Tu edad: "));
    var articulos = parseInt(prompt("Articulos comprados: "));
    return alert((edad>18 && articulos>1) ? true : false);
}

function ej14()
{
    var texto = prompt("Ingresa una frase: ");
    return alert(((texto.length+1)%2 != 0) ? true : false);
}

function ej15()
{
    var primeraPalabra = prompt("Ingresa la primera palabra: ");
    var segundaPalabra = prompt("Ingresa la segunda palabra: ");
    return alert((primeraPalabra.length<segundaPalabra.length) ? true : false);
}

function ej16()
{
    var nombre1 = prompt("Tu nombre : ");
    var nombre2 = prompt("Otro nombre: ");
    return alert((nombre1.charAt(0)==nombre2.charAt(0) 
    || nombre1.charAt((nombre1.length)-1)==nombre2.charAt((nombre2.length)-1)) ? true : false);
}

function ej17()
{
    var numero = parseInt(prompt("Ingresa un numero entero: "));
    return alert((numero >= 0) ? "valor absoluto: "+numero : "valor absoluto: "+(numero*(-1)));
}

function ej18()
{
    var a = parseInt(prompt("Ingrese un numero: "));
    var b = parseInt(prompt("Ingrese otro numero: "));
    if( a > b){
        return alert(a + " es mayor");
    }else{
        if( a < b){
            return alert(b + " es mayor");
        }
        else{
            return alert("Son iguales")
        }
    }
    

}

function ej19()
{
    var letra = prompt("Ingresa una letra: ");
    if(letra.length > 1)
    {
        throw alert("No se puede procesar el dato.")
    }
    var vocales = ["a","e","i","o","u"];
    return alert((vocales.includes(letra.toLowerCase())) ? letra.toUpperCase()+" es vocal"
     : letra.toUpperCase()+" no es vocal");
}

function ej20()
{
    var numeros = [];
    var primerNumero = parseInt(prompt("Ingresa el primer numero: "));
    numeros.push(primerNumero);
    var segundoNumero = parseInt(prompt("Ingresa el segundo numero: "));
    numeros.push(segundoNumero);
    var tercerNumero = parseInt(prompt("Ingresa el tercer numero: "));
    numeros.push(tercerNumero);

    var numeroMenor = Math.min(...numeros);

    return alert("Menor: "+ numeroMenor);
}