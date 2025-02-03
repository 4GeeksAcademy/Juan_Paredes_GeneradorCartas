import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let arraySimbolos=["♦", "♥", "♠", "♣"];
  let randomSimbolo=arraySimbolos[Math.floor(Math.random()*arraySimbolos.length)]
  document.getElementById("simbolo11").innerHTML=randomSimbolo;
  document.getElementById("simbolo22").innerHTML=randomSimbolo;

};
