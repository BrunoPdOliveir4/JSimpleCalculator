//first off all I'll make it as modules.
//import sum from "./scripts/functions.js";

var string = document.getElementById("result");


function write(event){
    const value = event.target.innerHTML;
    const comparison = /[0-9]/
    if(comparison.test(value)){
        return string.innerHTML += value;
    }

}

const buttons = document.querySelectorAll(".lines");
buttons.forEach(element => {
    const comparison = /[0-9]/
    if(comparison.test(element.innerHTML)){
        element.addEventListener("click", write);
    }
});

function clearIt() {
    document.getElementById("result").innerHTML = " ";
}
/*
function add(text) {
    var addtext = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML= addtext+text;
}

function delt() {
    var backs = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = backs.substring(0, backs.length -1)
}
function equal() {
    var result = document.getElementById('result').innerHTML;
    if(result)
    {
        document.getElementById('result').innerHTML = eval(result)
    }
    else
    {
        window.alert('Nothing writed!')
    }
}

console.log(sum(1,2))*/