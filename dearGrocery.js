//index 0 is aisle:shelf, 1 is price, 2 is quantity
var inventory = {
  'eggs': {
    'dozen': ['1A:A', '4.99', 4],
    'six': ['1A:A', '2.69', 4],
    'eighteen': ['1A:A', '6.99', 2]
  },

  'milk': {
    'gallon': ['1A:B', '2.99', 5],
    'half': ['1A:B', '1.59', 5],
    'pint': ['1A:B', '.79', 5]
  },

  'cheese': {
    'cheddar': ['2A:A', '2.99', 10],
    'swiss': ['2A:A', '2.99', 10],
    'brie': ['2A:A', '2.99', 10],
    'blue': ['2A:A', '2.99', 10],
    'parmesan': ['2A:A', '2.99', 10]
  },

  'bread': {
    'wheat': ['2A:B', '3.49', 7],
    'white': ['2A:B', '3.49', 7],
    'french': ['2A:B', '3.49', 7],
    'sourdough': ['2A:B', '3.49', 7]
  },

  'meat': {
    'steak': ['2B:A', '7.99', 4],
    'lambchop': ['2B:A', '7.99', 4],
    'porkchop': ['2B:A', '7.99', 4],
    'sausage': ['2B:A', '7.99', 4],
    'bacon': ['2B:A', '7.99', 4],
    'chicken': ['2B:A', '7.99', 4]
  },

  'seafood': {
    'salmon': ['2B:B', '14.99', 4],
    'halibut': ['2B:B', '12.99', 4],
    'shrimp': ['2B:B', '7.99', 4],
    'oyster': ['2B:B', '7.99', 4],
  },

  'vegetables': {
    'carrot': ['3A:A', '2.79', 5],
    'tomato': ['3A:A', '2.79', 5],
    'broccoli': ['3A:A', '2.79', 5],
    'kale': ['3A:A', '2.79', 5],
    'potato': ['3A:A', '2.79', 5],
    'spinach': ['3A:A', '2.79', 5],
    'mushroom': ['3A:A', '2.79', 5]
  },

  'fruits': {
    'apple': ['3A:B', '1.49', 5],
    'orange': ['3A:B', '1.49', 5],
    'banana': ['3A:B', '1.49', 5],
    'lemon': ['3A:B', '1.49', 5],
    'lime': ['3A:B', '1.49', 5],
    'strawberry': ['3A:B', '1.49', 5],
    'raspberry': ['3A:B', '1.49', 5],
    'blueberry': ['3A:B', '1.49', 5]
  },

  'herbs': {
    'oregano': ['3A:C', '1.09', 0],
    'thyme': ['3A:C', '1.09', 0],
    'sage': ['3A:C', '1.09', 0],
    'cilantro': ['3A:C', '1.09', 0],
    'dill': ['3A:C', '1.09', 0],
    'parsley': ['3A:C', '1.09', 0]
  },

  'bulk': {
    'granola': ['4A:A', '.49', 25],
    'beans': ['4A:A', '.49', 25],
    'snackeroos': ['4A:A', '.49', 25],
    'rice': ['4A:A', '.49', 25],
    'chocolate chips': ['4A:A', '.49', 25]
  },

  'candy': {
    'dark chocolate': ['4A:B', '3.99', 17],
    'milk chocolate': ['4A:B', '3.99', 17],
    'swedish fish': ['4A:B', '3.99', 17],
    'gummie bears': ['4A:B', '3.99', 17],
    'decadence decadence': ['4A:B', '3.99', 17],
    'kinder bueno': ['4A:B', '3.99', 17]
  }
};

console.log(Object.keys(inventory['meat']));

document.addEventListener('DOMContentLoaded', function() {
  console.log("we have started");
  started();
});

function started() {
document.getElementById('myForm').addEventListener('submit', function(event) {
event.preventDefault()

var input = document.getElementById('name')
setName(input.value)
renderName()
createMap()
})
}

function setName(name) {
  localStorage.setItem("name", name)
}

function renderName() {
  var username = localStorage.getItem("name")
  var user = document.getElementById("user")
  user.innerHTML = username
}
var divpixel;

function createMap () {
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
      var div = document.createElement("div");
      div.classList.add("divpixels");
      // div.addEventListener("click", changeColor);
      map.append(div);
    }, 2  * i) }

  setTimeout (fillMap, 2000);
}

let fillMap = function (event) {

  for (var i = 66; i < 607; i+=30) {
      for (var j = 0; j < 3; j++) {
        var divpixel = document.getElementsByClassName("divpixels")[i + j];
        divpixel.style.backgroundColor = "pink"
        divpixel.style.borderColor = "pink"
}
}
setTimeout (fillMap2, 700)
}

let fillMap2 = function (event) {

  for (var i = 24; i < 607; i+=30) {
      for (var j = 0; j < 3; j++) {
        var divpixel = document.getElementsByClassName("divpixels")[i + j];
        divpixel.style.backgroundColor = "purple"
        divpixel.style.borderColor = "purple"
}
}
setTimeout (fillText, 500)
}

let fillText = function (event) {
  let textbox = document.getElementsByClassName("divpixels")[97]
  textbox.innerHTML = '1B'

  textbox = document.getElementsByClassName("divpixels")[577]
  textbox.innerHTML = '1A'
}
