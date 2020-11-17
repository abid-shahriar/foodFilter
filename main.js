const arr = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "dinner",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "dinner",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "dinner",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
];

let div1 = document.querySelector(".div1");
let input = document.querySelector(".input1");

//console.log(len)

let len = arr.length;

len = len - 1;
let store = "";

for (let i = 0; i <= len; i++) {
  // console.log(array[i].title);
  let html = `
	 <div class="col-lg-3 col-md-6">
	 <div class="p-2">
	 <img style="display:block;height:200px;width:300px;" src="https://source.unsplash.com/random" class="img-fluid" alt="Responsive image">

	 </div>
	 <section class="p-2">
	 <h6>${arr[i].title.toUpperCase()}</h6>
	 <small class="text-center">${arr[i].desc}</small><br>
	 <b> price:${arr[i].price}</b>
	 </section>
	 </div>

	 `;
  store = store + html;
}
div1.innerHTML = store;

input.addEventListener("input", () => {
  store = "";
  for (let i = 0; i <= len; i++) {
    if (arr[i].title.includes(input.value)) {
      let html = `
        <div class="col-lg-3 col-md-6">
        <div class="p-2">
        <img style="display:block;height:200px;width:300px;" src="https://source.unsplash.com/random" class="img-fluid" alt="Responsive image">
        </div>
        <section class="p-2">
        <h6>${arr[i].title.toUpperCase()}</h6>
        <small class="text-center">${arr[i].desc}</small><br>
        <b> price:${arr[i].price}</b>
        </section>
        </div>
        `;
      store = store + html;
    }
  }

  div1.innerHTML = "";

  div1.innerHTML = store;
});

let name = "abid";

if (name.includes("z")) {
  console.log("a is in the name");
}

// random color generator*************************
// const colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

// let randomColor = "#";

// for (let i = 0; i < 6; i++) {
//   const ourRandomNum = Math.floor(Math.random() * 17);

//   randomColor = randomColor + colorArr[ourRandomNum];
// }

// const htmlBody = document.querySelector("body");

// htmlBody.style.backgroundColor = randomColor;

// console.log(randomColor);

// const htmlBody = document.querySelector("body");

// htmlBody.style.backgroundColor = "#000000";

// const ourRandomNum = Math.random() * 6;

// console.log(Math.floor(ourRandomNum));
