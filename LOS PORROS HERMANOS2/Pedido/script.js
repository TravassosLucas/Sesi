
function comecar(){
    var nome = document.getElementById("exampleFormControlInput1").value
    show(nome);
}

function show(nome){
    document.getElementById("nomePrint").textContent = nome;
    var div = document.getElementById("selects-div");
    if(nome && nome.trim() !== ""){
     div.style.display = "block";
     document.getElementById("exampleFormControlInput1").style.background = "none";

    }

    else{
        
        document.getElementById("error").style.display = "block"
    }


function fechar(){
    document.getElementById("error").style.display = "none"
    document.getElementById("exampleFormControlInput1").style.display = "lightpink";

    
}
}