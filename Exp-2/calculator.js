const num1 = document.getElementById("ip1");
const num2 = document.getElementById("ip2");
const result = document.getElementById("result");
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const mulBtn = document.getElementById("mulBtn");
const divBtn = document.getElementById("divBtn");


let add = (a,b)=> a+b
let sub = (a,b) => a-b
let mul = (a,b) => a*b
let div = (a,b) => a/b

addBtn.addEventListener("click",()=>{
result.textContent = add(parseFloat(num1.value) || 0, parseFloat(num2.value) || 0);
})

subBtn.addEventListener("click",()=>{
result.textContent = sub(parseFloat(num1.value) || 0, parseFloat(num2.value) || 0);
})

mulBtn.addEventListener("click",()=>{
result.textContent = mul(parseFloat(num1.value), parseFloat(num2.value));
})

divBtn.addEventListener("click",()=>{
result.textContent = div(parseFloat(num1.value), parseFloat(num2.value));
})