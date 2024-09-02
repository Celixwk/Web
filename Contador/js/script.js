const btnIncre = document.querySelector(".inc");
const bodyDismi = document.querySelector(".dis");
const bodyReset = document.querySelector(".reset");
const botones = document.querySelector(".btn");
const contar = document.querySelector(".contar");

let counts = 0;

btnIncre.addEventListener("click", incrementar);
bodyDismi.addEventListener("click", disminuir);
bodyReset.addEventListener("click", reset);


function incrementar(){
    counts++;
    contar.innerHTML = counts;
    if(counts>0){
        contar.style.color = "green";
    }
    else if(counts == 0){
        contar.style.color = "black";
    }
}

function disminuir(){
    counts--;
    contar.innerHTML = counts;
    if(counts<0){
        contar.style.color = "red";
    }
    else if(counts == 0){
        contar.style.color = "black";
    }
}

function reset(){
    counts = 0;
    contar.innerHTML = counts;
    contar.style.color = "black";
}