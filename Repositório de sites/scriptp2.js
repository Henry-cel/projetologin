alert('Faça um double-click para mudar para o lightmode')
var cc = document.getElementById('change-color')
var b = document.getElementById('body')
var pb = document.getElementById('pb')
var b1 = document.getElementById('b1')
var b2 = document.getElementById('b2')
var b3 = document.getElementById('b3')
var p = document.getElementById('dev')
cc.addEventListener('click', change)
cc.addEventListener('dblclick', changea)

function change() {
    var cc = document.getElementById('change-color')
    b1.style.backgroundColor = '#2C2C30'
    b2.style.backgroundColor = '#2C2C30'
    b3.style.backgroundColor = '#2C2C30'
    b1.style.color = 'white'
    b2.style.color = 'white'
    b3.style.color = 'white'
    b.style.backgroundColor = '#2C2C30'
    cc.style.backgroundColor = '#2C2C30'
    cc.style.borderColor = 'white'
    pb.style.color = 'white'
    pb.innerHTML = 'LIGHTMODE'
    p.style.color = 'white'
    p.style.fontWeight = 'bold'
}

function changea() {
    b1.style.backgroundColor = 'white'
    b2.style.backgroundColor = 'white'
    b3.style.backgroundColor = 'white'
    b.style.backgroundColor = 'white'
    b1.style.color = '#e28525'
    b1.style.fontWeight = 'bold'
    b2.style.color = '#016972'
    b2.style.fontWeight = 'bold'
    b3.style.color = '#00403f'
    b3.style.fontWeight = 'bold'
    cc.style.backgroundColor = 'white'
    cc.style.borderColor = 'black'
    pb.style.color = 'black'
    pb.innerHTML = 'DARKMODE'
    p.style.color = 'rgba(0, 0, 0, 0.76)'
    p.style.fontWeight = 'bold'
}