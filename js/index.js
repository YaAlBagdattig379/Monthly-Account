    
document.getElementById("calculate-button").addEventListener("click",function(){
    // input income   
    const incomeInput = document.getElementById("income-input-box");
    const incomeValue = incomeInput.value ;
    const incomeText = parseInt(incomeValue);
    incomeInput.value = '';
    // input pocket money   

    const pocketMoneyInput = document.getElementById("pocketMoney-input-box");
    const pocketMoneyValue = pocketMoneyInput.value ;
    const pocketMoneyText = parseInt(pocketMoneyValue);
    // input home rent   
    
    const homeRentInput = document.getElementById("homeRent-input-box");
    const homeRentValue = homeRentInput.value ;
    const homeRentText = parseInt(homeRentValue);
    // input food cost   
    
    const foodMoneyInput = document.getElementById("food-input-box");
    const foodMoneyValue = foodMoneyInput.value ;
    const foodMoneyText = parseInt(foodMoneyValue);

    // divided by spending total expences
    const totalExpenses = document.getElementById("display-total-expense");
    const totalExpensesText = totalExpenses.innerText;
    totalExpenses.innerText = pocketMoneyText + homeRentText + foodMoneyText;

 
    // remained balance after spending 
    const balance = document.getElementById("display-balance");
    const balanceText = balance.innerText;
    balance.innerText = incomeText - totalExpensesText;

 

})