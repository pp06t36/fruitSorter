// -----------------------------------------------------------------//
  // For loop, conditional statement and textContent - Fruit shop
  // ---------------------------------------------------------------//
  
  // Create a function that puts the apples onto the appleShelf
  // and the oranges onto the orangeShelf. Use a for loop,
  // a conditional statement, and the textContent property.
  
  let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊", "🍎", "🍊", "🍎", "🍎", "🍊"]
  let appleShelf = document.getElementById("apple-shelf")
  let orangeShelf = document.getElementById("orange-shelf")
  let apples = "🍎"
  let oranges = "🍊"
  let fruitDisplay = document.getElementById("fruit-display")
  let clearShelves = document.getElementById("reset-button");

  for (let i = 0; i < fruit.length; i++) {
    fruitDisplay.textContent += fruit[i];
  }

  function sortFruit() {
    
    if (appleShelf.textContent !== "" || orangeShelf.textContent !== "") {
        return; 
    }
    
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎";
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊";
        }
    }

    fruitDisplay.textContent = "";
}

  function reset() {

    if (fruitDisplay.textContent !== "") {
        return; 
    }

    appleShelf.textContent = "";
    orangeShelf.textContent = "";
    for (let i = 0; i < fruit.length; i++) {
        fruitDisplay.textContent += fruit[i];
      }
      
  }