// Data
const items = [
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

const QUERYS = {
  THEAD_TABLE: "thead#tbl-header",
  TBODY_TABLE: "tbody#tbl-body",

};

// Render header table
function renderHead(data) {
  const theadId = document.querySelector(QUERYS.THEAD_TABLE);

  const item = data[0];

  let content = "";
  for (const key in item) {
    content += `
      <th name="${key}" data-sort="asc" onclick="handleSort(this)" style="cursor: pointer;">
        ${key}        
        <span id="btn-${key}">⬆️</span>
      </th>  
    `;
  }
  theadId.innerHTML = `<tr class="text-uppercase">${content}</tr>`;
}

// Render body table
function renderBody(data) {
  const tbodyId = document.querySelector(QUERYS.TBODY_TABLE);

  let content = data.map((item) => {
    return `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.type}</td>
      </tr>
    `;
  });

  tbodyId.innerHTML = content.join("");
}

window.onload = () => {
  renderHead(items);
  renderBody(items);
};

window.handleSort = (target) => {
  let keyWord = target.getAttribute("name");
  let currentSort = target.getAttribute("data-sort");
  let prevSort = currentSort === "asc" ? "desc" : "asc";
  let newList = sorted(items, keyWord, prevSort);
  renderBody(newList);

  let btnHeadStr = `span#btn-${keyWord}`;
  document.querySelector(btnHeadStr).innerHTML = prevSort === 'asc' ? '⬆️' : '⬇️';
  target.setAttribute("data-sort", prevSort);
};

// Sắp xếp lớn - bé khi click vào header table
function sorted(data, key, option) {
  return _.orderBy(data, [key], [option]);
}

// Tìm kiếm sản phẩm theo tên
function getItemByName(data, value, key = "name") {
  let valueConvert = convertToSlug(value);
  return data.filter((item) => convertToSlug(item[key]).includes(valueConvert));
}

// Tìm theo giá sản phẩm từ n -> m
function getItemsByPrice(data, start, end) {
  return data.filter((item) => start <= item.price && item.price <= end);
}

/*
 * convert from https://freetuts.net/tao-slug-tu-dong-bang-javascript-va-php-199.html
 * @param string str
 * @return string
 */
window.convertToSlug = function (str) {
  let slug;

  //Đổi chữ hoa thành chữ thường
  slug = str.toLowerCase();

  //Đổi ký tự có dấu thành không dấu
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a");
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e");
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, "i");
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o");
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u");
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y");
  slug = slug.replace(/đ/gi, "d");
  //Xóa các ký tự đặt biệt
  slug = slug.replace(
    /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\|_/gi,
    ""
  );
  //Đổi khoảng trắng thành ký tự gạch ngang
  slug = slug.replace(/ /gi, "-");
  //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
  //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
  slug = slug.replace(/\-\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-/gi, "-");
  slug = slug.replace(/\-\-/gi, "-");
  //Xóa các ký tự gạch ngang ở đầu và cuối
  slug = "@" + slug + "@";
  slug = slug.replace(/\@\-|\-\@|\@/gi, "");
  //In slug ra textbox có id “slug”
  return slug;
};
