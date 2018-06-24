var sub = require('./sub')
require('./style.css')
require('./sass.scss')


const $ = require('jquery')
const moment = require('moment')

if (module.hot) {
    console.log(module)
    console.log('hot in index')
} else {
    console.log('not hot in index')
}

var app = document.createElement('div')
app.innerHTML = '<h1>app12</h1>'

setTimeout(() => {
    var btnClick = document.getElementById('btnClick')
    // btnClick.onclick = function() {
    //     console.log('click')
    // }
    btnClick.addEventListener('click', function() {
        let countDom = document.getElementById('bbbb')
        let countNum = Number(countDom.innerHTML)
        countDom.innerHTML = ++countNum
    }, false)

    console.log($('#aaaa').html(moment().format()))
}, 10); 

app.appendChild(sub())



document.body.appendChild(app)