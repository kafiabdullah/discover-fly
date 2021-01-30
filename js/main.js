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


// Increment the firstClassInput
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

// Decrement the firstClassInput
firstClassDecrementBtn.addEventListener("click", function () {
    if (firstClassValue > 0) {
        firstClassValue--;
    }

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

// Increment the economyClassValue
economyClassIncrementBtn.addEventListener("click", function () {
    economyClassValue++;

    // Total economyClass Ticket Price
    totalEconomyClassPrice = updatePriceCalculation(
        economyClassInput,
        economyClassValue,
        economyClassTicketPrice
    );

    let totalTicketPrice = totalFirstClassPrice + totalEconomyClassPrice;

    // Calculate the vat
    vat = totalTicketPrice * 0.1;

    updatePriceSummary(totalTicketPrice, vat);
});

// Decrement the economyClassValue
economyClassDecrementBtn.addEventListener("click", function () {
    if (economyClassValue > 0) {
        economyClassValue--;
    }

    // Calculate the total price
    totalEconomyClassPrice = updatePriceCalculation(
        economyClassInput,
        economyClassValue,
        economyClassTicketPrice
    );

    let totalTicketPrice = totalFirstClassPrice + totalEconomyClassPrice;

    // Calculate the vat
    vat = totalTicketPrice * 0.1;

    updatePriceSummary(totalTicketPrice, vat);
});

// Function for calculate the price
function updatePriceCalculation(classInput, classValue, classTicketPrice) {
    classInput.value = classValue;

    // Total FirstClass Ticket Price
    totalClassPrice = classTicketPrice * classValue;

    return totalClassPrice;
}

// Function for update price summary
function updatePriceSummary(totalTicketPrice, vat) {
    // Update the subtotal
    subtotalAmount.innerText = totalTicketPrice;

    // Update the vat
    vatDocument.innerText = vat;

    // Update total document
    totalAmount.innerText = totalTicketPrice + vat;
}

// Function for update price summary
function updatePriceSummary(totalTicketPrice, vat) {
    // Update the subtotal
    subtotalAmount.innerText = totalTicketPrice;

    // Update the vat
    vatAmount.innerText = vat;

    // Update total document
    totalAmount.innerText = totalTicketPrice + vat;
}

// Check the value and set default value
function isEmptyAndSetDefault(document) {
    if (parseInt(document.value)) {
        return parseInt(document.value);
    }

    return 0;
}