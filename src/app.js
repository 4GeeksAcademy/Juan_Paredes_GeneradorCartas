import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  
  let arrayColores=["red","black"];
  let randomColores=arrayColores[Math.floor(Math.random()*arrayColores.length)]

  let arraySimbolos=["♦", "♥", "♠", "♣"];
  let randomSimbolo=arraySimbolos[Math.floor(Math.random()*arraySimbolos.length)]

  let color;
  if (randomSimbolo === "♠" || randomSimbolo === "♣") {
      color = "black"; 
  } else if (randomSimbolo === "♥" || randomSimbolo === "♦") {
      color = "red"; 
  }

  document.getElementById("simbolo11").innerHTML = randomSimbolo;
  document.getElementById("simbolo11").style.color = color; // Establece el color
  document.getElementById("simbolo22").innerHTML = randomSimbolo;
  document.getElementById("simbolo22").style.color = color; // Establece el color
  

  let arrayNumero=[ 2,3,4,5,6,7,8,9,"A","J","Q","K"]
  let randomNumero=arrayNumero[Math.floor(Math.random()*arrayNumero.length)]
  document.getElementById("numeroRandom").innerHTML=randomNumero;

};
