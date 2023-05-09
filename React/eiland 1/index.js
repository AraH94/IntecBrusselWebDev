const eilanden = [{
  id: 1,
  name: "Koh Samui",
  price: "10€",
  img: "./images/eiland.jpg",
},
{
  id: 2,
  name: "Koh PhiPhi",
  price: "20€",
  img: "./images/eiland2.jpg",
},
{
	id: 3,
	name: "Palawan",
	price: "30€",
	img: "./images/eiland3.jpg",
}];


let imgplaats = document.getElementById("Samui");
let imgplaats2 = document.getElementById("Samui2");
let imgplaats3 = document.getElementById("Samui3");


let Title = document.getElementById("SamuiT");
let Title2 = document.getElementById("SamuiT2");
let Title3 = document.getElementById("SamuiT3");


const lookupIMG = eilanden.find(item => item.id === 1);
const lookupIMG2 = eilanden.find(item => item.id === 2);
const lookupIMG3 = eilanden.find(item => item.id === 3);



imgplaats.src = lookupIMG.img;
imgplaats2.src = lookupIMG2.img;
imgplaats3.src = lookupIMG3.img;

Title.innerHTML = lookupIMG.name;
Title2.innerHTML = lookupIMG2.name;
Title3.innerHTML = lookupIMG3.name;


// Title.innerHTML = "Hello"

// imgplaats.src = ;