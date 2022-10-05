


//  Main index file 

// containers
const numOneContainer = document.getElementById("num1");
const numTwoContainer = document.getElementById("num2");
const numThreeContainer = document.getElementById("num3");
const numFourContainer = document.getElementById("num4");
const numFiveContainer = document.getElementById("num5");
const numContainerArray = [numOneContainer, numTwoContainer, numThreeContainer, numFourContainer, numFiveContainer]

// nums

const numOne = document.getElementById("num-txt-1");
const numTwo = document.getElementById("num-txt-2");
const numThree = document.getElementById("num-txt-3");
const numFour = document.getElementById("num-txt-4");
const numFive = document.getElementById("num-txt-5");

numOneContainer.addEventListener("click", function() {
  // turn on orange
  this.style.backgroundColor = "hsl(25, 97%, 53%)";
  numOne.style.color = "white";
  localStorage.setItem("selectionOne", "1");

  // turn off orange
  numTwoContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numTwo.style.color = "hsl(217, 12%, 63%)";
  numThreeContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numThree.style.color = "hsl(217, 12%, 63%)";
  numFourContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numFour.style.color = "hsl(217, 12%, 63%)";
  numFiveContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numFive.style.color = "hsl(217, 12%, 63%)";
})

numTwoContainer.addEventListener("click", function() {
  // turn on orange
  this.style.backgroundColor = "hsl(25, 97%, 53%)";
  numTwo.style.color = "white";
  localStorage.setItem("selectionTwo", "2");

  // turn off orange
  numOneContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numOne.style.color = "hsl(217, 12%, 63%)";
  numThreeContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numThree.style.color = "hsl(217, 12%, 63%)";
  numFourContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numFour.style.color = "hsl(217, 12%, 63%)";
  numFiveContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numFive.style.color = "hsl(217, 12%, 63%)";
})

numThreeContainer.addEventListener("click", function() {
  // turn on orange
  this.style.backgroundColor = "hsl(25, 97%, 53%)";
  numThree.style.color = "white";
  localStorage.setItem("selectionThree", "3");

  // turn off orange
  numTwoContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numTwo.style.color = "hsl(217, 12%, 63%)";
  numOneContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numOne.style.color = "hsl(217, 12%, 63%)";
  numFourContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numFour.style.color = "hsl(217, 12%, 63%)";
  numFiveContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numFive.style.color = "hsl(217, 12%, 63%)";
})

numFourContainer.addEventListener("click", function() {
  // turn on orange
  this.style.backgroundColor = "hsl(25, 97%, 53%)";
  numFour.style.color = "white";
  localStorage.setItem("selectionFour", "4");

  // turn off orange
  numTwoContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numTwo.style.color = "hsl(217, 12%, 63%)";
  numThreeContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numThree.style.color = "hsl(217, 12%, 63%)";
  numOneContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numOne.style.color = "hsl(217, 12%, 63%)";
  numFiveContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numFive.style.color = "hsl(217, 12%, 63%)";
})

numFiveContainer.addEventListener("click", function() {
  // turn on orange
  this.style.backgroundColor = "hsl(25, 97%, 53%)";
  numFive.style.color = "white";
  localStorage.setItem("selectionFive", "5");

  // turn off orange
  numTwoContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numTwo.style.color = "hsl(217, 12%, 63%)";
  numThreeContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numThree.style.color = "hsl(217, 12%, 63%)";
  numFourContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numFour.style.color = "hsl(217, 12%, 63%)";
  numOneContainer.style.backgroundColor = "hsl(213, 19%, 18%)";
  numOne.style.color = "hsl(217, 12%, 63%)";
})




