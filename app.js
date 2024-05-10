let totalIncome = 0;
let totalExpenditure = 0;


// Function to add income
function addIncome() {
    const userInput = parseFloat(document.getElementById('userInput').value);

    if (!isNaN(userInput) && userInput > 0) {
        totalIncome += userInput;
        updateDetails();
        clear();
    }
}

// Function to add expenditure
function addExpenditure() {
    const userInput = parseFloat(document.getElementById('userInput').value);

    if (!isNaN(userInput) && userInput > 0) {
        totalExpenditure += userInput;
        updateDetails();
        clear();
    }
}


// Function to update details on the page and save to local storage
function updateDetails() {
    const balance = totalIncome - totalExpenditure;
    const balanceElement = document.getElementById('balance');
    balanceElement.textContent = balance.toFixed(2);

    const savingElement = document.getElementById('saveLoss');
    savingElement.textContent = balance.toFixed(2);

    if (balance >= 0) {
        savingElement.style.color = 'green';
        savingElement.textContent = `Savings: ${balance.toFixed(2)}`;
    } else {
        savingElement.style.color = 'red';
        savingElement.textContent = `Loss: ${balance.toFixed(2)}`;
    }

    document.getElementById('totalIncome').textContent = totalIncome.toFixed(2);
    document.getElementById('totalExpenditure').textContent = totalExpenditure.toFixed(2);

    // Save values in local storage
    saveValuesToLocalStorage();
}

// Function to save values to local storage
function saveValuesToLocalStorage() {
    localStorage.setItem('totalIncome', totalIncome.toFixed(2));
    localStorage.setItem('totalExpenditure', totalExpenditure.toFixed(2));
}

// Event listener for page load
window.addEventListener('load', () => {
    initializeValuesFromLocalStorage();
    updateDetails();
});

// Function to initialize values from local storage
function initializeValuesFromLocalStorage() {
    totalIncome = parseFloat(localStorage.getItem('totalIncome')) || 0;
    totalExpenditure = parseFloat(localStorage.getItem('totalExpenditure')) || 0;
}

// Function to clear input field
function clear() {
    document.getElementById('userInput').value = '';
}