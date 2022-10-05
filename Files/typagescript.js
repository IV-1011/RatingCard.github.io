// typage

const tyPageNumOne = document.getElementById("num1-typage")

const numOne = document.getElementById("num-txt-1");
const numTwo = document.getElementById("num-txt-2");
const numThree = document.getElementById("num-txt-3");
const numFour = document.getElementById("num-txt-4");
const numFive = document.getElementById("num-txt-5");

const One = localStorage.getItem("selectionOne");
const Two = localStorage.getItem("selectionTwo");
const Three = localStorage.getItem("selectionThree");
const Four = localStorage.getItem("selectionFour");
const Five = localStorage.getItem("selectionFive");


const storageArray = [One, Two, Three, Four, Five];

for (let i = 0; i < storageArray.length; i++) {
  if (storageArray[i] == null) {
    // Pass on storage option
    {};
  } else {
    tyPageNumOne.textContent = storageArray[i];
  }
}