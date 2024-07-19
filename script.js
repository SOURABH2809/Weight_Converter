const input = document.querySelector('#input');
const output = document.querySelector('#final-result');


input.addEventListener("input",()=>{
    let val = input.value;
    let out = val*2.2;
    output.innerHTML = out.toFixed(2);
})