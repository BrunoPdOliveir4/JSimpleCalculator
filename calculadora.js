function add(text) {
    var addtext = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML= addtext+text;
}
function clean() {
    document.getElementById('result').innerHTML = '';
    var addtext = null;
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
