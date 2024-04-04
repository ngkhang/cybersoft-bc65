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

// Render table chứa các thuộc tính items
function renderHead(data) {
  const theadId = document.querySelector('thead#tbl-header');

  const item = data[0];

  let content = '';
  for (const key in item) {
    content += `
      <th name="${key}" data-sort="asc" onclick="handleSort(this)">
        ${key}        
        <span>⬆️</span>
      </th>  
    `
  }
  theadId.innerHTML = `<tr>${content}</tr>`;
}

function renderBody(data) {
  const tbodyId = document.querySelector('tbody#tbl-body');

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

  tbodyId.innerHTML = content.join('');
}

window.handleSort = (target) => {
  let keyWord = target.getAttribute("name");
  let currentSort = target.getAttribute("data-sort");
  let prevSort = currentSort === 'asc' ? 'desc' : 'asc';
  let newList = sorted(items, keyWord, prevSort);
  renderBody(newList);
  target.setAttribute('data-sort', prevSort);
}

window.onload = () => {
  renderHead(items);
  renderBody(items);
}

// Sắp xếp lớn - bé khi click vào head
function sorted(data, key, option) {
  return _.orderBy(data, [key], [option]);
  // return data.sort((item1, item2) => item1[key] > item2[key])
}


// Tìm kiếm sản phẩm theo tên
function getItemByName(data, value, key = 'name') {
  let valueConvert = convertToSlug(value);
  return data.filter((item) => convertToSlug(item[key]).includes(valueConvert)
  );
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
  let title, slug

  //Đổi chữ hoa thành chữ thường
  slug = str.toLowerCase()

  //Đổi ký tự có dấu thành không dấu
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a')
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e')
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i')
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o')
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u')
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y')
  slug = slug.replace(/đ/gi, 'd')
  //Xóa các ký tự đặt biệt
  slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\|_/gi, '')
  //Đổi khoảng trắng thành ký tự gạch ngang
  slug = slug.replace(/ /gi, "-")
  //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
  //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
  slug = slug.replace(/\-\-\-\-\-/gi, '-')
  slug = slug.replace(/\-\-\-\-/gi, '-')
  slug = slug.replace(/\-\-\-/gi, '-')
  slug = slug.replace(/\-\-/gi, '-')
  //Xóa các ký tự gạch ngang ở đầu và cuối
  slug = '@' + slug + '@'
  slug = slug.replace(/\@\-|\-\@|\@/gi, '')
  //In slug ra textbox có id “slug”
  return slug
}