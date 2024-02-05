function Soma(){

    var num1 = document.getElementById("num1").valueAsNumber;
    var num2 = document.getElementById("num2").valueAsNumber;

    var result = num1 + num2;
    document.getElementById("resultadosoma").textContent = result;
    console.log(result)
}

function Sub(){

    var num3 = document.getElementById("num3").valueAsNumber;
    var num4 = document.getElementById("num4").valueAsNumber;

    var result = num3 - num4;
    document.getElementById("resultadosub").textContent = result;
    console.log(result)
}

function Divisao(){

    var num5 = document.getElementById("num5").valueAsNumber;
    var num6 = document.getElementById("num6").valueAsNumber;

    var result = num5 / num6;
    document.getElementById("resultadodivisao").textContent = result;
    console.log(result)
}

function Multi(){

    var num7 = document.getElementById("num7").valueAsNumber;
    var num8 = document.getElementById("num8").valueAsNumber;

    var result = num7 * num8;
    document.getElementById("resultadomulti").textContent = result;
    console.log(result)
}

function Media(){

    var num9 = document.getElementById("num9").valueAsNumber;
    var num10 = document.getElementById("num10").valueAsNumber;
    var num11 = document.getElementById("num11").valueAsNumber;

    var result = (num9 + num10 +num11)/3;
    document.getElementById("resultadomedia").textContent = result;
    console.log(result)
}