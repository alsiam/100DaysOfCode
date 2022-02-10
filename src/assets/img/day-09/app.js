
// Product Calculation Function
function updateProduct(product, price, productType) {

    const productNumber = document.getElementById(product + '-number');
    let productInput = parseInt(productNumber.value);

    if (productType) {
        productInput = productInput + 1;
    } else if (productInput > 0) {
        productInput = productInput - 1;
    }
    productNumber.value = productInput;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productInput * price;

    // calculateTotal
    calculateTotal();
}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);

    return productNumber;

}

function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1200;
    const caseTotal = getInputValue('case') * 60;

    const subTotal = phoneTotal + caseTotal;
    const tax= subTotal / 10;
    const totalPrice= subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// Mobile Calculation
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProduct('phone', 1200, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProduct('phone', 1200, false);
})

// Case Calculation
document.getElementById('case-plus').addEventListener('click', function () {
    updateProduct('case', 60, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProduct('case', 60, false);
})