// 1. add event handler with withdraw button
//2. get the withdraw amount with the withdraw input field
// 2-5 convert the input into a number by usnig parseflot
// 3. get previous withdraw total
// 4. calculate total withdraw amount
//4-5. set total withdraw amount
// 5. get the previous balance total
// 6. calculate new balance total
// 6-5 . set the new balance total
//7. clear the input field
//step 1
document.getElementById('btn-withDraw').addEventListener('click', function(){
    //step 2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
     //step 7 
     withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a number');
        return;
    }
    //step 3
    const withDrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withDrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    //step 5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
   

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Bank a taka nai');
        return ;
    }
    //step 4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withDrawTotalElement.innerText = currentWithdrawTotal;

    //step 6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


    


 
})