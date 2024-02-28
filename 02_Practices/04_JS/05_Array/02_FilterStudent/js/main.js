let nodeStudent = document.querySelectorAll('table#tableSinhVien>tbody#tblBody>tr');

const LIST_NAME = [...nodeStudent].map((item) => {
  return item.children[2].innerText;
})
const LIST_SCORE = [...nodeStudent].map((item) => {
  return item.children[3].innerText;
})


document.getElementById('btnSVCaoDiemNhat').onclick = () => {
  let idxHigherScore;
  let higherScore;
  LIST_SCORE.forEach((score, index) => {
    if (higherScore === undefined) {
      higherScore = score;
      idxHigherScore = index;
    }
    else if (higherScore < score) {
      higherScore = score;
      idxHigherScore = index;
    }
  });

  document.getElementById('svGioiNhat').innerHTML = `${LIST_NAME[idxHigherScore]} - Score: ${higherScore}`;
}

document.getElementById('btnSVThapDiemNhat').onclick = () => {
  let idxLowerScore;
  let lowerScore;
  LIST_SCORE.forEach((score, index) => {
    if (lowerScore === undefined) {
      lowerScore = score;
      idxLowerScore = index;
    }
    else if (lowerScore > score) {
      lowerScore = score;
      idxLowerScore = index;
    }
  });

  document.getElementById('svYeuNhat').innerHTML = `${LIST_NAME[idxLowerScore]} - Score: ${lowerScore}`;
}

document.getElementById('btnSVDiemHon5').onclick = () => {
  const TARGET = 5;

  let idxLowerScore;
  let lowerScore;
  LIST_SCORE.forEach((score, index) => {
    if (lowerScore === undefined) {
      lowerScore = score;
      idxLowerScore = index;
    }
    else if (lowerScore > score) {
      lowerScore = score;
      idxLowerScore = index;
    }
  });

  document.getElementById('dsDiemHon5').innerHTML = `${LIST_NAME[idxLowerScore]} - Score: ${lowerScore}`;
}