let totalIncome = 0;
let totalExpenditure = 0;



function addIncome() {
    const userInput = parseFloat(document.getElementById('userInput').value);

    if(!isNaN(userInput) && userInput > 0){
        totalIncome += userInput;
    updateDetails();
    clear();
    }
};
function addExpenditure() {
    const userInput = parseFloat(document.getElementById('userInput').value);

    if(!isNaN(userInput) && userInput > 0){
        totalExpenditure += userInput;
    updateDetails();
    clear();
    }
};

function clear() {
    document.getElementById('userInput').value = '';
}

function updateDetails() {
    const balance = totalIncome -totalExpenditure;
    const balanceElement = document.getElementById('balance');
    balanceElement.textContent = balance.toFixed(2);

    const savingElement = document.getElementById('saveLoss');
    savingElement.textContent = balance.toFixed(2);

    if(balance >= 0){
        savingElement.style.color = 'green';
        savingElement.textContent = `Savings: ${balance.toFixed(2)}`;
    }else{
        savingElement.style.color = 'red';
        savingElement.textContent = `Loss: ${balance.toFixed(2)}`;
    }

    document.getElementById('totalIncome').textContent = totalIncome.toFixed(2);
    document.getElementById('totalExpenditure').textContent = totalExpenditure.toFixed(2);
};