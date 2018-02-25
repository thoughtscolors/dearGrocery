//index 0 is aisle, 1 is price, 2 is quantity
var inventory = {
  'eggs': {
    'dozen': ['1A', '4.99', 4],
    'half-dozen': ['1A', '2.69', 4],
    'eighteen': ['1A', '6.99', 2]
  },

  'milk': {
    'gallon': ['1B', '2.99', 5],
    'half-gallon': ['1B', '1.59', 5],
    'pint': ['1B', '.79', 5]
  },

  'cheese': {
    'cheddar': ['2A', '2.99', 10],
    'swiss': ['2A', '2.99', 10],
    'brie': ['2A', '2.99', 10],
    'blue': ['2A', '2.99', 10],
    'parmesan': ['2A', '2.99', 10]
  },

  'bread': {
    'wheat': ['2B', '3.49', 7],
    'white': ['2B', '3.49', 7],
    'french': ['2B', '3.49', 7],
    'sourdough': ['2B', '3.49', 7]
  },

  'meat': {
    'steak': ['2C', '7.99', 4],
    'lambchop': ['2C', '7.99', 4],
    'porkchop': ['2C', '7.99', 4],
    'sausage': ['2C', '7.99', 4],
    'bacon': ['2C', '7.99', 4],
    'chicken': ['2C', '7.99', 4]
  },

  'seafood': {
    'salmon': ['2D', '14.99', 4],
    'halibut': ['2D', '12.99', 4],
    'shrimp': ['2D', '7.99', 4],
    'oyster': ['2D', '7.99', 4],
  },

  'vegetables': {
    'carrots': ['3A', '2.79', 5],
    'tomatoes': ['3A', '2.79', 5],
    'broccoli': ['3A', '2.79', 5],
    'kale': ['3A', '2.79', 5],
    'potatoes': ['3A', '2.79', 5],
    'spinach': ['3A', '2.79', 5],
    'mushrooms': ['3A', '2.79', 5]
  },

  'fruit': {
    'apples': ['3B', '1.49', 5],
    'oranges': ['3B', '1.49', 5],
    'bananas': ['3B', '1.49', 5],
    'lemons': ['3B', '1.49', 5],
    'limes': ['3B', '1.49', 5],
    'strawberries': ['3B', '1.49', 5],
    'raspberries': ['3B', '1.49', 5],
    'blueberries': ['3B', '1.49', 5]
  },

  'herbs': {
    'oregano': ['3C', '1.09', 0],
    'thyme': ['3C', '1.09', 0],
    'sage': ['3C', '1.09', 0],
    'cilantro': ['3C', '1.09', 0],
    'dill': ['3C', '1.09', 0],
    'parsley': ['3C', '1.09', 0]
  },

  'bulk': {
    'granola': ['4A', '.49', 25],
    'beans': ['4A', '.49', 25],
    'snackeroos': ['4A', '.49', 25],
    'rice': ['4A', '.49', 25],
    'chocolate chips': ['4A', '.49', 25]
  },

  'candy': {
    'dark chocolate': ['4B', '3.99', 17],
    'milk chocolate': ['4B', '3.99', 17],
    'swedish fish': ['4B', '3.99', 17],
    'gummie bears': ['4B', '3.99', 17],
    'decadence decadence': ['4B', '3.99', 17],
    'kinder bueno': ['4B', '3.99', 17]
  }
};

document.addEventListener('DOMContentLoaded', function() {
  console.log("we have started");
  started();
});

function started(event) {
  $(document).ready(function() {
    $("input").attr("autocomplete", "off");
  });

  localStorage.clear()
  console.log(localStorage);
  // var divpixel = document.createElement("div");
  // divpixel.classList.add("divpixels");
  // divpixel.classList.add("popup")
  // divpixel.addEventListener("click", popupWindow)
  // divpixel.innerHTML = "<img src=\"giphy.gif\" width=\"100px\" height=\"100px\">"
  // let popupDiv = document.createElement("div")
  // popupDiv.innerHTML = "Hey"
  // popupDiv.classList.add("popuptext")
  // //popupDiv.id = "myPopup"
  // divpixel.appendChild(popupDiv)
  // let testdiv = document.getElementById("testdiv")
  // testdiv.append(divpixel)

  console.log("loaded");

  // document.getElementById('myForm').addEventListener('submit', function(event) {
  //   event.preventDefault()
  //
  //   var input = document.getElementById('name')
  //   setName(input.value)
  //   renderName()
  myList()
  // createMap()
  // })
}

function setName(name) {
  localStorage.setItem("name", name)
}

function renderName() {
  var username = localStorage.getItem("name")
  var user = document.getElementById("user")
  user.innerHTML = username
}

function myList() {

  var insertionPoint = document.getElementsByClassName("main-container")[0]
  insertionPoint.style.display = "flex"
  var container = document.createElement("div")
  container.classList.add("row")
  var form = document.getElementById("myForm")
  insertionPoint.removeChild(form)
  document.querySelector("#title").innerHTML = "Add to your shopping list"
  var div = document.createElement("div")
  div.classList.add("col")
  var listForm = document.createElement("form")
  var newInput = document.createElement('input');
  var label = document.createElement('label')
  var submit = document.createElement('button')
  submit.type = "submit"
  submit.textContent = "Go"
  submit.id = "go"
  submit.classList.add("btn-primary")
  submit.addEventListener("click", searchInventory)
  label.innerHTML = "Search items "
  newInput.setAttribute('name', 'search');
  newInput.id = "search"
  listForm.classList.add("list")
  listForm.appendChild(label)
  listForm.appendChild(newInput)
  listForm.appendChild(submit)
  div.appendChild(listForm)
  container.appendChild(div)
  insertionPoint.appendChild(container)
  document.querySelector('.list').addEventListener('submit', function(event) {
    event.preventDefault()
  })
  addListDiv()
  // browseDiv()
}

// function browseDiv() {
//   var insertionPoint = document.querySelector(".main-container")
//   var buttonDiv = document.createElement("div")
//   buttonDiv.classList.add("button-div")
//   var categories = Object.keys(inventory)
//   console.log(categories);
//   for (var i = 0; i < categories.length; i++) {
//     var div = document.createElement("div")
//     div.classList.add("col")
//     choiceButton = document.createElement("button")
//     choiceButton.classList.add("btn-primary")
//     choiceButton.addEventListener("click", quantityForm)
//     choiceButton.innerHTML = categories[i]
//     div.append(choiceButton)
//     buttonDiv.append(div)
//   }
//   insertionPoint.append(buttonDiv)
// }

function addListDiv() {
  var insertionPoint = document.getElementsByClassName("main-container")[0]
  var div = document.createElement("div")
  console.log(div, insertionPoint)
  div.classList.add("myList")
  div.innerHTML = "My List"
  insertionPoint.prepend(div)
}

var groceryReturn = [];
var grocerySearch;

function searchInventory() {
  var currentSearch = document.querySelector(".button-div")
  if (currentSearch !== null) {
    console.log("if statement");
    console.log(currentSearch.parentNode.removeChild(currentSearch))
  }
  grocerySearch = document.querySelector("#search").value
  var insertionPoint = document.querySelector(".main-container")
  if (inventory[grocerySearch] === undefined) {
    var buttonDiv = document.createElement("div")
    buttonDiv.classList.add("button-div")
    buttonDiv.innerHTML = "Try 'candy' - duh"
    insertionPoint.append(buttonDiv)
  } else {
    groceryReturn = Object.keys(inventory[grocerySearch])
    groceryReturn = options(groceryReturn)
    console.log(groceryReturn)
    groceryReturn.id = "options"

    // var optionsList = document.querySelector("#options")
    // if (options !== null) {
    //   insertionPoint.removeChild()
    // }
    insertionPoint.append(groceryReturn);
  }
}

function options() {
  var buttonDiv = document.createElement("div")
  buttonDiv.classList.add("button-div")
  for (var i = 0; i < groceryReturn.length; i++) {
    var div = document.createElement("div")
    div.classList.add("col")
    choiceButton = document.createElement("button")
    choiceButton.classList.add("btn-primary")
    choiceButton.addEventListener("click", quantityForm)
    choiceButton.innerHTML = groceryReturn[i]
    div.append(choiceButton)
    buttonDiv.append(div)
  }
  return buttonDiv
}

var choice;
// var ite  m;

function quantityForm() {
  item = document.querySelector("#search").value
  choice = event.target.innerHTML
  var insertionPoint = event.target.parentNode
  var aisle = inventory[item][choice][0]
  var price = Number(inventory[item][choice][1])
  var qtyForm = document.createElement("form")
  var newInput = document.createElement('input');
  var label = document.createElement('label')
  var submit = document.createElement('button')
  var div = document.createElement("div")
  submit.textContent = "Add"
  submit.classList.add("btn-primary")
  submit.classList.add("add")
  submit.addEventListener("click", addToMyList)
  label.innerHTML = "Quantity "
  newInput.setAttribute('type', 'number');
  newInput.setAttribute("min", "1")
  newInput.setAttribute("value", "1")
  newInput.classList.add('quantity')
  qtyForm.classList.add("list")
  qtyForm.appendChild(label)
  qtyForm.appendChild(newInput)
  qtyForm.appendChild(submit)
  div.appendChild(qtyForm)
  insertionPoint.appendChild(div)
}



function addToMyList(event) {
  event.preventDefault()

  if (localStorage.length === 0) {
    let insertionPoint = document.querySelector("#go")
    let doneButton = document.createElement("button")
    doneButton.classList.add("btn-primary")
    doneButton.innerHTML = "Done"
    doneButton.addEventListener("click", createMap)
    insertionPoint.parentNode.appendChild(doneButton)
  }
  var item = document.querySelector("#search").value
  var quantity = document.querySelector(".quantity").value
  var values = {}
  values[choice] = quantity
  if (localStorage.getItem(item)) {
    values = JSON.parse(localStorage.getItem(item))
    console.log(values, "values gotten");
    values[choice] = quantity
  }

  localStorage.setItem(item, JSON.stringify(values))
  console.log(localStorage);

  var insertionPoint = document.querySelector(".myList")
  var item = document.querySelector("#search").value
  var div = document.createElement("div")
  div.classList.add("listRow")
  var itemButton = document.createElement("button")
  itemButton.classList.add("btn-primary")
  itemButton.classList.add("item")

  let currentValue;
var showQuantity = function (event) {
  currentValue = itemButton.textContent
  itemButton.textContent = quantity
}
var showItem = function (event) {
  itemButton.textContent = currentValue
}

itemButton.addEventListener("mouseover", showQuantity)
itemButton.addEventListener("mouseleave", showItem)

  var listItem;
  console.log(choice);
  if (choice === "dozen" || choice === "half-dozen" || choice === "eighteen") {
    listItem = "eggs, " + choice
    // console.log("why are we in here");
  } else if (choice === "gallon" || choice === "half-gallon" || choice === "pint") {
    listItem = "milk, " + choice
  } else {
    listItem = choice
  }

  itemButton.textContent = listItem
  var removeButton = document.createElement("button")
  removeButton.classList.add("remove")
  removeButton.classList.add("btn-primary")
  removeButton.textContent = "X"
  removeButton.addEventListener("click", removeItem)
  div.append(itemButton)
  div.append(removeButton)
  insertionPoint.appendChild(div)

  clearForm()

}

function removeItem (event) {
  console.log(event.target.parentNode.remove())
}


function clearForm() {
  var insertionPoint = document.getElementById("options")
  insertionPoint.innerHTML = ""
  document.getElementById("search").value = ""
}

function createMap() {
  var insertionPoint = document.getElementsByClassName("main-container")[0]
  insertionPoint.style.display = "block"
  document.querySelector("#title").innerHTML = "Grocery Map"
  var list = document.getElementsByClassName("myList")[0]
  var input = document.getElementsByClassName("row")[0]
  insertionPoint.removeChild(input)
  insertionPoint.removeChild(list)
  insertionPoint.style.width = "660px"
  insertionPoint.style.height = "660px";
  var map = document.createElement("div")
  map.id = "map"
  insertionPoint.appendChild(map)
  for (var i = 0; i < 900; i++) {
    setTimeout(function() {
      // could be its own function called createSinglePixel
      var divpixel = document.createElement("div");
      divpixel.classList.add("divpixels");
      divpixel.classList.add("popup")

      // divpixel.innerHTML = "<img src=\"giphy.gif\" width=\"100px\" height=\"100px\">"

      map.append(divpixel);
    }, 2 * i)
  }

  setTimeout(fillMap1, 2500);
  setTimeout(changeBorder, 7000)




}

var changeBorder = function() {
  let array = document.getElementsByClassName("divpixels")
  for (var i = 0; i < array.length; i++) {
    let changepixel = array[i]
    changepixel.style.borderColor = "rgba(255,255,243,0)"
  }

}


let fillMap1 = function(event) {

  for (var i = 68; i < 637; i += 30) {
    for (var j = 0; j < 3; j++) {
      var divpixel = document.getElementsByClassName("divpixels")[i + j];
      divpixel.style.backgroundColor = "rgba(238,130,238,.8)"
      divpixel.style.borderColor = "rgba(238,130,238,.8 )"
    }
  }
  setTimeout(fillMap2, 500)
}

let fillMap2 = function(event) {

  for (var i = 84; i < 767; i += 30) {
    for (var j = 0; j < 3; j++) {
      var divpixel = document.getElementsByClassName("divpixels")[i + j];
      divpixel.style.backgroundColor = "rgba(128,0,128,.8)"
      divpixel.style.borderColor = "rgba(128,0,128,.8)"
    }
  }
  setTimeout(fillMap3, 500);
}

let fillMap3 = function(event) {

  for (var i = 76; i < 607; i += 30) {
    for (var j = 0; j < 3; j++) {
      var divpixel = document.getElementsByClassName("divpixels")[i + j];
      divpixel.style.backgroundColor = "rgba(220, 20, 60, .8)"
      divpixel.style.borderColor = "rgba(220, 20, 60, .8)"
    }
  }
  setTimeout(fillMap4, 500);
}

let fillMap4 = function(event) {

  for (var i = 121; i < 727; i += 30) {
    for (var j = 0; j < 3; j++) {
      var divpixel = document.getElementsByClassName("divpixels")[i + j];
      divpixel.style.backgroundColor = "rgba(102,51,153,.8)"
      divpixel.style.borderColor = "rgba(102,51,153,.8)"
    }
  }
  setTimeout(fillText1, 500);
}


let fillText1 = function(event) {
  let textbox = document.getElementsByClassName("divpixels")[99]
  textbox.append("1B")
  textbox.id = "1B"
  // textbox.addEventListener("click", popupWindow)

  textbox = document.getElementsByClassName("divpixels")[579]
  textbox.append("1A")
  textbox.id = "1A"
  // textbox.addEventListener("click", popupWindow)

  setTimeout(fillText2, 500)
}

let fillText2 = function(event) {
  let textbox = document.getElementsByClassName("divpixels")[152]
  textbox.append("2A")
  textbox.id = "2A"
  // textbox.addEventListener("click", popupWindow)

  textbox = document.getElementsByClassName("divpixels")[332]
  textbox.append('2B')
  textbox.id = "2B"
  // textbox.addEventListener("click", popupWindow)

  textbox = document.getElementsByClassName("divpixels")[512]
  textbox.append('2C')
  textbox.id = "2C"
  // textbox.addEventListener("click", popupWindow)

  textbox = document.getElementsByClassName("divpixels")[692]
  textbox.append('2D')
  textbox.id = "2D"
  // textbox.addEventListener("click", popupWindow)

  setTimeout(fillText3, 500)
}

let fillText3 = function(event) {
  let textbox = document.getElementsByClassName("divpixels")[115]
  textbox.append("3A")
  textbox.id = "3A"
  // textbox.addEventListener("click", popupWindow)

  textbox = document.getElementsByClassName("divpixels")[385]
  textbox.append('3B')
  textbox.id = "3B"
  // textbox.addEventListener("click", popupWindow)

  textbox = document.getElementsByClassName("divpixels")[715]
  textbox.append('3C')
  textbox.id = "3C"
  // textbox.addEventListener("click", popupWindow)

  setTimeout(fillText4, 500)
}

let fillText4 = function(event) {
  let textbox = document.getElementsByClassName("divpixels")[107]
  textbox.append("4A")
  textbox.id = "4A"
  // textbox.addEventListener("click", popupWindow)

  textbox = document.getElementsByClassName("divpixels")[557]
  textbox.append('4B')
  textbox.id = "4B"
  // textbox.addEventListener("click", popupWindow)
  setTimeout(populateMapLocations, 500)
}

let populateMapLocations = function(event) {
  let list = Object.keys(localStorage)
  console.log(list);
  // let itemType = JSON.parse(localStorage.getItem(list[3][0]))
  // console.log(itemType);
  let itemLocation = document.getElementsByClassName("divpixels")[101]
  // console.log(itemLocation);
  // let qty =
  itemLocation.addEventListener("mouseover", popupWindow)
  itemLocation.addEventListener("mouseleave", closeWindow)
  let imgDiv = document.createElement("div")
  let image = document.createElement('img')
  let popupDiv = document.createElement("div")
  let popupImg = document.createElement('img')
  popupImg.classList.add("popup-img")
  popupImg.setAttribute("src", "eggs.jpg")
  popupDiv.innerHTML = "Eggs"
  popupDiv.append(popupImg)
  popupDiv.classList.add("popuptext")
  popupDiv.classList.add("tooltip__content")
  //popupDiv.id = "myPopup"
  itemLocation.appendChild(popupDiv)
  image.setAttribute("src", "pulse_dot.gif")
  imgDiv.append(image)
  itemLocation.appendChild(imgDiv)
  for (var i = 0; i < list.length; i++) {


  }

}

let closeWindow = function(event) {
  console.log("mouseleave");
  event.currentTarget.childNodes[0].classList.remove("show")
}

let popupWindow = function(event) {
  console.log("mouseenter")

  event.currentTarget.childNodes[0].classList.add("show")
}
