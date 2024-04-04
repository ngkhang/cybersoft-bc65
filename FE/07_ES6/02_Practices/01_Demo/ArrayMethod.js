const devices = [
  {
    id: 1,
    name: "iPhone 14 Pro Max",
    price: 30000000,
    type: "Apple",
  },
  {
    id: 2,
    name: "Galaxy S23 Ultra",
    price: 25000000,
    type: "Samsung",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    price: 8000000,
    type: "Sony",
  },
  {
    id: 4,
    name: "Macbook Pro 14",
    price: 50000000,
    type: "Apple",
  },
  {
    id: 5,
    name: "Galaxy Z Fold4",
    price: 40000000,
    type: "Samsung",
  },
  {
    id: 6,
    name: "AirPods Pro",
    price: 6000000,
    type: "Apple",
  },
  {
    id: 7,
    name: "Sony WF-1000XM4",
    price: 5000000,
    type: "Sony",
  },
  {
    id: 8,
    name: "iPad Pro 12.9",
    price: 35000000,
    type: "Apple",
  },
  {
    id: 9,
    name: "Galaxy Watch5",
    price: 8000000,
    type: "Samsung",
  },
  {
    id: 10,
    name: "Sony Bravia XR A80L",
    price: 45000000,
    type: "Sony",
  },
];

// Array.filter()
const getDeviceByType = (type) => devices.filter((device) => device.type === type);
const listApple = getDeviceByType('Apple');
console.log(listApple);

// Array.find()
let product5 = devices.find((device) => device.id === 5);
console.log(product5);

// Array.findIndex
let id6 = devices.findIndex((device) => device.id === 6);
if (id6) devices.splice(id6, 1);
console.log(devices);

// Array.forEach()
devices.forEach((device) => {

})

// Array.map()
// const domCard = document.createElement('div');
const domCards = devices.map((item) => {
  return `
    <div class="col-4 mt-2">
      <div class="card">
        <img src="https://picsum.photos/id/${item.id}/200/200" alt="">
        <div class="card-body">
          <h3>${item.name}</h3>
        </div>
      </div>
    </div>
  `;
});
const content = domCards.join('');
console.log(content);

// Array.reduce
const totalPrice = devices.reduce((total, device) => total += device.price, 0);
console.log(totalPrice);
