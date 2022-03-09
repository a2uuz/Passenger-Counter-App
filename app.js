let saveEl = document.getElementById('save-el');
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1
    countEl.innerText = count;
}

function save() {
    let both = ` ${count} ` + `-`;
    saveEl.innerText += both;
    console.log(count);
}


