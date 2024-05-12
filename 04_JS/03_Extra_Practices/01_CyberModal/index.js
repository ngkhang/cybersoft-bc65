function handleModal() {
  let modalId = document.getElementById('modalFrame');

  let currentDisplay = modalId.style.visibility;

  if (currentDisplay === 'hidden' || currentDisplay === '') {
    modalId.style.visibility = 'visible';
  }
  else {
    modalId.style.visibility = 'hidden';
  }
}
