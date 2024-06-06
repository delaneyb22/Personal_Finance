// Get HTML elements
const transactionForm = document.getElementById('add-transaction-form');
const budgetForm = document.getElementById('add-budget-form');
const goalForm = document.getElementById('add-goal-form');
const transactionList = document.getElementById('transaction-list');
const budgetList = document.getElementById('budget-list');
const goalList = document.getElementById('goal-list');
const totalIncomeElement = document.getElementById('total-income');
const totalExpensesElement = document.getElementById('total-expenses');
const savingsElement = document.getElementById('savings');

// Initialize data
let transactions = [];
let budgets = [];
let goals = [];
let totalIncome = 0;
let totalExpenses = 0;
let savings = 0;

// Function to update dashboard
function updateDashboard() {
  totalIncomeElement.textContent = `$${totalIncome.toFixed(2)}`;
  totalExpensesElement.textContent = `$${totalExpenses.toFixed(2)}`;
  savingsElement.textContent = `$${savings.toFixed(2)}`;
}

// Function to add transaction
function addTransaction(event) {
  event.preventDefault();
  const transactionNameInput = document.getElementById('transaction-name');
  const transactionAmountInput = document.getElementById('transaction-amount');
  const transactionName = transactionNameInput.value;
  const transactionAmount = parseFloat(transactionAmountInput.value);
  transactionNameInput.value = '';
  transactionAmountInput.value = '';
  if (transactionName === '' || isNaN(transactionAmount)) {
    alert('Please enter valid transaction details.');
    return;
  }
  const transaction = { name: transactionName, amount: transactionAmount };
  transactions.push(transaction);
  totalIncome += transactionAmount;
  updateDashboard();
  renderTransactionList();
}

// Function to add budget
function addBudget(event) {
  event.preventDefault();
  const budgetCategoryInput = document.getElementById('budget-category');
  const budgetAmountInput = document.getElementById('budget-amount');
  const budgetCategory = budgetCategoryInput.value;
  const budgetAmount = parseFloat(budgetAmountInput.value);
  budgetCategoryInput.value = '';
  budgetAmountInput.value = '';
  if (budgetCategory === '' || isNaN(budgetAmount)) {
    alert('Please enter valid budget details.');
    return;
  }
  const budget = { category: budgetCategory, amount: budgetAmount };
  budgets.push(budget);
  totalExpenses += budgetAmount;
  updateDashboard();
  renderBudgetList();
}

// Function to add goal
function addGoal(event) {
  event.preventDefault();
  const goalNameInput = document.getElementById('goal-name');
  const goalAmountInput = document.getElementById('goal-amount');
  const goalName = goalNameInput.value;
  const goalAmount = parseFloat(goalAmountInput.value);
  goalNameInput.value = '';
  goalAmountInput.value = '';
  if (goalName === '' || isNaN(goalAmount)) {
    alert('Please enter valid goal details.');
    return;
  }
  const goal = { name: goalName, amount: goalAmount };
  goals.push(goal);
  renderGoalList();
}

// Function to render transaction list
function renderTransactionList() {
  transactionList.innerHTML = '';
  transactions.forEach((transaction, index) => {
    const transactionRow = document.createElement('li');
    transactionRow.textContent = `${transaction.name}: $${transaction.amount.toFixed(2)}`;
    transactionList.appendChild(transactionRow);
  });
}

// Function to render budget list
function renderBudgetList() {
  budgetList.innerHTML = '';
  budgets.forEach((budget, index) => {
    const budgetRow = document.createElement('li');
    budgetRow.textContent = `${budget.category}: $${budget.amount.toFixed(2)}`;
    budgetList.appendChild(budgetRow);
  });
}

// Function to render goal list
function renderGoalList() {
  goalList.innerHTML = '';
  goals.forEach((goal, index) => {
    const goalRow = document.createElement('li');
    goalRow.textContent = `${goal.name}: $${goal.amount.toFixed(2)}`;
    goalList.appendChild(goalRow);
  });
}

// Add event listeners
transactionForm.addEventListener('submit', addTransaction);
budgetForm.addEventListener('submit', addBudget);
goalForm.addEventListener('submit', addGoal);

// Initialize dashboard
updateDashboard();
renderTransactionList();
renderBudgetList();
renderGoalList();
