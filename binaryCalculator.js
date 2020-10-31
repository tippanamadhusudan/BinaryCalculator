const DOM = {
    result: document.getElementById('res'),
    btn0: document.getElementById('btn0'),
    btn1: document.getElementById('btn1'),
    btnClear: document.getElementById('btnClr')
};

let firstBinary, firstNumber, secondBinary, secondNumber, value, r, res, operator;
r = '';

const op = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
}

function render(v) {
    res = DOM.result.innerHTML;
    r = r + v;
    res = res + v;
    DOM.result.innerHTML = res;
    //console.log(res);
}

DOM.btn0.addEventListener('click', () => {
    value = document.getElementById('btn0').value;
    //console.log(value);
    render(value);
});

DOM.btn1.addEventListener('click', () => {
    value = document.getElementById('btn1').value;
    
    render(value);
});

function binaryToDecimal() {
    firstNumber = parseInt(firstBinary, 2);
    secondNumber = parseInt(secondBinary, 2);
}

function save() {
    firstBinary= DOM.result.innerHTML;
    r='';
    res = res + operator;
    DOM.result.innerHTML=res;
}

function change(v) {
    if(v==='+'){
      operator = '+'
      save();
    }
    else if(v==='-'){
      operator = '-'
      save();
    }
    else if(v==='*') {
      operator = '*'
      save();
    }
    else if(v==='/'){
      operator = '/'
      save();
    }
}

DOM.btnClear.addEventListener('click', () => {
    DOM.result.innerHTML = '';
});

function length(a) {
  if(firstBinary.length > secondBinary.length) {
    if(a.length < firstBinary.length) {
      for(let i = 0; i < (firstBinary.length - a.length); i++) {
        a = '0' + a;
      }
    }
  } else {
    if(a.length < secondBinary.length) {
      for(let i = 0; i < (secondBinary.length - a.length); i++) {
        a = '0' + a;
      }
    }
  }
  return a;
}

function result() {
    secondBinary = r;
    binaryToDecimal();
    //console.log(operator);
    res = op[operator](firstNumber, secondNumber);
    
    //console.log(res.toString(2));
    res = res.toString(2);
    let result = length(res);
    DOM.result.innerHTML = result;
    firstBinary = result;
}