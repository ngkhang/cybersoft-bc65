let nodeStudent = document.querySelectorAll('table#tableSinhVien>tbody#tblBody>tr');

function printContent(id, content) {
  document.getElementById(id).innerHTML = content;
}

// Get list name
const LIST_NAME = [...nodeStudent].map((item) => {
  return item.children[2].innerText;
})

// Get list score
const LIST_SCORE = [...nodeStudent].map((item) => {
  return item.children[3].innerText * 1;
})

// Get stuent have higher score
document.getElementById('btnSVCaoDiemNhat').onclick = () => {
  let lower = getHighOrLow(LIST_SCORE, 'high')
  let content = `${LIST_NAME[lower[0]]} - Score: ${lower[1]}`;

  printContent('svGioiNhat', content);
}

// Get student have lower score
document.getElementById('btnSVThapDiemNhat').onclick = () => {
  let lower = getHighOrLow(LIST_SCORE, 'low')
  let content = `${LIST_NAME[lower[0]]} - Score: ${lower[1]}`;

  printContent('svYeuNhat', content);
}

// Count student > 8.5
document.getElementById('btnSoSVGioi').onclick = () => {
  const TARGET = 8.5;
  let count = 0;
  LIST_SCORE.forEach((score) => count += score >= TARGET ? 1 : 0);

  printContent('soSVGioi', count);
}

// Sort list low > high
document.getElementById('btnSapXepTang').onclick = () => {
  const names = [...LIST_NAME];
  const scores = [...LIST_SCORE];

  for (let i = 0; i < scores.length; i++) {
    for (let j = 0; j < scores.length; j++) {
      if (scores[j] > scores[j + 1]) {
        [scores[j], scores[j + 1]] = [scores[j + 1], scores[j]];
        [names[j], names[j + 1]] = [names[j + 1], names[j]]
      }
    }
  }

  let content = names.map((name, index) => `<p>${index + 1} - ${name} - ${scores[index]}</p>`).join('');
  printContent('dtbTang', content);
}

// Get list student have score > 5
document.getElementById('btnSVDiemHon5').onclick = () => {
  const TARGET = 5;
  const listName = [];
  const listScore = [];

  LIST_SCORE.forEach((score, index) => {
    if (score > TARGET) {
      listName.push(LIST_NAME[index]);
      listScore.push(score);
    }
  });

  let content = listName.map((name, index) => `<p>${index + 1} - ${name} - ${listScore[index]}</p>`).join('');
  printContent('dsDiemHon5', content);
}
