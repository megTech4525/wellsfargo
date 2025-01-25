//Get form and button elements
const localTransferBtn = document.getElementById('localTransferBtn');
const foreignTransferBtn = document.getElementById('foreignTransferBtn');
const wireTransferBtn = document.getElementById('wireTransferBtn');



// Add event listeners for buttons
localTransferBtn.addEventListener('click', () => {
    // Show local form and hide foreign form
    localTransferForm.classList.add('active');
    foreignTransferForm.classList.remove('active');
    localTransferBtn.classList.add('active');
    foreignTransferBtn.classList.remove('active');
    wireTransferForm.classList.remove('active');

});

foreignTransferBtn.addEventListener('click', () => {
    // Show foreign form and hide local form
    foreignTransferForm.classList.add('active');
    localTransferForm.classList.remove('active');
    foreignTransferBtn.classList.add('active');
    localTransferBtn.classList.remove('active');
    wireTransferForm.classList.remove('active');
});

wireTransferBtn.addEventListener('click', () => {
    // Show foreign form and hide local form
    wireTransferForm.classList.add('active');
    foreignTransferForm.classList.remove('active');
    localTransferForm.classList.remove('active');
    // foreignTransferBtn.classList.add('active');
    // localTransferBtn.classList.remove('active');
});


// Select DOM elements
const localTransferForm = document.getElementById('localTransferForm');
const foreignTransferForm = document.getElementById('foreignTransferForm');
const wireTransferForm = document.getElementById('wireTransferForm')
const localAmountInput = document.getElementById('localAmount');
const foreignAmountInput = document.getElementById('foreignAmount')
const wireAmountInput = document.getElementById('wireAmount')


// Handle local withdrawal submission
localTransferForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const amountToWithdraw = parseFloat(localAmountInput.value);
    const foreigncurrentBalance = parseFloat(localStorage.getItem('initialAmount')) || 0;

    // Validation
    if (isNaN(amountToWithdraw) || amountToWithdraw <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    if (amountToWithdraw > foreigncurrentBalance) {
        alert('Insufficient balance.');
        return;
    }

    // Update remaining balance
    const remainingBalance = foreigncurrentBalance - amountToWithdraw;
    localStorage.setItem('initialAmount', remainingBalance);

    if (remainingBalance) {
        
    }
    // Save transaction
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push({
        type: 'Local Transfer',
        amount: amountToWithdraw,
        date: new Date().toISOString(),
    });
    localStorage.setItem('transactions', JSON.stringify(transactions));

    alert(`Withdrawal of $${amountToWithdraw.toLocaleString()} was successful!`);

    // Redirect to balance display page
    window.location.href = '../HTML/Transaction.html';
});

// Handle local withdrawal submission
foreignTransferForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const foreignamountToWithdraw = parseFloat(foreignAmountInput.value);
    const currentBalance = parseFloat(localStorage.getItem('initialAmount')) || 0;

    // Validation
    if (isNaN(foreignamountToWithdraw) || foreignamountToWithdraw <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    if (foreignamountToWithdraw > currentBalance) {
        alert('Insufficient balance.');
        return;
    }

    // Update remaining balance
    const remainingBalance = currentBalance - foreignamountToWithdraw;
    localStorage.setItem('initialAmount', remainingBalance);

    if (remainingBalance) {
        
    }
    // Save transaction
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push({
        type: 'Foreign Transfer',
        amount: foreignamountToWithdraw,
        date: new Date().toISOString(),
    });
    localStorage.setItem('transactions', JSON.stringify(transactions));

    alert(`Withdrawal of $${foreignamountToWithdraw.toLocaleString()} was successful!`);

    // Redirect to balance display page
    window.location.href = '../HTML/Transaction.html';
});

wireTransferForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const wireamountToWithdraw = parseFloat(wireAmountInput.value);
    const currentBalance = parseFloat(localStorage.getItem('initialAmount')) || 0;

    // Validation
    if (isNaN(wireamountToWithdraw) || wireamountToWithdraw <= 0) {
        alert('Please enter a valid amount.');
        return;
    }

    if (wireamountToWithdraw > currentBalance) {
        alert('Insufficient balance.');
        return;
    }

    // Update remaining balance
    const remainingBalance = currentBalance - wireamountToWithdraw;
    localStorage.setItem('initialAmount', remainingBalance);

    if (remainingBalance) {
        
    }
    // Save transaction
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push({
        type: 'Wire Transfer',
        amount: wireamountToWithdraw,
        date: new Date().toISOString(),
    });
    localStorage.setItem('transactions', JSON.stringify(transactions));

    alert(`Withdrawal of $${wireamountToWithdraw.toLocaleString()} was successful!`);

    // Redirect to balance display page
    window.location.href = '../HTML/Transaction.html';
});


const body = document.body;

        // Check for saved theme in local storage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            body.className = savedTheme;
            toggleButton.innerHTML = savedTheme === 'dark-mode'
                ? '<i class="fa fa-toggle-on" aria-hidden="true"></i>'
                : '<i class="fa fa-toggle-off" aria-hidden="true"></i>';
        }

        // Toggle between dark and light modes
        toggleButton.addEventListener('click', () => {
            if (body.classList.contains('light-mode')) {
                body.classList.replace('light-mode', 'dark-mode');
                toggleButton.innerHTML = '<i class="fa fa-toggle-on" aria-hidden="true"></i>';
                localStorage.setItem('theme', 'dark-mode');
            } else {
                body.classList.replace('dark-mode', 'light-mode');
                toggleButton.innerHTML = '<i class="fa fa-toggle-off" aria-hidden="true"></i>';
                localStorage.setItem('theme', 'light-mode');
            }
        });



const countrySelect = document.getElementById('country');
const countries = new Intl.DisplayNames(['en'], { type: 'region' });

const countryCodes = Object.keys(countries.of)
    .map(code => ({ code, name: countries.of(code) }))
    .sort((a, b) => a.name.localeCompare(b.name));

countryCodes.forEach(({ code, name }) => {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = name;
    countrySelect.appendChild(option);
});

// Initialize Intl-Tel-Input for phone input
const phoneInput = document.getElementById('phone');
intlTelInput(phoneInput, {
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
    initialCountry: "auto",
    geoIpLookup: function (callback) {
        fetch('https://ipinfo.io/json?token=') // Replace with your token from ipinfo.io
            .then((response) => response.json())
            .then((data) => callback(data.country))
            .catch(() => callback("us"));
    }
});

