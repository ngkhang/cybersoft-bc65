/**
 * Function get elements by selectors param
 * @param selectors {array | string} - List selectors
 * @return array elements
 */
function getElements(selectors) {
  if (typeof selectors === "string")
    return document.querySelectorAll(selectors);

  const ELEMENTS = [];
  selectors.forEach((ele) => ELEMENTS.push(...document.querySelectorAll(ele)));
  return ELEMENTS;
}

/**
 * Function reset inputs field form
 */
function resetInputsField() {
  const inputsForm = getElements(QUERY_SELECTORS.INPUTS_FIELD);

  inputsForm.forEach((input) => (input.value = ""));
}

/**
 * Handle button
 * @param queryBtn {string}
 * @param status {boolean}
 */
const disableButton = (queryBtn, status) =>
  (document.querySelector(queryBtn).disabled = status);

/**
 * Handle Modal
 * @param status {string} - Status of modal: "show" or "hide"
 */
const handleModal = (status) => $(QUERY_SELECTORS.MODAL).modal(status);

/**
 * Find data
 * @param data {array}
 * @param callback {function}
 * @return array
 */
const findDataByCallback = (data, callback) => data.filter(callback);

/**
 * Render list data
 * @param list {array}
 */
function render(list) {
  const tableID = document.querySelector(QUERY_SELECTORS.TABLE);

  let content = list.map((item) => {
    return `
      <tr>
        <td>${item.tknv}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.datePicker}</td>
        <td>${TITLE_EMPLOYEE[item.titleEmp].text}</td>
        <td>${item.getTotalSalary()}</td>
        <td>${item.getLevel()}</td>
        <td>
          <button class='btn btn-primary'
            onclick='editEmployee("${item.tknv}")'
          >
            Edit
          </button>
          <button class='btn btn-danger'
            onclick='deleteEmployee("${item.tknv}")'
          >
            Delete
          </button>
        </td>
      </tr>
    `;
  });

  tableID.innerHTML = content.join("");
}
