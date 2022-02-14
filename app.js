document.getElementById('case-plus').addEventListener('click', function(){
    const caseField = document.getElementById('case-field');
    const caseFieldText = caseField.value; 
    const caseFieldNumber = parseInt(caseFieldText);
    const caseQuantity = caseFieldNumber + 1;
    caseField.value = caseQuantity;
    // console.log(caseQuantity)
    const caseDefaultPrice = document.getElementById('case-default');
    const totalPrice = 59 * caseQuantity;
    caseDefaultPrice.innerText = totalPrice;
})
document.getElementById('case-minus').addEventListener('click', function(){
    const caseField = document.getElementById('case-field');
    const caseFieldText = caseField.value; 
    const caseFieldNumber = parseInt(caseFieldText);
    const caseQuantity = caseFieldNumber - 1;
    caseField.value = caseQuantity;
    // console.log(caseQuantity)
    const caseDefaultPrice = document.getElementById('case-default');
    const totalPrice = 59 * caseQuantity;
    caseDefaultPrice.innerText = totalPrice;
})

// phone qunatity and price

document.getElementById('phone-plus').addEventListener('click', function(){
    const phoneField = document.getElementById('phone-field');
    const phoneText = phoneField.value;
    const phoneNumber = parseInt(phoneText);
    const phoneQunatity = phoneNumber +1;
    phoneField.value = phoneQunatity;
    // update price 
    const phoneDefaultPrice = document.getElementById('phone-default');
    const totalPhonePrice = 1219 * phoneQunatity;
    phoneDefaultPrice.innerText = totalPhonePrice;
})
document.getElementById('phone-minus').addEventListener('click', function(){
    const phoneField = document.getElementById('phone-field');
    const phoneText = phoneField.value;
    const phoneNumber = parseInt(phoneText);
    const phoneQunatity = phoneNumber -1;
    phoneField.value = phoneQunatity;

    // update price 
    const phoneDefaultPrice = document.getElementById('phone-default');
    const totalPhonePrice = 1219 * phoneQunatity;
    phoneDefaultPrice.innerText = totalPhonePrice;
})

// subtotal
const uCaseTotal = document.getElementById('case-default').innerText;
console.log(uCaseTotal);
const uPhoneTotal = document.getElementById('phone-default').innerText;
console.log(uPhoneTotal);
const utotal = parseInt(uCaseTotal) + parseInt(uPhoneTotal);
document.getElementById('subtotal').innerText = utotal;
console.log(utotal)
