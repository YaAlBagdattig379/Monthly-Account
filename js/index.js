// first function for input monthy income 
function inputField(inputId){
   const incomeInput = document.getElementById( inputId + "-input-box");
   const incomeValue = incomeInput.value ;
   const incomeText = parseInt(incomeValue);
   incomeInput.value = '';
   return incomeText
}
// calculate button     
document.getElementById("calculate-button").addEventListener("click",function(){
   // debugger;
   //  income input   
   const incomeText = inputField("income")
   // spending input 
   const pocketMoneyText = inputField("pocketMoney") 
   const homeRentText = inputField("homeRent");
   const foodMoneyText = inputField("food");
  
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

function balanceView(){

}
   
// save button  
// save button  
document.getElementById("saving-button").addEventListener("click",function(){
   // debugger;
   // divided by spending total expences
   const totalExpenses = document.getElementById("display-total-expense");
   const totalExpensesText = totalExpenses.innerText;
   const forTotalNumber = parseInt(totalExpensesText);
   // remained balance after spending 
   const balance = document.getElementById("display-balance");
   const balanceText = balance.innerText;
   const forBalanceNumber = parseInt(balanceText);
   //   percentage    
   const savePercentage = document.getElementById("saving-input-box");
   const savePercentageText = savePercentage.value;
   const savepercentageNumeber = parseInt(savePercentageText);

   // console.log(savePercentageValue);
   savePercentage.value = '';
   // saving Amount 
   const savingAmount = document.getElementById("saving-amount");
   const savingAmountText = savingAmount.innerText;
   const previousSavingAmount = parseInt(savingAmountText);
   // cal whole 
   // cal whole 
   const wholeMoney  = forTotalNumber + forBalanceNumber  ;
   const getPercetage = ( savepercentageNumeber / 100) * wholeMoney;
   savingAmount.innerText = getPercetage + previousSavingAmount;

   // remaining balance 
   const remainBalance = document.getElementById("remaining-balance");
   const remainBalanceText = remainBalance.innerText;
   const previousRemainBalance = parseInt(remainBalanceText);
   const remain = forBalanceNumber - getPercetage; 
   remainBalance.innerText = remain + previousRemainBalance;
})

