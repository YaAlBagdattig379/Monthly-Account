// calculate button area <<< start 
// calculate button area <<< start 

// 1st  function for income input and expenses input  
function inputArea(inputId){
    const incomeText =  document.getElementById( inputId + "-input-box");
    const incomeValue = incomeText.value;
    const income = parseInt(incomeValue);
    incomeText.value = '';
    return income;
}

// 2nd function for total expenses and balance
function calculateBalance(balanceId){
    const totalExpensesText = document.getElementById(balanceId + "-balance");
    const totalExpensesInnerText = totalExpensesText.innerText;
    const previousTotalExpenses = parseInt(totalExpensesInnerText);
    return previousTotalExpenses;
}
document.getElementById("calculate-button").addEventListener('click',function(){
    // income input 
    const income = inputArea("income");
    // // pocketMoney input 
    const pocketMoneyInput = inputArea("pocketMoney");
    // homeRent input 
    const homeRent = inputArea("homeRent");
    // food expense input
    const foodExpenses = inputArea("food");

    // // total Expenses 
    const previousTotalExpenses = calculateBalance("totalExpenses");
    const totalExpensesText = document.getElementById("totalExpenses-balance");
    const totalCurrentExpenses = pocketMoneyInput + homeRent + foodExpenses;
    if(totalCurrentExpenses > 0 && income > totalCurrentExpenses ) {
        totalExpensesText.innerText = totalCurrentExpenses + previousTotalExpenses
    }
    // balance 
    const previousBalance = calculateBalance("current");
    const currentBalanceText = document.getElementById("current-balance"); 
    if(totalCurrentExpenses > 0 && income > totalCurrentExpenses) {
    const currentBalanceAfterSpending = income - totalCurrentExpenses;
    const balanceAfterSpending = previousBalance + currentBalanceAfterSpending;
    currentBalanceText.innerText = balanceAfterSpending;
    }


// to show error message for income and expenses fields

    // for income input error hanling  <<<<< start
    try{
        if(income == '')
        {
          throw "income input is invalid !"
        }
        else if(income < 0)
        {
          throw " income input is invalid !"
        } 
        else if(isNaN(income))
        {
          throw "income input is invalid !"
        }
    }catch(er1){
        const showError1 = document.getElementById("income-input-error");
        showError1.innerText = er1;
    }
    // for income input error hanling  <<<<< end


    // expenses input error handling  >>>>>> start
    try{
        if(pocketMoneyInput < 0 && homeRent < 0 && foodExpenses < 0) 
        { 
            throw "expense input is less than 'zer0'!"
        }
        else if((pocketMoneyInput == '' && homeRent == '' && foodExpenses == ''))
        {
            throw "expenses input is not a number !"
        }
        else if((isNaN(pocketMoneyInput) && isNaN(homeRent) && isNaN(foodExpenses) ))
        {
            throw "expenses input is not a number !"
        }
        else if(totalCurrentExpenses > income )
        {
            throw "expenses  is invalid number !"
        }
    }catch(er2){
        const showError2 = document.getElementById("expenses-inputError");
        showError2.innerText = er2;
    }
    // expenses input error handling  >>>>>> end
})
// calculate button area <<< end 
// calculate button area <<< end 


// save button area <<< start 
// save button area <<< start 

// 3rd function for "expenses and balance amount" 
function savingArea(idBalance){
    const totalExpensesText = document.getElementById( idBalance + "-balance");
    const totalExpensesInnerText = totalExpensesText.innerText;
    const totalExpenses = parseInt(totalExpensesInnerText);
    return totalExpenses;
}
// 4th function for save amount "calculation" 
function saivingBalance(amountId){       

    const savingAmountText = document.getElementById(amountId + "-amount");
    const savingAmountInnerText = savingAmountText.innerText;
    const savingAmountPrevious = parseInt(savingAmountInnerText);
    return savingAmountPrevious;
}
//  // // // //    save button      // // // // //
document.getElementById("saving-button").addEventListener('click',function(){
    // total Expenses 
    const previousTotalExpenses = savingArea("totalExpenses");
    // balance
    const previousBalance = savingArea("current");
    // save percentage  input     
    const savingAmountInputText = document.getElementById("saving-input-box");
    const savepercentageValue = savingAmountInputText.value;
    const savingAmountInput = parseInt(savepercentageValue);
    savingAmountInputText.value = '';
    // //  saving amount  
    const savingAmountPrevious =  saivingBalance("saving");
    const savingAmountText = document.getElementById("saving-amount");
    const totalMoney = previousTotalExpenses + previousBalance;
    const savingAmount = ( savingAmountInput / 100 ) * totalMoney;
    if(savingAmountInput > 0 && savingAmount < previousBalance){
        savingAmountText.innerText = savingAmount + savingAmountPrevious;
    }
    // // remaining balance   
    const remainingBalancePrevious =  saivingBalance("remainingBalance");
    const remainingBalanceText = document.getElementById("remainingBalance-amount");
    const remainingBalance = previousBalance - savingAmount;
    if(savingAmountInput > 0 && savingAmount < previousBalance){
     remainingBalanceText.innerText = remainingBalance + remainingBalancePrevious;
    }


// error handling for saving input  >>> start
    try{
       if(savepercentageValue < 0 )  
       {
           throw "Percentage input is not enough to get percentage !"
       }   
       else if(savepercentageValue == '')
       {
           throw "Percentage input is empty, please type a number !"
       }  
       else if( isNaN(savepercentageValue) )
       {
           throw "Percentage input isn't a number !"
       } 
       else if(savingAmount > previousBalance)
       {
         throw " you have no enough 'balance'!"
       }
   }catch(err){
       const showError = document.getElementById("show-error");
       showError.innerText = err
   }
// error handling for saving input    >>> end
})
// save button area <<< end 
// save button area <<< end 