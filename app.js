let saveEl = document.getElementById('save-el');
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1
    countEl.textContent = count;
}

function save() {
    let both = ` ${count} - `;
    saveEl.textContent += both;
    count -= count ;
    countEl.textContent = count;
}


