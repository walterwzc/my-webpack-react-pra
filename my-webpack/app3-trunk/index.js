import _ from 'lodash'

require('./styles/style.css')

console.log(_.camelCase('FOO BAR'))
console.log('this is index.js !!!!')

let oDiv = document.createElement('div')
oDiv.innerHTML = 'Hello'
document.body.appendChild(oDiv)