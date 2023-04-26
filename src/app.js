/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = () => {
  ///////////////////////////////////////////////////////
  let cartas = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let allCartas = Math.floor(Math.random() * cartas.length);

  ////////////////////////////////////////////////////////
  let pintas = ["♦", "♥", "♠", "♣"];
  let allPintas = Math.floor(Math.random() * pintas.length);

  /////////////////////////////////////////////////////////

  let result = () => {
    return cartas[allCartas];
  };

  let result2 = () => {
    return pintas[allPintas];
  };

  document.querySelector("#uno").innerHTML = result();
  document.querySelector("#dos").innerHTML = result2();
  document.querySelector("#tres").innerHTML = result2();

  let h1 = document.querySelector("#dos");
  console.log(h1.textContent);

  if (h1.textContent == "♦" || h1.textContent == "♥") {
    h1.style.color = "red";
    console.log("holaaaaaa");
  } else {
    h1.style.color = "black";
  }

  let h12 = document.querySelector("#tres");
  console.log(h12.textContent);

  if (h12.textContent == "♦" || h12.textContent == "♥") {
    h12.style.color = "red";
  } else {
    h12.style.color = "black";
  }

  let refresh = document.getElementById("refresh");
  refresh.addEventListener("click", _ => {
    location.reload();
  });

  setInterval("location.reload()", 10000);
};
