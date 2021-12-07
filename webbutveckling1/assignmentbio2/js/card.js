function updateElementIdText(elementId, text) {
    document.getElementById(elementId).innerText = String(text)
}

function updateElementIdHtml(elementId, html) {
    document.getElementById(elementId).innerHTML = html
}

function generateSingleCardV2(tickets) {
    return ` 
        <article class="card">
        <h3>Biljett: ${tickets.biljett}</h3>
        <p>Price: ${tickets.price} kr</p>
        <button id='${ tickets.biljett }'>Köp</button>
    </article>
`
}

function updateContent() {
    let htmlElement = ''

    for (const ticket of tickets) {
        htmlElement += generateSingleCardV2(ticket)
    }

    updateElementIdHtml('card-contents', htmlElement)
}

updateContent()
