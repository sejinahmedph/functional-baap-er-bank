// get input value 
const getInputValue = (feildId) => {
    // input
    const input = document.getElementById(feildId);
    // get value in text
    const valueInText = input.value;
    // parsefloat
    const value = parseFloat(valueInText);
    // clear input value
    input.value = '';
    return value;
}
// get innerText value
const getInnerTextValue = (fieldId) => {
    // tag id
    const fieldTag = document.getElementById(fieldId);
    // get innerText value
    const innerTextValue = fieldTag.innerText;
    // parsefloat
    const amount = parseFloat(innerTextValue);
    return amount;
}
// update amount
const updateAmount = (inputValue, fieldId) => {
    // previous amount
    const previousAmount = getInnerTextValue(fieldId);
    // new amount
    const newAmount = previousAmount + inputValue;
    // display
    const display = document.getElementById(fieldId);
    // display amount
    display.innerText = newAmount;
}
// update total balance 
const updateTotalBalance = (inputValue, feildId, isAdding) => {
    // display
    const display = document.getElementById('balance-total');
    // previous amount
    const previousTotal = getInnerTextValue(feildId);
    let newTotal;
    if (isAdding == true) {
        newTotal = previousTotal + inputValue;
    }
    else {
        newTotal = previousTotal - inputValue;
    }
    // display total balance
    display.innerText = newTotal;
}
// error messege
const errorMessege = (text) => {
    alert(text);
}
// deposit btn
document.getElementById('deposit-btn').addEventListener('click', function () {
    // input value
    const amount = getInputValue('deposit-field');
        if (amount > 0) {
            updateAmount(amount, 'deposit-total');
            updateTotalBalance(amount, 'balance-total', true);
        }
        else {
            // alert
            errorMessege('Please enter positive number!');
        }
})
// withdraw btn
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // input value
    const amount = getInputValue('withdraw-field');
    // balance
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateAmount(amount, 'withdraw-total');
        updateTotalBalance(amount, 'balance-total', false);
    }
    else if(isNaN(amount)) {
        errorMessege('Please enter positive number!');
    }
    if (balance == 0) {
        // alert
        errorMessege('You have no balance!');
    }
    if (balance < amount) {
        errorMessege('Withdraw Amount cannot be more than Total Balance!');
    }
})