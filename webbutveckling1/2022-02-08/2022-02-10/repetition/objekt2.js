let inventory = [
    {
      bookName: 'bok 1',
      price: 49,
      availability: 10,
      buyAmount: 0
    },
    {
        bookName: 'bok 2',
        price: 79,
        availability: 10,
        buyAmount: 0
    },
    {
        bookName: 'bok 3',
        price: 29,
        availability: 10,
        buyAmount: 0
    },
]

function printInventory() {
    console.log('--------------- Inventory --------------')
    inventory.forEach(item => {
        console.log(`${item.bookName}, ${item.availability} i lager, ${item.buyAmount} i kundkorgen`)
    })
    console.log('---------------------------------')
}

console.log(inventory)
printInventory()

function multiplyBooksWithPrice(index) {
    return inventory[index].buyAmount * inventory[index].price
}

console.log(multiplyBooksWithPrice(ind))
inventory[0].buyAmount = 3


printInventory()
console.log(multiplyBooksWithPrice())




