/*Consegna:
Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.   Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

*/
const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
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

//creiamo la variabile con le immmagini

const image = images.map((element) => element.image);
console.log(image);
// creo le variabili per il titolo
const title = images.map((element) => element.title);
console.log(title);
// creo le variabili per il testo
const text = images.map((element) => element.text);
console.log(text);

//creo una variabile legata al indice
let index = 0;

// creo l'immagine
let ImgBox = (document.getElementById("ImgScreen").innerHTML = `

<img class="view" src=${image[index]}></img>
<div class="absolute bottom">
<h3>${title[index]}</h3>
<p>${text[index]}</p>
</div>
`);

console.log(ImgBox);

for (let i = 0; i < image.length; i++) {
  document.getElementById("DashImg").innerHTML += `
  <div class="opacity" ><img src="${image[i]}" alt="${title[i]}"></div>`;
}
const DashItems = document.querySelectorAll("#DashImg div");

DashItems[index].classList.remove("opacity");
DashItems[index].classList.add("border");
DashItems[0].classList.add("relative");
DashItems[4].classList.add("relative");

console.log(DashItems);

const ArrowUp = document.createElement("div");
ArrowUp.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
ArrowUp.classList.add("absolute", "top");
console.log(ArrowUp);
DashItems[0].append(ArrowUp);

const ArrowDown = document.createElement("div");
ArrowDown.innerHTML = `<i class="fa-solid fa-arrow-down"></i>`;
ArrowDown.classList.add("absolute", "bottom");
console.log(ArrowDown);
DashItems[4].append(ArrowDown);

// variabile bottone
let Next = document.querySelector(".fa-arrow-up");

//creo un avento
Next.addEventListener("click", function () {
  DashItems[index].classList.add("opacity");
  DashItems[index].classList.remove("border");
  //aumento indice di 1 per click
  index++;
  //detto la condizione ceh se indice è maggiore della lunghezza dell'array il valore risultera 0

  if (index >= image.length) {
    index = 0;
  }
  DashItems[index].classList.remove("opacity");
  DashItems[index].classList.add("border");
  //creo una variabile con il nuove elemento del array
  let ImgScreen = image[index];
  let TitleScreen = title[index];
  let TextScreen = text[index];

  console.log(index);
  //vado a sostituire il vecchio valore scr con quello nuovo
  document.querySelector(".Mainimg img").src = ImgScreen;
  document.querySelector("h3").innerHTML = TitleScreen;
  document.querySelector("p").innerHTML = TextScreen;
});

// creo la  variabile per l'immagine precedente
let Previous = document.querySelector(".fa-arrow-down");
Previous.addEventListener("click", function () {
  DashItems[index].classList.remove("border");
  DashItems[index].classList.add("opacity");
  //riduco  di uno il valore del index
  index--;
  // se il valore di index va sotto allo 0 lo riporto al valore massimo possibile

  if (index < 0) {
    index = image.length - 1;
  }
  DashItems[index].classList.add("border");
  DashItems[index].classList.remove("opacity");
  let ImgScreen = image[index];
  let TitleScreen = title[index];
  let TextScreen = text[index];
  //vado a sostituire il vecchio valore scr con quello nuovo
  document.querySelector(".Mainimg img").src = ImgScreen;
  document.querySelector("h3").innerHTML = TitleScreen;
  document.querySelector("p").innerHTML = TextScreen;
});
