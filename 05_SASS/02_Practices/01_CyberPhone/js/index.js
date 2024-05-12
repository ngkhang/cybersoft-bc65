document.querySelector('.darkMode__button').onclick = () => {
  document.querySelector(".darkMode_box").classList.toggle('is-hide');
}

let inputDarkMode = document.querySelector('input#darkMode');

inputDarkMode.addEventListener('change', (e) => {
  (e.target.checked)
    ? document.querySelector('body').classList.add('dark')
    : document.querySelector('body').classList.remove('dark');
})

