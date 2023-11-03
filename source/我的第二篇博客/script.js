function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function appendValue(value) {
    document.getElementById('display').value += value;
  }
  
  function calculate() {
    var displayValue = document.getElementById('display').value;
    var result = eval(displayValue);
    document.getElementById('display').value = result;
  }