// Biljettpriser som variabler
let priceOrdinary = 129
let priceStudent = 109
let priceChildren = 79
let popcornInit = 500

let amountOrdinary = 0
let amountPensioner = 0
let amountChildren = 0



// Initiera värderna
function initiateValues() {
    document.getElementById('price-ordinary').innerHTML = priceOrdinary.toString() + " kr";
    document.getElementById('price-student').innerHTML = priceStudent.toString() + " kr";
    document.getElementById('price-children').innerHTML = priceChildren.toString() + " kr";
    document.getElementById('popcorn-remain').innerHTML = "Kvar till gratis popcorn: " + popcornInit.toString() + " kr";
}

// Lägg till pris och räkna antal
function multiplyTicketsAndPrice(numberOfTickets, price) {
    return numberOfTickets * price;
}


// Lägg till och få tillbaka värde
function addTotal(totalOrdinary, totalStudent, totalChildren) {
    return totalOrdinary + totalStudent + totalChildren;
}



// Om värdet för gratis popcorn är 0 eller mindre, ersätt text med "Du får en gratis popcorn" om högre än 0 "kvar till gratis popcorn"
function checkPopcorn(popcornRemain) {
    if (popcornRemain <= 0) {
        document.getElementById('popcorn-remain').innerHTML = "Du får en gratis popcorn!";
    } else {
        document.getElementById('popcorn-remain').innerHTML = "Kvar till gratis popcorn: " + popcornRemain.toString() + " kr";
    }
}



// Kolla efter värdet av popcorn
function updatePopcorn(sum) {
    let popcornRemain = popcornInit - sum
    checkPopcorn(popcornRemain)
}

initiateValues()



// Uppdatera totala beloppet
function updateTotal() {
    let amountOrdinary = document.getElementById('amount-ordinary').value;
    let totalOrdinary = multiplyTicketsAndPrice(amountOrdinary, priceOrdinary);
    let amountStudent = document.getElementById('amount-student').value;
    let totalStudent = multiplyTicketsAndPrice(amountStudent, priceStudent);
    let amountChildren = document.getElementById('amount-children').value;
    let totalChildren = multiplyTicketsAndPrice(amountChildren, priceChildren);
    addTotal()
    let totalSum = addTotal(totalOrdinary, totalStudent, totalChildren)
    document.getElementById('total-sum').innerHTML = totalSum.toString() + " kr";
    updatePopcorn(totalSum)
}


function getTotalCount() {
    let tickets = document.querySelectorAll('.qty-input')
    let total = 0
    for (let i = 0; i < tickets.length; i++) {
        if (parseInt(tickets[i].value)) {
            total += parseInt(tickets[i].value)
        }
    }
    document.getElementById('total-sum').value = total
    document.getElementById('price-ordinary').value = priceOrdinary * amountOrdinary
    document.getElementById('price-student').value = priceStudent * amountPensioner
    document.getElementById('price-children').value = priceChildren * amountChildren
}

//totalen av alla biljettpriser
function totalAmount() {
    let grandTotal = (amountChildren * priceChildren) + (amountOrdinary * priceOrdinary) + (amountChildren * priceChildren)

    document.getElementById('total-sum').textContent = grandTotal
    checkFreePopcorn(grandTotal)
}






