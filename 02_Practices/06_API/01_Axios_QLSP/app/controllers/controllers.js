// Render list product
function render(productList) {
  const contents = productList.map((prod) => {
    return `
      <tr>
        <td>${prod.id}</td>
        <td>${prod.name}</td>
        <td>${prod.price}</td>
        <td class='w-25'>
          <img src='${prod.image}' class='img-fluid'/>
        </td>
        <td class='w-25'>${prod.description}</td>
        <td class=''>
          <div class='d-flex justify-content-between'>
          <button
            class='btn btn-primary px-4 py-1' type='button'
            onclick='delProduct("${prod.id}")'
          >
            Xóa
          </button>
          <button 
            class='btn btn-danger px-4 py-1 mr-2' type='button'
            onclick='editProduct("${prod.id}")'
          >
            Sửa
          </button>
          </div>
        </td>
      </tr>    
    `;
  });

  document.querySelector(DOM_ID.TABLE_BODY_ID).innerHTML = contents.join('');
}