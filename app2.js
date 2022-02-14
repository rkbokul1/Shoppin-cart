function updateQuantityPrice(product, isIncreasing, price){
    const productField = document.getElementById(product+'-field');
    const productFieldText = productField.value;
    let productFieldNumber =  parseInt(productFieldText); 
    if(isIncreasing == true){
        productFieldNumber = productFieldNumber + 1;
    }
    else if (productFieldNumber > 1){
        productFieldNumber = productFieldNumber -1;
    }
    productField.value = productFieldNumber;

    // update price----
    const productPriceField = document.getElementById(product+'-price');    
    if(price == 59){
        productPriceField.innerText = productFieldNumber * price;
    }
    else if(price == 1219){
        productPriceField.innerText = productFieldNumber * price;
    }

    // update subtotal
    document.getElementById('sub-total').innerText = totalPrice();

}

function getInput (product){
    const productInput = document.getElementById(product + '-field');
    const productInputNumber = parseInt(productInput.value);
    return productInputNumber;
}

function totalPrice(){
    const caseTotal = getInput('case') * 59;
    const phoneTotal = getInput('phone') * 1219;
    const total = caseTotal + phoneTotal;
    return total;
}


// case handeler
document.getElementById('case-plus').addEventListener('click', function(){
    updateQuantityPrice('case', true, 59)
})
document.getElementById('case-minus').addEventListener('click', function(){
    updateQuantityPrice('case', false, 59)
})

// phone handeler 

document.getElementById('phone-plus').addEventListener('click', function(){
    updateQuantityPrice('phone', true, 1219)
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateQuantityPrice('phone', false, 1219)
})
