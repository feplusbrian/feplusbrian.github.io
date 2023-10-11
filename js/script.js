// toggle class active
const navbarnav = document.querySelector(".navbar-nav");
// ketika juice menu di klik
document.querySelector("#juice-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const juice = document.querySelector("#juice-menu");

document.addEventListener("click", function (e) {
  if (!juice.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// // Toggle class active untuk shopping cart
// const shoppingCart = document.querySelector(".shopping-cart");
// document.querySelector("#shopping-cart-button").onclick = (e) => {
//   shoppingCart.classList.toggle("active");
//   e.preventDefault();
// };

// // Function to show the item detail modal
// function showItemDetail(name, price) {
//   const modal = document.getElementById("item-detail-modal");
//   const itemName = document.getElementById("item-name");
//   const itemPrice = document.getElementById("item-price");

//   itemName.textContent = `Name: ${name}`;
//   itemPrice.textContent = `Price: $${price}`;

//   modal.style.display = "block";
// }

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelector(".item-detail-button");

itemDetailButton.onclick = (e) => {
  itemDetailModal.style.display = "flex";
  e.preventDefault();
};

// klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

// Modal Box 2
const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const itemDetailButton2 = document.querySelector(".item-detail-button2");

itemDetailButton2.onclick = (e) => {
  itemDetailModal2.style.display = "flex";
  e.preventDefault();
};

// klik tombol close modal
document.querySelector(".modal2 .close-icon").onclick = (e) => {
  itemDetailModal2.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal2) {
    itemDetailModal2.style.display = "none";
  }
};

// Modal Box 3
const itemDetailModal3 = document.querySelector("#item-detail-modal3");
const itemDetailButton3 = document.querySelector(".item-detail-button3");

itemDetailButton3.onclick = (e) => {
  itemDetailModal3.style.display = "flex";
  e.preventDefault();
};

// klik tombol close modal
document.querySelector(".modal3 .close-icon").onclick = (e) => {
  itemDetailModal3.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal3) {
    itemDetailModal3.style.display = "none";
  }
};

// Modal Box 4
const itemDetailModal4 = document.querySelector("#item-detail-modal4");
const itemDetailButton4 = document.querySelector(".item-detail-button4");

itemDetailButton4.onclick = (e) => {
  itemDetailModal4.style.display = "flex";
  e.preventDefault();
};

// klik tombol close modal
document.querySelector(".modal4 .close-icon").onclick = (e) => {
  itemDetailModal4.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal3) {
    itemDetailModal4.style.display = "none";
  }
};

// Modal Box 5
const itemDetailModal5 = document.querySelector("#item-detail-modal5");
const itemDetailButton5 = document.querySelector(".item-detail-button5");

itemDetailButton5.onclick = (e) => {
  itemDetailModal5.style.display = "flex";
  e.preventDefault();
};

// klik tombol close modal
document.querySelector(".modal5 .close-icon").onclick = (e) => {
  itemDetailModal5.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal3) {
    itemDetailModal5.style.display = "none";
  }
};

// Modal Box 3
const itemDetailModal6 = document.querySelector("#item-detail-modal6");
const itemDetailButton6 = document.querySelector(".item-detail-button6");

itemDetailButton6.onclick = (e) => {
  itemDetailModal6.style.display = "flex";
  e.preventDefault();
};

// klik tombol close modal
document.querySelector(".modal6 .close-icon").onclick = (e) => {
  itemDetailModal6.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal3) {
    itemDetailModal6.style.display = "none";
  }
};

// Modal Box 7
const itemDetailModal7 = document.querySelector("#item-detail-modal7");
const itemDetailButton7 = document.querySelector(".item-detail-button7");

itemDetailButton7.onclick = (e) => {
  itemDetailModal7.style.display = "flex";
  e.preventDefault();
};

// klik tombol close modal
document.querySelector(".modal7 .close-icon").onclick = (e) => {
  itemDetailModal7.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal3) {
    itemDetailModal7.style.display = "none";
  }
};

// Modal Box 8
const itemDetailModal8 = document.querySelector("#item-detail-modal8");
const itemDetailButton8 = document.querySelector(".item-detail-button8");

itemDetailButton8.onclick = (e) => {
  itemDetailModal8.style.display = "flex";
  e.preventDefault();
};

// klik tombol close modal
document.querySelector(".modal8 .close-icon").onclick = (e) => {
  itemDetailModal8.style.display = "none";
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal3) {
    itemDetailModal8.style.display = "none";
  }
};

// // Modal Box 2
// const menu2 = document.querySelector("menu2");
// const itemDetailButton = document.querySelector(".item-detail-modal");

// itemDetailButton.onclick = (e) => {
//   itemDetailModal.style.display = "flex";
//   e.preventDefault();
// };

// window.onload = function () {
//   var items = document.querySelectorAll("#cart button");
//   var total = document.querySelector("#total");
//   var cartTotal;

//   items.forEach(function (item) {
//     item.addEventListener("click", function () {
//       addItemToCart(item.id);
//     });
//   });

//   function addItemToCart(id) {
//     cartTotal += parseFloat(id);
//     total.textContent = "Total: $" + cartTotal;
//   }
// };

jQuery(document).ready(function () {
  jQuery("#eyeIcon").click(function () {
    jQuery("#hiddenMsg").attr("style", "display:block");
  });
});

// // JavaScript to toggle the dark theme class on the body
// const themeToggle = document.getElementById("moon");
// const body = document.body;

// // toggle class active
// const bulan = document.querySelector("navbar-extra");

// themeToggle.addEventListener("click", () => {
//   body.classList.toggle("dark-theme");
// });

// const darkModeIcon = document.querySelector(".dark-mode-icon");

// themeToggle.addEventListener("click", () => {
//   body.classList.toggle("dark-theme");

//   // Toggle the icon based on the theme
//   if (body.classList.contains("dark-theme")) {
//     darkModeIcon.textContent = "☀️";
//   } else {
//     darkModeIcon.textContent = "🌙";
//   }
// });
