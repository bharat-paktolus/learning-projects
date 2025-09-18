const userName = document.querySelector(".slider_block h2");
const para = document.querySelector(".slider_block p");
const img = document.querySelector(".slider_block img");

const items = [
  {
    image: "images/user.jpg",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Apple impressed me on multiple levels.",
    name: "Bharat M.",
  },
  {
    image: "images/user2.png",
    text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
    name: "Bishwas M.",
  },
  {
    image: "https://d1nu01mlr7y921.cloudfront.net/car-brand/land-rover/Land%20Rover%20make%201-min.jpg",
    text: "2022 Ferrari 458 Speciale.",
    name: "dR Test Dealer",
  },
];

let currentItem = 0;

function renderItem(item) {
  img.setAttribute("src", item.image);
  para.textContent = item.text;
  userName.textContent = item.name;
}
function changeSlide() {
  renderItem(items[currentItem]);
  currentItem++;
  if (currentItem > items.length - 1) {
    currentItem = 0;
  }
  setTimeout(changeSlide, 3000);
}
changeSlide();
