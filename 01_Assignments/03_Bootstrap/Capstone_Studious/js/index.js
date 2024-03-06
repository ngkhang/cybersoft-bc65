/* ---------- Initial ---------- */
const THEME_INITIAL = {
  "Light": {
    "Data-theme": "light",
    "Icon": "gg-moon",
  },
  "Dark": {
    "Data-theme": "dark",
    "Icon": "gg-sun",
  },
}

function defineInitial() {
  const iconDarkmodeID = document.getElementById('iconDarkmode');

  let defaultTheme = THEME_INITIAL.Light;

  localStorage.setItem('theme', JSON.stringify(defaultTheme));
  iconDarkmodeID.classList.add(defaultTheme.Icon);
  document.documentElement.setAttribute('data-theme', defaultTheme['Data-theme']);
}
defineInitial();

/* ---------- Switch theme dark mode ---------- */
function switchTheme() {
  let prevTheme = JSON.parse(localStorage.getItem('theme'));
  const iconDarkmodeID = document.getElementById('iconDarkmode');

  let newTheme = THEME_INITIAL[`${prevTheme['Data-theme'] === 'light'
    ? 'Dark'
    : 'Light'}`
  ];

  localStorage.setItem('theme', JSON.stringify(newTheme));
  document.documentElement.setAttribute('data-theme', newTheme['Data-theme']);

  iconDarkmodeID.classList.remove(prevTheme.Icon);
  iconDarkmodeID.classList.add(newTheme.Icon);
}

/* ---------- Handle button collapse ---------- */
function handleBtnCollapse() {
  let iconTheme = document.querySelector("span.navbar-toggler-icon");

  let isCollapseId = document.getElementById('isCollapse');

  let newVal = isCollapseId.value === '' ? "show" : "";

  document.documentElement.style.overflowY = newVal === 'show' ? 'hidden' : '';

  iconTheme.setAttribute('class', `navbar-toggler-icon ${newVal === 'show' ? "fa icon-close fa-times" : "fa icon-expand fa-bars"}`)
  isCollapseId.value = newVal;
}

/* ---------- Handle header when scroll ---------- */
window.addEventListener('scroll', () => {
  let topHeaderId = document.getElementById("top-header");
  let headerId = document.getElementById("header");
  const OFFSET = topHeaderId.getBoundingClientRect().height;

  let windowPositionY = window.scrollY || document.documentElement.scrollTop;

  (windowPositionY > OFFSET)
    ? headerId.classList.add('nav-fixed')
    : headerId.classList.remove('nav-fixed');
})

/* ---------- Owl-Carousel ---------- */
$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplaySpeed: 1000,
});

/* ---------- Back to top ---------- */
let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* ---------- Counter-Up ---------- */
$(".counter").countUp({
  "time": 3000,
});

/* ---------- Right Side Bar ---------- */
document.getElementById("toggle_right_sidebar").onclick = function () {
  var hideSideBar = document.getElementById("right_sidebar");
  hideSideBar.classList.toggle("hide_sidebar");

  var toggleClass = document.getElementById("toggle_class");
  toggleClass.classList.toggle("fa-angle-double-left")
}
