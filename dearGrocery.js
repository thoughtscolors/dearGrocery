//index 0 is aisle, 1 is price, 2 is quantity
var inventory = {
  'eggs': {
    'dozen': ['1A', '4.99', 4],
    'half-dozen': ['1A', '2.69', 4],
    'eighteen': ['1A', '6.99', 2]
  },

  'milk': {
    'gallon': ['1B', '2.99', 5],
    'half': ['1B', '1.59', 5],
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
    'carrot': ['3A', '2.79', 5],
    'tomato': ['3A', '2.79', 5],
    'broccoli': ['3A', '2.79', 5],
    'kale': ['3A', '2.79', 5],
    'potato': ['3A', '2.79', 5],
    'spinach': ['3A', '2.79', 5],
    'mushroom': ['3A', '2.79', 5]
  },

  'fruits': {
    'apple': ['3B', '1.49', 5],
    'orange': ['3B', '1.49', 5],
    'banana': ['3B', '1.49', 5],
    'lemon': ['3B', '1.49', 5],
    'lime': ['3B', '1.49', 5],
    'strawberry': ['3B', '1.49', 5],
    'raspberry': ['3B', '1.49', 5],
    'blueberry': ['3B', '1.49', 5]
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
  // var divpixel = document.createElement("div");
  // divpixel.classList.add("divpixels");
  // divpixel.classList.add("popup")
  // divpixel.addEventListener("click", popupWindow)
  // divpixel.innerHTML = "<img src=\"pulse.gif\" width=\"100px\" height=\"100px\">"
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
    buttonDiv.innerHTML = "Try Again"
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
  submit.type = "submit"
  submit.textContent = "Add"
  submit.classList.add("btn-primary")
  submit.addEventListener("click", addToMyList)
  label.innerHTML = "Quantity "
  newInput.setAttribute('type', 'number');
  newInput.classList.add('quantity')
  qtyForm.classList.add("list")
  qtyForm.appendChild(label)
  qtyForm.appendChild(newInput)
  qtyForm.appendChild(submit)
  div.appendChild(qtyForm)
  insertionPoint.appendChild(div)
  console.log(item, choice, aisle, price);

  // JSON.parse(localStorage.getItem("eggs"))

  // var addListDiv = function () {
  //   var insertionPoint = document.querySelector("body")
  //   var div = document.createElement("div")
  //   console.log(div, insertionPoint)
  //   div.classList.add("myList")
  //   div.innerHTML = "My List"
  //
  //   insertionPoint.appendChild(div)
  // }
}



function addToMyList(event) {
  event.preventDefault()
  var item = document.querySelector("#search").value
  var quantity = document.querySelector(".quantity").value

  if (localStorage.getItem(item)) {

  }
  localStorage.setItem(item, JSON.stringify([choice, quantity]))


  var insertionPoint = document.querySelector(".myList")
  var item = document.querySelector("#search").value
  var ul = document.createElement("ul")
  var li = document.createElement("li")
  console.log("addToLocalStorage>>", item, insertionPoint);
  li.innerHTML = choice + " - " + quantity
  ul.appendChild(li)
  insertionPoint.appendChild(ul)

  clearForm()
}

function clearForm() {
  var insertionPoint = document.getElementById("options")
  insertionPoint.innerHTML = ""
  document.getElementById("search").value = ""
}

function createMap() {
  var insertionPoint = document.getElementsByClassName("main-container")[0]
  var form = document.getElementById("myForm")
  insertionPoint.removeChild(form)
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
      divpixel.addEventListener("click", popupWindow)
      // divpixel.innerHTML = "<img src=\"pulse.gif\" width=\"100px\" height=\"100px\">"
      let popupDiv = document.createElement("div")
      popupDiv.innerHTML = "Hey"
      popupDiv.classList.add("popuptext")
      //popupDiv.id = "myPopup"
      divpixel.appendChild(popupDiv)
      map.append(divpixel);
    }, 2 * i)
  }

  setTimeout(fillMap, 2000);
}

let fillMap = function(event) {

  for (var i = 66; i < 607; i += 30) {
    for (var j = 0; j < 3; j++) {
      var divpixel = document.getElementsByClassName("divpixels")[i + j];
      divpixel.style.backgroundColor = "pink"
      divpixel.style.borderColor = "pink"
    }
  }
  setTimeout(fillMap2, 700)
}

let fillMap2 = function(event) {

  for (var i = 24; i < 607; i += 30) {
    for (var j = 0; j < 3; j++) {
      var divpixel = document.getElementsByClassName("divpixels")[i + j];
      divpixel.style.backgroundColor = "purple"
      divpixel.style.borderColor = "purple"
    }
  }
  setTimeout(fillText, 500);
}

let fillText = function(event) {
  let textbox = document.getElementsByClassName("divpixels")[97]
  textbox.innerHTML = "1B"

  textbox = document.getElementsByClassName("divpixels")[577]
  textbox.innerHTML = '1A'
}

let popupWindow = function(event) {
  console.log("clicked");
  var divpixel = document.querySelectorAll(".show")
  if (divpixel[0] !== undefined) {
    divpixel[0].classList.remove("show")
  }


  event.target.childNodes[0].classList.toggle("show")
}
