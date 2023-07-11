document.addEventListener('DOMContentLoaded', function() {
  var convertButton = document.getElementById('convert-button');
  var input = document.getElementById('amount-input');
  var resultElement = document.getElementById('result');
  var dollarIcon = document.getElementById('dollar-icon');
  var inrIcon = document.getElementById('inr-icon');
  var inputGroup = document.getElementById('input-group');

  dollarIcon.addEventListener('click', function() {
    inputGroup.style.display = 'block';
    input.focus();
    input.placeholder = 'Enter amount in Dollars';
  });

  inrIcon.addEventListener('click', function() {
    inputGroup.style.display = 'block';
    input.focus();
    input.placeholder = 'Enter amount in INR';
  });

  convertButton.addEventListener('click', function() {
    convertAmount();
  });

  input.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
      convertAmount();
    }
  });

  function convertAmount() {
    var amount = parseFloat(input.value);
    if (!isNaN(amount)) {
      if (input.placeholder === 'Enter amount in Dollars') {
        var dollars = amount;
        var rupees = dollars * 82.61;
        resultElement.innerText = dollars.toFixed(2) + ' USD = ' + rupees.toFixed(2) + ' INR';
      } 
      else if (input.placeholder === 'Enter amount in INR') {
        var rupees = amount;
        var dollars = rupees * 0.012;
        resultElement.innerText = rupees.toFixed(2) + ' INR = ' + dollars.toFixed(2) + ' USD';
      }
    }
  }
});
