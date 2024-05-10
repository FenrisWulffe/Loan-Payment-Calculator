window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById('loan-amount').value = 10000;
  console.log('Loan Amount: $', document.getElementById('loan-amount').value);
  document.getElementById('loan-years').value = 5;
  console.log('Term in Years: ', document.getElementById('loan-years').value);
  document.getElementById('loan-rate').value = 5;
  console.log('Yearly Rate: ', document.getElementById('loan-rate').value, '%');
  update();
}


// Get the current values from the UI
// Update the monthly payment
function update() {
  const values = getCurrentUIValues();
  console.log('Current Values: ', values);
  let monthly = calculateMonthlyPayment(values);
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const principle = values.amount;
  console.log('Amount of Principle: ', principle);
  const intrestRate = (values.rate)/100;
  console.log('Loan Rate: ', intrestRate);
  const periodicIntrest = (intrestRate/12);
  console.log('Periodic Intrest Rate: ', periodicIntrest);
  const numberOfPayments = (values.years)*12;
  console.log('Total Number of Payments: ', numberOfPayments);
  let topVal = (principle * periodicIntrest);
  console.log('Top Equation Value: ', topVal);
  let bottomVal = (1 - ((1 + periodicIntrest) ** -(numberOfPayments)));
  console.log('Bottom Equation Value: ', bottomVal);
  let monthlyPayment = (topVal/bottomVal).toFixed(2);
  console.log('Monthly Payment: $', monthlyPayment);
  console.log('___________________________________________')
  return (monthlyPayment);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
     let monthlyDisplay = document.getElementById('monthly-payment');
     monthlyDisplay.innerText = ('$' + monthly);
}
