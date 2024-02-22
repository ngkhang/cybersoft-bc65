/*
B1: xác định đầu vào 
+ Tổng tiền 
+ Số phần trăm tip 
+ Số người share 
+ kết quả 

B2: xác định bước xử lý 
+ Dom tới html để lấy giá trị của các thẻ input 
+ Công thức tính tiền tip: 
  kết quả = (tổng tiền  * phần trăm tip)  / số người cần share

B3 : đầu ra - in kết quả ra màn hình
*/
function handleCaculatorTip() {
  let moneyId = document.getElementById('money');
  let percentTipId = document.getElementById('percentTip');
  let personId = document.getElementById('person');
  let resultId = document.getElementById('result');

  let moneyValue = moneyId.value;
  let percentTipValue = percentTipId.value;
  let personValue = personId.value;

  let tip = (moneyValue * percentTipValue) / personValue;

  resultId.innerHTML = `<sup>$</sup>${tip}/person`
}
