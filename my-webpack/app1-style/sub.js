function generateText() {
    var element = document.createElement('h3')
    element.innerHTML = '<span>Hello h2 world from dev server</span>' + '<div id="count">0</div>' + '<button id="btnClick">add</button>' + '<div id="aaaa">aaaa</div>' + '<div id="bbbb">0</div>'
    return element
}

module.exports = generateText
