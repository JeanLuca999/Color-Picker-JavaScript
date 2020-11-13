const $corAtual = document.getElementById('cor-atual')
const $R = document.getElementsByClassName('seletores-cor')[0]
const $G = document.getElementsByClassName('seletores-cor')[1]
const $B = document.getElementsByClassName('seletores-cor')[2]

let redColor = 0
let greenColor = 0
let blueColor = 0

$R.addEventListener('input', ()=>{
    redColor = $R.value
    $corAtual.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`
    document.getElementById('seletores-red').querySelector('p').innerText = `Red: ${redColor}`
    $corAtual.querySelector('div').innerText = `#${(Number(redColor)).toString(16).toUpperCase()}${(Number(greenColor)).toString(16).toUpperCase()}${(Number(blueColor)).toString(16).toUpperCase()}`
})

$G.addEventListener('input', ()=>{
    greenColor = $G.value
    $corAtual.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`
    document.getElementById('seletores-green').querySelector('p').innerText = `Green: ${greenColor}`
    $corAtual.querySelector('div').innerText = `#${(Number(redColor)).toString(16).toUpperCase()}${(Number(greenColor)).toString(16).toUpperCase()}${(Number(blueColor)).toString(16).toUpperCase()}`
})

$B.addEventListener('input', ()=>{
    blueColor = $B.value
    $corAtual.style.backgroundColor = `rgb(${redColor}, ${greenColor}, ${blueColor})`
    document.getElementById('seletores-blue').querySelector('p').innerText = `Blue: ${blueColor}`
    $corAtual.querySelector('div').innerText = `#${(Number(redColor)).toString(16).toUpperCase()}${(Number(greenColor)).toString(16).toUpperCase()}${(Number(blueColor)).toString(16).toUpperCase()}`
})