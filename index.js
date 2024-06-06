// Get all the elements
const totalIncomeElement = document.getElementById('total-income');
const totalExpensesElement = document.getElementById('total-expenses');
const savingsElement = document.getElementById('savings');
const transactionForm = document.getElementById('add-transaction-form');
const transactionListElement = document.getElementById('transaction-list');
const budgetForm = document.getElementById('add-budget-form');
const budgetListElement = document.getElementById('budget-list');
const goalForm = document.getElementById('add-goal-form');
const goalListElement = document.getElementById('goal-list');

// Initialize data
let transactions = [];
let budgets = [];
let goals = [];
let totalIncome = 0;
let totalExpenses = 0;
let savings = 0;

// Function to update dashboard
function updateDashboard() {
  totalIncomeElement.textContent = totalIncome.toFixed(2);
  totalExpensesElement.textContent = totalExpenses.toFixed(2);
  savingsElement.textContent = savings.toFixed(2);
}

// Function to add transaction
function addTransaction(transaction) {
  transactions.push(transaction);
  totalIncome += transaction.amount;
  updateDashboard();
  renderTransactionList();
}

// Function to add budget
function addBudget(budget) {
  budgets.push(budget);
  totalExpenses += budget.amount;
  updateDashboard();
  renderBudgetList();
}

// Function to add goal
function addGoal(goal) {
  goals.push(goal);
  renderGoalList();
}

// Function to render transaction list
function renderTransactionList() {
  transactionListElement.innerHTML = '';
  transactions.forEach((transaction) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${transaction.name}: $${transaction.amount.toFixed(2)}`;
    transactionListElement.appendChild(listItem);
  });
}

// Function to render budget list
function renderBudgetList() {
  budgetListElement.innerHTML = '';
  budgets.forEach((budget) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${budget.category}: $${budget.amount.toFixed(2)}`;
    budgetListElement.appendChild(listItem);
  });
}

// Function to render goal list
function renderGoalList() {
  goalListElement.innerHTML = '';
  goals.forEach((goal) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${goal.name}: $${goal.amount.toFixed(2)}`;
    goalListElement.appendChild(listItem);
  });
}

// Event listeners
transactionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const transactionName = document.getElementById('transaction-name').value;
  const transactionAmount = parseFloat(document.getElementById('transaction-amount').value);
  addTransaction({ name: transactionName, amount: transactionAmount });
  transactionForm.reset();
});

budgetForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const budgetCategory = document.getElementById('budget-category').value;
  const budgetAmount = parseFloat(document.getElementById('budget-amount').value);
  addBudget({ category: budgetCategory, amount: budgetAmount });
  budgetForm.reset();
});

goalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const goalName = document.getElementById('goal-name').value;
  const goalAmount = parseFloat(document.getElementById('goal-amount').value);
  addGoal({ name: goalName, amount: goalAmount });
  goalForm.reset();
});

// Initialize dashboard
updateDashboard();