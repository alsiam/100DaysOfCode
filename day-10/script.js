function generatePin() {
    const randomPin = Math.round(Math.random() * 10000);


    if ((randomPin + '').length == 4) {
        const pinField = document.getElementById('pin-field').value = randomPin;
        return pinField;
    } else {
        console.log('3number it is')
    }

}
document.getElementById('key-pad').addEventListener('click', function (event) {

    const number = event.target.innerText;
    const numbersField = document.getElementById('numbers-field');
    if (isNaN(number)) {
        if (number == 'C') {
            numbersField.value = '';
        }
    } else {
        const previousField = numbersField.value;
        numbersField.value = previousField + number;
    }


})

function verifyPin() {
    const pinField = document.getElementById('pin-field').value;
    const numbersField = document.getElementById('numbers-field').value;
    const successMessage = document.getElementById('notify-success');
    const failMessage = document.getElementById('notify-fail');
    if (pinField == numbersField) {

        successMessage.style.display = 'block';
        failMessage.style.display = 'none';
    } else {
        failMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }


}
