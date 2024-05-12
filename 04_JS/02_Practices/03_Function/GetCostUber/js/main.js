const UBER_CAR = {
  priceType1: 8000,
  priceType2: 7500,
  priceType3: 7000,
  time: 2000,
};
const UBER_SUV = {
  priceType1: 9000,
  priceType2: 8500,
  priceType3: 80000,
  time: 3000,
};
const UBER_BLACK = {
  priceType1: 10000,
  priceType2: 9500,
  priceType3: 9000,
  time: 3500,
};

const listCar = {
  'uberCar': UBER_CAR,
  'uberSuv': UBER_SUV,
  'uberBlack': UBER_BLACK,
}

function getCostKm(typeCar, km) {
  if (km <= 1) return typeCar.priceType1;

  if (km < 19) return typeCar.priceType1 + typeCar.priceType2 * (km - 1);

  return typeCar.priceType1 + typeCar.priceType2 * km * 18 + typeCar.priceType3 * (km - 19)
}

function printBill({ typeCar, km, time, total }) {
  const formBill = `
    <table class="table">
      <thead>
        <tr>
          <th>Type Car</th>
          <th>Kilometer</th>
          <th>Time</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${typeCar}</td>
          <td>${km}</td>
          <td>${time}</td>
          <td>${total}</td>
        </tr>
      </tbody>
    </table>
  `;

  document.getElementById('bill').classList.add('d-block');
  document.getElementById('bill').innerHTML = formBill;
  window.print();
}


function tinhTienUber() {
  const typeCarId = document.querySelector('input[name="selector"]:checked');
  const kmId = document.getElementById('txt-km');
  const timeId = document.getElementById('time');

  let typeCar = typeCarId.value;
  let kmValue = kmId.value * 1;
  let timeValue = timeId.value * 1;

  const outputId = document.getElementById('divThanhTien');

  let infoCar = listCar[typeCar];

  let priceKm = getCostKm(infoCar, kmValue);
  let priceTime = timeValue > 3 ? (timeValue / 3) * infoCar.time : 0;
  let total = priceKm + priceTime;

  outputId.style.display = 'block';
  outputId.children[0].children[0].innerHTML = `${total} vnđ`;

  return {
    typeCar: typeCar,
    km: kmValue,
    time: timeValue,
    total: total,
  };
}

function handlePrint() {
  let result = tinhTienUber();
  printBill({ ...result });
}

