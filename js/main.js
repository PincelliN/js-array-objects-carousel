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

//creo una variabile legata al indice
let index = 0;


// creo l'immagine
let ImgBox = (document.getElementById("ImgScreen").innerHTML = `
<img class="view" src=${images[index].image}></img>
<div class="absolute bottom">
<h3>${images[index].title}</h3>
<p>${images[index].text}</p>
</div>
`);

console.log(ImgBox);

// creo le slide laterali ed inserisco le relative immagini
for (let i = 0; i < images.length; i++) {
  document.getElementById("DashImg").innerHTML += `
  <div class="opacity" ><img src="${images[i].image}" alt="${images[i].title}"></div>`;
}
const DashItems = document.querySelectorAll("#DashImg div");

//aggiungo le classi che mi servono
DashItems[index].classList.remove("opacity");
DashItems[index].classList.add("border");
DashItems[0].classList.add("relative");
DashItems[4].classList.add("relative");

console.log(DashItems);



 // creo ed inserisco la freccia in su
const ArrowUp = document.createElement("div");
ArrowUp.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
ArrowUp.classList.add("absolute", "top");
console.log(ArrowUp);
DashItems[0].append(ArrowUp);



// creo ed inserisco la freccia in giù
const ArrowDown = document.createElement("div");
ArrowDown.innerHTML = `<i class="fa-solid fa-arrow-down"></i>`;
ArrowDown.classList.add("absolute", "bottom");
console.log(ArrowDown);
DashItems[4].append(ArrowDown);

// variabile bottone
let Next = document.querySelector(".fa-arrow-up");




                      // funzione per l'immagine successiva
                      function NextImg() {
                        DashItems[index].classList.add("opacity");
                        DashItems[index].classList.remove("border");
                        //aumento indice di 1 per click
                        index++;
                        //detto la condizione ceh se indice è maggiore della lunghezza dell'array il valore risultera 0

                        if (index >= images.length) {
                          index = 0;
                        }
                        DashItems[index].classList.remove("opacity");
                        DashItems[index].classList.add("border");
                        //creo una variabile con il nuove elemento del array
                        let ImgScreen = images[index].image;
                        let TitleScreen = images[index].title;
                        let TextScreen = images[index].text;

                        console.log(index);
                        //vado a sostituire il vecchio valore scr con quello nuovo
                        document.querySelector(".Mainimg img").src = ImgScreen;
                        document.querySelector("h3").innerHTML = TitleScreen;
                        document.querySelector("p").innerHTML = TextScreen;
                        }




                        //creo una varibile  che mi servira per interrompere l'intervallo
                        let interval;
                        function IntervalImg() {
                          interval=  setInterval(NextImg, 3000);
                        }
                        function Stop() {
                            clearInterval(interval);
                        }




          //variabile timeout
          let Play = 0;

          //funzione per determinare le condizioni di innesco
          function Player() {
              if(Play===0){
            IntervalImg();
            Play= 1;
              }else {
              Stop();
              Play=0;
              }
              
          } 

//creo un avento
Next.addEventListener("click",Player);







// creo la  variabile per l'immagine precedente
let Previous = document.querySelector(".fa-arrow-down");


                  function PrevImg () {
                    DashItems[index].classList.remove("border");
                    DashItems[index].classList.add("opacity");
                    //riduco  di uno il valore del index
                    index--;
                    // se il valore di index va sotto allo 0 lo riporto al valore massimo possibile

                    if (index < 0) {
                      index = images.length - 1;
                    }
                    DashItems[index].classList.add("border");
                    DashItems[index].classList.remove("opacity");
                    let ImgScreen = images[index].image;
                    let TitleScreen = images[index].title;
                    let TextScreen = images[index].text;
                    //vado a sostituire il vecchio valore scr con quello nuovo
                    document.querySelector(".Mainimg img").src = ImgScreen;
                    document.querySelector("h3").innerHTML = TitleScreen;
                    document.querySelector("p").innerHTML = TextScreen;
                  }

                //Nuova funzione per indicare l'intervallo nel ciclo inverso
                //Posso riutilizare la funzione Stop visto che lavora sul valore della variabile
                  function InterImg() {
                    interval = setInterval(PrevImg, 3000);
                  }

          function PlayerPrev() {
            if (Play === 0) {
              InterImg();
              Play = 1;
            } else {
              Stop();
              Play = 0;
            }
          } 
Previous.addEventListener("click",PlayerPrev);




const SelectionByClick = document.querySelectorAll("#DashImg>div");
console.log(SelectionByClick);
for (let i = 0; i < SelectionByClick.length; i++) {
  const element = SelectionByClick[i];
 console.log(element.classList);
  
  element.addEventListener("click",function() {
    SelectionByClick.forEach(element => {
      element.classList.remove("border");
      element.classList.add("opacity");
    });
    
     DashItems[i].classList.remove("opacity");
     DashItems[i].classList.add("border");
    document.querySelector(".Mainimg img").src = images[i].image;
    document.querySelector("h3").innerHTML = images[i].title;
    document.querySelector("p").innerHTML = images[i].text;
    console.log(i);
     index = i;
     console.log(index);
  })
};
