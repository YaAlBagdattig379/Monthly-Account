// first function for input monthy income and spend
function inputField(inputId){
   const incomeInput = document.getElementById( inputId + "-input-box");
   const incomeValue = incomeInput.value ;
   const incomeText = parseInt(incomeValue);
   incomeInput.value = '';
   return incomeText
}
//  function for input monthy income and spend
// calculate button     
document.getElementById("calculate-button").addEventListener("click",function(){
     
   //  income input   
   const incomeText = inputField("income")
   // spending input 
   const pocketMoneyText = inputField("pocketMoney") 
   const homeRentText = inputField("homeRent") 
   const foodMoneyText = inputField("food") 
   //  total expences
   //  total expences
   const totalExpense = document.getElementById("totalExpenses-balance");
   const totalExpenseText = totalExpense.innerText;
   const previousExpenseNumber = parseInt(totalExpenseText);
   const wholeExpensesCost = pocketMoneyText + homeRentText + foodMoneyText;
   totalExpense.innerText = wholeExpensesCost + previousExpenseNumber ;
   // remained balance after spending 
   // remained balance after spending 
   const balance = document.getElementById("current-balance");
   const balanceText = balance.innerText;
   const previousBalanceNumber = parseInt(balanceText);
   const currentBalance =  incomeText - totalExpense.innerText; 
   balance.innerText =  currentBalance + previousBalanceNumber; 
})
function balannceCal(){
    const totalExpense = document.getElementById("totalExpenses-balance");
   const totalExpenseText = totalExpense.innerText;
   const previousExpenseNumber = parseInt(totalExpenseText);
   const wholeExpensesCost = pocketMoneyText + homeRentText + foodMoneyText;
   totalExpense.innerText = wholeExpensesCost + previousExpenseNumber ;
   // remained balance after spending 
   // remained balance after spending 
   const balance = document.getElementById("current-balance");
   const balanceText = balance.innerText;
   const previousBalanceNumber = parseInt(balanceText);
   const currentBalance =  incomeText - totalExpense.innerText; 
   balance.innerText =  currentBalance + previousBalanceNumber; 
}
// function for  saving only 
// function for  saving only 

// function for balance 
function balaneInnertext(idBalance){
   const totalExpense = document.getElementById( idBalance + "-balance");
   const totalExpenseText = totalExpense.innerText;
   const previousExpenseNumber = parseInt(totalExpenseText);
   totalExpense.innerText = '';
   return previousExpenseNumber;
}
// function for save input 
function buttonSave(){
   const savepercentage = document.getElementById("saving-input-box");
   const savePercentageInput = savepercentage.value;
   const savePercentageNumber = parseInt(savePercentageInput);
   savepercentage.value = '';
   return savePercentageNumber;
} 
document.getElementById("saving-button").addEventListener("click",function(){
   
   //  debugger;
   // divided by spending total expences
   // const totalExpense = document.getElementById("totalExpenses-balance");
   // const totalExpenseText = totalExpense.innerText;
   // const previousExpenseNumber = parseInt(totalExpenseText);
   // totalExpense.innerText = '';
  const previousExpenseNumber = balaneInnertext("totalExpenses")
  const previousBalanceNumber = balaneInnertext("current")

   // remained balance after spending 
   // const balance = document.getElementById("current-balance");
   // const balanceText = balance.innerText;
   // const previousBalanceNumber = parseInt(balanceText);
   // balance.innerText = '';

   //   percentage    
   // const savepercentage = document.getElementById("saving-input-box");
   // const savePercentageInput = savepercentage.value;
   // const savePercentageNumber = parseInt(savePercentageInput);
   // savepercentage.value = '';
   const savePercentageNumber = buttonSave()

   // saving Amount 
   // const savingAmount = document.getElementById("saving-amount");
   // const savingAmountText = savingAmount.innerText;
   // const previousSavingAmount = parseInt(savingAmountText);

   // cal whole 
   // cal whole 
   // const wholeMoney  = previousExpenseNumber + previousBalanceNumber  ;
   // const getPercetage = ( savePercentageNumber / 100) * wholeMoney;
   // savingAmount.innerText = getPercetage + previousSavingAmount;
   const getPercetage = savingRemaining(previousExpenseNumber,previousBalanceNumber,savePercentageNumber);

   // remaining balance 
   // const remainBalance = document.getElementById("remaining-balance");
   // const remainBalanceText = remainBalance.innerText;
   // const previousRemainBalance = parseInt(remainBalanceText);
   // const remain = previousBalanceNumber - getPercetage; 
   // remainBalance.innerText = remain + previousRemainBalance;
})

function savingRemaining(previousExpenseNumber,previousBalanceNumber,savePercentageNumber){
   const savingAmount = document.getElementById("saving-amount");
   const savingAmountText = savingAmount.innerText;
   const previousSavingAmount = parseInt(savingAmountText);
   const wholeMoney  = previousExpenseNumber + previousBalanceNumber  ;
   const getPercetage = ( savePercentageNumber / 100) * wholeMoney;
   savingAmount.innerText = getPercetage + previousSavingAmount;
   // remaining balance 
   const remainBalance = document.getElementById("remaining-balance");
   const remainBalanceText = remainBalance.innerText;
   const previousRemainBalance = parseInt(remainBalanceText);
   const remain = previousBalanceNumber - getPercetage; 
   remainBalance.innerText = remain + previousRemainBalance;
}