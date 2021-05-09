let enterButton = document.getElementById("EnterButton");

//Enter Button Event Handler

enterButton.addEventListener("click",function()
{
    let loginContainer = document.getElementById("login-container");
    
    loginContainer.style.display="none";

    let tansactionContainer = document.getElementById("transaction-container");

    tansactionContainer.style.display="block";
})

//Deposit Button Event Handler

let depositButton = document.getElementById("deposit-button");

depositButton.addEventListener("click",function () {

   let depositAmountNumber = getInputValue(("deposit-input"));

   updateDepositAndWithdrawAndBalnce ("current-deposit",depositAmountNumber)

   document.getElementById("deposit-input").value = ''; 
})

//withdraw Event Handler 
let withdrawButton = document.getElementById("withdraw-button");

withdrawButton.addEventListener("click",function () 
{
   let withdrawAmountNumber = getInputValue("withdraw-input");

   updateDepositAndWithdrawAndBalnce("current-withdraw",withdrawAmountNumber)

   updateDepositAndWithdrawAndBalnce("current-blance",-1 * withdrawAmountNumber)

   document.getElementById("withdraw-input").value = ''; 
})

//getInputValue function

function getInputValue(id)
{
    let depositAmount = document.getElementById(id).value;

    let depositAmountNumber = parseFloat(depositAmount);
    
    return depositAmountNumber;
}

//updateDepositAndWithdrawAndBalnce 

function updateDepositAndWithdrawAndBalnce (id,depositAmountNumber) 
{
    
   let currentAmount = document.getElementById(id).innerText;
    
   let  currentAmountNumber = parseFloat(currentAmount);

   let totalAmount = depositAmountNumber + currentAmountNumber;

   document.getElementById(id).innerText = totalAmount;

}