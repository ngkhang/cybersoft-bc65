function handleDemo01() {
  let numberInputId = document.getElementById('demo01_Number');
  let resultId = document.getElementById('result01');
  let numberInputVal = numberInputId.value * 1;

  let count = 0;
  let end = numberInputVal;
  let content = '';
  while (end > 1) {
    end = parseInt(end / 2);
    count++;
    content += `<p>Count: ${count} - Num: ${end}</p>`;
  }

  resultId.innerHTML = content;
}

function handleDemo02() {
  let numberInputId = document.getElementById('demo02_Number');
  let resultId = document.getElementById('result02');
  let numberInputVal = numberInputId.value * 1;

  let total = 0;
  do {
    total += numberInputVal;
    numberInputVal--;
  } while (numberInputVal > 0);

  resultId.innerHTML = `<p>Total: ${total}</p>`;
}

function handleDemo03() {
  let resultId = document.getElementById('result03');

  let contentOddNumber = '';
  let contentEvenNumber = '';

  // Using For
  for (let stepOdd = 1; stepOdd < 100; stepOdd++) {
    if (stepOdd % 2 !== 0) contentOddNumber += `${stepOdd}, `;
  }

  // Using While
  let stepEven = 1;
  while (stepEven < 100) {
    if (stepEven % 2 === 0) contentEvenNumber += `${stepEven}, `;
    stepEven++;
  }

  resultId.innerHTML = `
    <h3>Số chẳn:</h3>
    <p>${contentEvenNumber.slice(0, -2)}</p>
    <h3>Số lẻ:</h3>
    <p>${contentOddNumber.slice(0, -2)}</p>
  `;
}

function handleDemo04() {
  let numberInputId = document.getElementById('demo04_Number');
  let resultId = document.getElementById('result04');
  let numberInputVal = numberInputId.value * 1;

  let total = 0;
  for (let step = 0; step <= numberInputVal; step++) {
    if (step % 2 === 0) total += step;
  }
  resultId.innerHTML = `<p>👉 Tổng của số chẳn từ 0 đến ${numberInputVal}: ${total}</p>`;
}

function handleDemo05() {
  let numberInputId = document.getElementById('demo05_Number');
  let resultId = document.getElementById('result05');
  let numberInputVal = numberInputId.value * 1;

  let count = 0;
  let total = 0;
  for (let step = 1; step <= numberInputVal; step++) {
    if (step % 3 === 0) {
      count++;
      total += step;
    }
  }

  resultId.innerHTML = `
    <p>👉 Từ 0 đến ${numberInputVal}:</p>
    <ul>
      <li>Có ${count} số chia hết cho 3</li>
      <li>Tổng các số lẻ: ${total}</li>
    </ul>`;
}

function handleDemo06() {
  let numberInputId = document.getElementById('demo06_Number');
  let resultId = document.getElementById('result06');
  let numberInputVal = numberInputId.value * 1;

  const CHAR = '*';
  let content = '';
  for (let step = 0; step < numberInputVal; step++) {
    let row = `<p>${CHAR.repeat(numberInputVal)}</p>`;
    content += row;
  }

  resultId.innerHTML = content;
}

function handleDemo07() {
  let numberInputId = document.getElementById('demo07_Number');
  let resultId = document.getElementById('result07');
  let numberInputVal = numberInputId.value * 1;

  const CHAR = '*';
  let content = '';
  // for (let step = 0; step < numberInputVal; step++) {
  //   let row = `<p>${CHAR.repeat(step + 1)}</p>`;
  //   content += row;
  // }
  for (let i = numberInputVal; i > 0; i--) {
    let row = '';
    for (let j = 0; j < i; j++) {
      row += CHAR;
    }
    content += `<p>${row}</p>`;
  }

  resultId.innerHTML = content;
}
