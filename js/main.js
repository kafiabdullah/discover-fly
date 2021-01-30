// first class btn
const firstClassIncrementBtn = document.getElementById('first-class-increment');
const firstClassDecrementBtn = document.getElementById('first-class-decrement');


// economy class btn
const economyClassIncrementBtn = document.getElementById('economy-class-increment');
const economyClassDecrementBtn = document.getElementById('economy-class-decrement');

// input 
const firstClassInput = document.getElementById('first-class-input');
const economyClassInput = document.getElementById('economy-class-input');

// subtotal
const subtotalAmount = document.getElementById('price-subtotal');

// vat
const vatAmount = document.getElementById('vat');

// total price
const totalAmount = document.getElementById('total');

// Extract the value from the document
let firstClassValue = isEmptyAndSetDefault(firstClassInput);
let economyClassValue = isEmptyAndSetDefault(economyClassInput);


// Ticket Price
const firstClassTicketPrice = 150;
const economyClassTicketPrice = 100;

// Calculation
let totalFirstClassPrice = 0;
let totalEconomyClassPrice = 0;
let vat = 0;


// Increment the firstClassValue
firstClassIncrementBtn.addEventListener("click", function () {
    firstClassValue++;

    // Total FirstClass Ticket Price
    totalFirstClassPrice = updatePriceCalculation(
        firstClassInput,
        firstClassValue,
        firstClassTicketPrice
    );

    let totalTicketPrice = totalFirstClassPrice + totalEconomyClassPrice;

    // Calculate the vat
    vat = totalTicketPrice * 0.1;

    updatePriceSummary(totalTicketPrice, vat);
});