const billAmount = document.getElementById('bill-amount');
const tipPercentage = document.getElementById('tip-percentage');

const calculate = document.querySelector('.calculate-btn')
const display = document.querySelector('.display-output');

function calculator(){
    const bamount = Number(billAmount.value);
    const tpercentage = Number(tipPercentage.value);
    const result = Math.round(bamount*(tpercentage/100)) + bamount;
    display.textContent=`$${result}`;
} 
calculate.addEventListener('click', function(){
    if(billAmount.value === "" || tipPercentage.value === ""){
        billAmount.parentElement.innerHTML="";
        tipPercentage.parentElement.innerHTML="";
        const error = document.querySelector('.error-text');
        error.classList.add('text-center');
        error.textContent = `Please use valid input!!!`
        display.parentElement.classList.add('text-center')
        display.parentElement.innerHTML ="Refresh your page now...";
    }
    else{
        calculator();
    }
});