// calculate button     
// calculate button     
document.getElementById("calculate-button").addEventListener("click",function(){
   // input income   
   // input income   
   const incomeInput = document.getElementById("income-input-box");
   const incomeValue = incomeInput.value ;
   const incomeText = parseInt(incomeValue);
   incomeInput.value = '';
//    return incomeText;

   // input pocket money   
   const pocketMoneyInput = document.getElementById("pocketMoney-input-box");
   const pocketMoneyValue = pocketMoneyInput.value ;
   const pocketMoneyText = parseInt(pocketMoneyValue);
   pocketMoneyInput.value = '';

//     // input home rent   
    const homeRentInput = document.getElementById("homeRent-input-box");
    const homeRentValue = homeRentInput.value ;
    const homeRentText = parseInt(homeRentValue);
    homeRentInput.value = '';

//     // input food cost   
    const foodMoneyInput = document.getElementById("food-input-box");
    const foodMoneyValue = foodMoneyInput.value ;
    const foodMoneyText = parseInt(foodMoneyValue);
    foodMoneyInput.value = '';

    // divided by spending total expences
    const totalExpenses = document.getElementById("display-total-expense");
    const totalExpensesText = totalExpenses.innerText;
    totalExpenses.innerText = pocketMoneyText + homeRentText + foodMoneyText;

    // remained balance after spending 
    const balance = document.getElementById("display-balance");
    const balanceText = balance.innerText;
    balance.innerText = incomeText - totalExpenses.innerText; 
})
   
// save button  
// save button  
document.getElementById("saving-button").addEventListener("click",function(){
   //   percentage    
   const savePercentage = document.getElementById("saving-input-box");
   const savePercentageText = savePercentage.value;
   const savePercentageValue = parseInt(savePercentageText);
   console.log(savePercentageValue);
   savePercentage.value = '';
   // saving Amount 
   const savingAmount = document.getElementById("saving-amount");
   const savingAmountText = savingAmount.innerText;
   const savingAmountNumber = parseFloat(savingAmountText);
   savingAmount.innerText = savePercentageValue + savingAmountNumber;
   // remaining balance 
   const remainingBalance = document.getElementById("remaining-balance");
   const remainingBalanceText = remainingBalance.innerText;
   const remainingBalanceNumber = parseFloat(remainingBalanceText);
   remainingBalance.innerText = remainingBalanceNumber + savePercentageValue;

})

