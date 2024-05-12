const QUERY = {
  BTN_SUBMIT: '#btnXuatThongTin',
  INPUTS: 'form#formNhanVien input',
  TABLE: '#listNhanVien',
}

document.querySelector(QUERY.BTN_SUBMIT).onclick = (e) => {
  e.preventDefault();

  const inputs = document.querySelectorAll(QUERY.INPUTS);

  let nhanVien = {};

  inputs.forEach((input) => {
    const { id, value } = input;
    nhanVien[id] = value;
  });
  render(nhanVien);
}

function render(nhanVien) {
  const tableEle = document.querySelector(QUERY.TABLE);
  let content = '';
  for (const key in nhanVien) {
    content += `<td>${nhanVien[key]}</td>`
  };
  tableEle.innerHTML = `<tbody><tr>${content}</tr></tbody>`;
}


// ========= Import/Export ========= //
import { Product } from './Product.js';
import Default from "./Product.js";

let prod = new Product();
console.log(prod);


// ========= OOP ========= //
import Student from './OOP.js';

// let sv1 = new Student();
// sv1.maSinhVien = 1;
// sv1.tenSinhVien = 'abc';

let sv1 = new Student(1, 'abc');
sv1.hienthi();


// function func(params) {
//   this.name = 'name';
//   console.log(this);
// }

// const funcExp = function (name) {
//   this.name = 'name';
//   console.log(this);
// }

// const arrow = (name) => {
//   this.name = 'name';
//   console.log(this);
// }

// let a = new func();
// let b = new funcExp();
// let c = new arrow();

// function SanPham() {
//   this.name = '';
//   this.hienThi = function () {
//     return `Thông tin SP: ${this}`;
//   };
// }

// let sp1 = new SanPham();
// sp1.name = 'SP 01';
// console.log(sp1.hienThi());
// let sp2 = new SanPham();
// sp2.name = 'SP 02';
// console.log(sp2.hienThi());



// const func = (title, type) => {
//   return () => {
//     return `<${type}>${title}</${type}>`
//   }
// };


// let output = func('FE', 'div')();
// console.log(output);


// const product = {
//   id: 1,
//   name: 'Product 1',
//   price: 1000,
// };

// const { id, name, price } = product;
// console.log(id, name, price);



// Dynamic key
// let name = 'NNN';
// let obj = {
//   [name]: 'TEN OBJ',
//   sayHi() {
//     console.log(this.NNN);
//   }
// }

// console.log(obj[name]);
// obj.sayHi();


// let arr = [1, 2, 3]

// for in: duyệt qua index/key
// for of: duyệt qua value