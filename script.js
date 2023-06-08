document.addEventListener('DOMContentLoaded', () => {
  const clear = document.querySelector('.clear');
  const mainField = document.querySelector('.main-field');
  const result = document.querySelector('.result');
  const modulo = document.querySelector('.percent');
  const btn_dot = document.querySelector('.btn_dot');
  const erase = document.querySelector('.delete');
  const btn_0 = document.querySelector('.btn_0');
  const btn_1 = document.querySelector('.btn_1');
  const btn_2 = document.querySelector('.btn_2');
  const btn_3 = document.querySelector('.btn_3');
  const btn_4 = document.querySelector('.btn_4');
  const btn_5 = document.querySelector('.btn_5');
  const btn_6 = document.querySelector('.btn_6');
  const btn_7 = document.querySelector('.btn_7');
  const btn_8 = document.querySelector('.btn_8');
  const btn_9 = document.querySelector('.btn_9');
  const divide = document.querySelector('.divide');
  const times = document.querySelector('.times');
  const minus = document.querySelector('.minus');
  const plus = document.querySelector('.plus');
  const equal = document.querySelector('.equal');

  const calculate = (expression) => {
    const regex = /(\d+)\s?([-+*÷])\s?(\d+)/;
    const matches = expression.match(regex);

    if (matches) {
      const [_, a, op, b] = matches;
      const numA = parseInt(a);
      const numB = parseInt(b);

      let result;
      switch (op) {
        case '+':
          result = numA + numB;
          break;
        case '-':
          result = numA - numB;
          break;
        case '*':
          result = numA * numB;
          break;
        case '÷':
          result = numA / numB;
          break;
        default:
          return 'Error: Invalid operator';
      }

      const updatedExpression = expression.replace(regex, result);
      return calculate(updatedExpression);
    }

    return isNaN(expression) ? 'Error: Invalid expression' : expression;
  };

  equal.addEventListener('click', () => {
    const expression = mainField.value;
    const results = calculate(expression);
    result.value = results;
  });

  clear.addEventListener('click', () => {
    mainField.value = '';
    result.value = '';
  });

  erase.addEventListener('click', () => {
    mainField.value = mainField.value.slice(0, -1);
    result.value = '';
  });

  modulo.addEventListener('click', () => {
    mainField.value += '00';
  });

  btn_dot.addEventListener('click', () => {
    mainField.value += '.';
  });

  btn_0.addEventListener('click', () => {
    mainField.value += '0';
  });

  btn_1.addEventListener('click', () => {
    mainField.value += '1';
  });

  btn_2.addEventListener('click', () => {
    mainField.value += '2';
  });

  btn_3.addEventListener('click', () => {
    mainField.value += '3';
  });

  btn_4.addEventListener('click', () => {
    mainField.value += '4';
  });

  btn_5.addEventListener('click', () => {
    mainField.value += '5';
  });

  btn_6.addEventListener('click', () => {
    mainField.value += '6';
  });

  btn_7.addEventListener('click', () => {
    mainField.value += '7';
  });

  btn_8.addEventListener('click', () => {
    mainField.value += '8';
  });

  btn_9.addEventListener('click', () => {
    mainField.value += '9';
  });

  divide.addEventListener('click', () => {
    mainField.value += '÷';
  });
  times.addEventListener('click', () => {
    mainField.value += '*';
  });
  minus.addEventListener('click', () => {
    mainField.value += '-';
  });
  plus.addEventListener('click', () => {
    mainField.value += '+';
  });
});
