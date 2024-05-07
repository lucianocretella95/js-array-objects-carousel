const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morales",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

for (let index = 0; index < images.length; index++) {
  const element = images[index];
  title.innerHTML += `${element.title} ${element.text}`;
  creoImg();
}

function creoImg() {
  let img = document.createElement("img");
  img.src = "img/01.webp";
  let src = document.getElementById("img");
  src.appendChild(img);

  img = document.createElement("img");
  img.src = "img/02.webp";
  src = document.getElementById("img");
  src.appendChild(img);

  img = document.createElement("img");
  img.src = "img/03.webp";
  src = document.getElementById("img");
  src.appendChild(img);
  img = document.createElement("img");
  img.src = "img/04.webp";
  src = document.getElementById("img");
  src.appendChild(img);

  img = document.createElement("img");
  img.src = "img/05.webp";
  src = document.getElementById("img");
  src.appendChild(img);
}

document.getElementById("btnNext").addEventListener("click", function () {
  let selected = 0;
  img[selected].classList.add("active");
  if (selected < img - 1) {
    selected++;
  } else {
    selected = 0;
  }
  img[selected].classList.remove("active");
});
