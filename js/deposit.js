//step 1: add eventListener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //step 2: get the deposit amount from the deposit input field
    // for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
   
    //step 3: get the current deposit total
    //for non-input use inner-text to get the text 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    console.log(typeof previousDepositTotal);
    
    //step 4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;
    //step 5: get balance current total
    const balanceTotalElements =document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElements.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step 6: calcilate current total balance
     const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
     //set the balance total
     balanceTotalElements.innerText = currentBalanceTotal;

    //step 7: clear the deposit field
    depositField.value = '';
})