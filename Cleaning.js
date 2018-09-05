window.onload = init;

function init(){
    console.log("hello");
    document.getElementById("Form").onsubmit = Random;
}

function Random(){
    var number = [];
    for(var i=0; i<19; i++)
        number[i] = i+1;

    console.log(number);

    return false;
}