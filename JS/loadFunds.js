
const form = document.getElementById('load-form')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const Amount = document.getElementById('amount').value
    localStorage.setItem('initialAmount', Amount)
    
    
    window.location.href = '../index.html'
    // const loadedFunds = localStorage.getItem('initialAmount')
    saveDeposit(Amount)
    // depositedMoney()
})

function saveDeposit(Amount) {
    let deposits = JSON.parse(localStorage.getItem('DepositHistory')) || [];
    deposits.push({
        amount: parseFloat(Amount), // Store amount as a number
        date: new Date().toISOString()
    });
    localStorage.setItem('DepositHistory', JSON.stringify(deposits));
}


console.log("Stored Deposits:", localStorage.getItem('DepositHistory'));


