// document.getElementById("count").innerText = 5

// change the count-el in the HTML to reflect the new count

let number = 0;
let counter = document.getElementById('count');

function add(){
    number++;
    counter.innerHTML = number;
}