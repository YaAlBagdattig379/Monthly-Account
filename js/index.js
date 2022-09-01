// calculate button     
// calculate button     
document.getElementById("calculate-button").addEventListener("click",function(){
   // input income   
   // input income   
   const incomeInput = document.getElementById("income-input-box");
   const incomeValue = incomeInput.value ;
   const incomeText = parseFloat(incomeValue);
   incomeInput.value = '';
//    return incomeText;

   // input pocket money   
   const pocketMoneyInput = document.getElementById("pocketMoney-input-box");
   const pocketMoneyValue = pocketMoneyInput.value ;
   const pocketMoneyText = parseFloat(pocketMoneyValue);
   pocketMoneyInput.value = '';

//     // input home rent   
    const homeRentInput = document.getElementById("homeRent-input-box");
    const homeRentValue = homeRentInput.value ;
    const homeRentText = parseFloat(homeRentValue);
    homeRentInput.value = '';

//     // input food cost   
    const foodMoneyInput = document.getElementById("food-input-box");
    const foodMoneyValue = foodMoneyInput.value ;
    const foodMoneyText = parseFloat(foodMoneyValue);
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
   // debugger;
   // divided by spending total expences
   const totalExpenses = document.getElementById("display-total-expense");
   const totalExpensesText = totalExpenses.innerText;
   const forTotalNumber = parseFloat(totalExpensesText);
   // remained balance after spending 
   const balance = document.getElementById("display-balance");
   const balanceText = balance.innerText;
   const forBalanceNumber = parseFloat(balanceText);
   //   percentage    
   const savePercentage = document.getElementById("saving-input-box");
   const savePercentageText = savePercentage.value;
   const savepercentageNumeber = parseFloat(savePercentageText);

   // console.log(savePercentageValue);
   savePercentage.value = '';
   // saving Amount 
   const savingAmount = document.getElementById("saving-amount");
   const savingAmountText = savingAmount.innerText;
   const previousSavingAmount = parseFloat(savingAmountText);
   // cal whole 
   // cal whole 
   const wholeMoney  = forTotalNumber + forBalanceNumber  ;
   const getPercetage = ( savepercentageNumeber / 100) * wholeMoney;
   savingAmount.innerText = getPercetage + previousSavingAmount;

   // remaining balance 
   const remainBalance = document.getElementById("remaining-balance");
   const remainBalanceText = remainBalance.innerText;
   const previousRemainBalance = parseFloat(remainBalanceText);
   const remain = forBalanceNumber - getPercetage; 
   remainBalance.innerText = remain + previousRemainBalance;
})

