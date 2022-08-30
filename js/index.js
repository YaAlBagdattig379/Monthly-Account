function valueIput(){
    const incomeInput = document.getElementById("income-input-box");
    const incomeValue = incomeInput.value ;
    const incomeText = parseInt(incomeValue);
    console.log(incomeText);
}
document.getElementById("calculate-button").addEventListener("click",function(){
    valueIput()
    // const incomeInput = document.getElementById("income-input-box");
    // const incomeValue = incomeInput.value ;
    // const incomeText = parseInt(incomeValue);// .value;
    // console.log(incomeText);
    // console.log("hello ! hi javaScript")
})