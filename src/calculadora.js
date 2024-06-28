let string = document.getElementById("result");
const buttons = document.querySelectorAll("#toCount");
const result = document.getElementById("mathResult");
const clearAll = document.getElementById("clearAll");
const clearOne = document.getElementById("clearOne");

function write(event){
    const value = event.target.innerHTML;
    return string.innerHTML += value;
}

function stringResult(){
    if(string.innerHTML.length > 0){
        string.innerHTML = eval(string.innerHTML);
        string.innerHTML;
    }
}

function mathClearOne(){
    if(string.innerHTML.length > 0){
        let newString = "";
        for(let i = 0; i < string.innerHTML.length-1; i++){
            newString += string.innerHTML[i];
        }
        string.innerHTML = newString;
    }
}

result.addEventListener("click", stringResult);

buttons.forEach(element => {
        element.addEventListener("click", write);
        return;
});

clearAll.addEventListener("click", (event) =>{
    string.innerHTML = "";
})

clearOne.addEventListener("click", mathClearOne);

