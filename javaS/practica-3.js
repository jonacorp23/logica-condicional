var n1,n2,n3,t,mayor;
    console.log(n1, n2, n3);

    var n1 = parseInt(prompt("¿cual es el primer nuemro?"));
    var n2 = parseInt(prompt("¿cual es el segundo numero?"));
    var n3 = parseInt(prompt("¿cual es el tercer numer?"));

    if (n1 > n2 && n1 > n3) {  mayor = n1;} else if (n2 > n3) {  mayor = n2;} else {  mayor = n3;}

alert("el mayor es:"+mayor);