//index 0 is aisle, 1 is price, 2 is quantity
var inventory = {
  'eggs': {
    'dozen': ['1A', '4.99', 4],
    'half-dozen': ['1A', '2.69', 4],
    'eighteen': ['1A', '6.99', 2],
    'location': '1A',
    'image': 'eggs.jpg'
  },

  'milk': {
    'gallon': ['1B', '2.99', 5],
    'half-gallon': ['1B', '1.59', 5],
    'pint': ['1B', '.79', 5],
    'location': '1B',
    'image': 'milk.jpg'
  },

  'cheese': {
    'cheddar': ['2A', '2.99', 10],
    'swiss': ['2A', '2.99', 10],
    'brie': ['2A', '2.99', 10],
    'bleu cheese': ['2A', '2.99', 10],
    'parmesan': ['2A', '2.99', 10],
    'location': '2A',
    'image': 'cheese.jpg'
  },

  'bread': {
    'wheat': ['2B', '3.49', 7],
    'white': ['2B', '3.49', 7],
    'french': ['2B', '3.49', 7],
    'sourdough': ['2B', '3.49', 7],
    'location': '2B',
    'image': 'bread.jpeg'
  },

  'meat': {
    'steak': ['2C', '7.99', 4],
    'lambchop': ['2C', '7.99', 4],
    'porkchop': ['2C', '7.99', 4],
    'sausage': ['2C', '7.99', 4],
    'bacon': ['2C', '7.99', 4],
    'chicken': ['2C', '7.99', 4],
    'location': '2C',
    'image': "meat.jpg"
  },

  'seafood': {
    'salmon': ['2D', '14.99', 4],
    'halibut': ['2D', '12.99', 4],
    'shrimp': ['2D', '7.99', 4],
    'oyster': ['2D', '7.99', 4],
    'location': '2D',
    'image': 'seafood.jpg'
  },

  'vegetables': {
    'carrots': ['3A', '2.79', 5],
    'tomatoes': ['3A', '2.79', 5],
    'broccoli': ['3A', '2.79', 5],
    'kale': ['3A', '2.79', 5],
    'potatoes': ['3A', '2.79', 5],
    'spinach': ['3A', '2.79', 5],
    'mushrooms': ['3A', '2.79', 5],
    'location': '3A',
    'image': 'vegetables.jpg'
  },

  'fruit': {
    'apples': ['3B', '1.49', 5],
    'oranges': ['3B', '1.49', 5],
    'bananas': ['3B', '1.49', 5],
    'lemons': ['3B', '1.49', 5],
    'limes': ['3B', '1.49', 5],
    'strawberries': ['3B', '1.49', 5],
    'raspberries': ['3B', '1.49', 5],
    'blueberries': ['3B', '1.49', 5],
    'location': '3B',
    'image': 'fruit.jpg'
  },

  'herbs': {
    'oregano': ['3C', '1.09', 0],
    'thyme': ['3C', '1.09', 0],
    'sage': ['3C', '1.09', 0],
    'cilantro': ['3C', '1.09', 0],
    'dill': ['3C', '1.09', 0],
    'parsley': ['3C', '1.09', 0],
    'location': '3C',
    'image': 'herbs.jpg'
  },

  'bulk': {
    'granola': ['4A', '.49', 25],
    'beans': ['4A', '.49', 25],
    'snackeroos': ['4A', '.49', 25],
    'rice': ['4A', '.49', 25],
    'chocolate chips': ['4A', '.49', 25],
    'location': '4A',
    'image': 'bulk.jpg'
  },

  'candy': {
    'dark chocolate': ['4B', '3.99', 17],
    'milk chocolate': ['4B', '3.99', 17],
    'swedish fish': ['4B', '3.99', 17],
    'gummie bears': ['4B', '3.99', 17],
    'decadence decadence': ['4B', '3.99', 17],
    'kinder bueno': ['4B', '3.99', 17],
    'location': '4B',
    'image': 'candy.jpg'
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

  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault()

    var input = document.getElementById('name')
    setName(input.value)
    renderName()
  })
}

function setName(name) {
  localStorage.setItem("name", name)
}

function renderName() {
  var username = localStorage.getItem("name")
  var user = document.getElementById("user")
  user.innerHTML = username
  $(document).ready(function() {
    $("input").attr("autocomplete", "off");
  });
  myList()
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
  for (var i = 0; i < groceryReturn.length - 2; i++) {
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

  if (event.target.parentNode.childElementCount === 1) {
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

}



function addToMyList(event) {
  event.preventDefault()

  if (localStorage.length === 1 && document.querySelector("#done") === null) {
    let insertionPoint = document.querySelector("#go")
    let doneButton = document.createElement("button")
    doneButton.classList.add("btn-primary")
    doneButton.id = "done"
    doneButton.innerHTML = "Done"
    doneButton.addEventListener("click", createMap)
    insertionPoint.parentNode.appendChild(doneButton)
  }
  var item = document.querySelector("#search").value
  // console.log(event.currentTarget, "current", event.target, "target");
  // target = event.target
  var quantity = event.currentTarget.parentNode.childNodes[1].value
  // var upALevel = event.currentTarget.parentNode
  // var choice = $(event.target).parent().siblings(".col")
  // console.log(upALevel, "/", choice, "parent/choice");
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
  itemButton.id = item


  let currentValue;
  var showQuantity = function(event) {
    currentValue = itemButton.textContent
    itemButton.textContent = quantity
  }
  var showItem = function(event) {
    itemButton.textContent = currentValue
  }
  var plusOne = function(event) {
    var item = event.target.id
    var choice = $(event.target).siblings(".remove")[0].id
    quantity = Number(quantity) + 1
    itemButton.textContent = quantity
    values = JSON.parse(localStorage.getItem(item))
    console.log(values, "values gotten");
    values[choice] = quantity
    localStorage.setItem(item, JSON.stringify(values))
    console.log(localStorage);
  }

  var removeItem = function(event) {
    var clicked = event.target
    clicked.parentNode.remove()
    var choice = clicked.id
    var item = $(this).siblings(clicked)[0].id
    console.log(item, choice, "clicked")
    let values = JSON.parse(localStorage.getItem(item))
    console.log(values, "values gotten");
    delete values[choice]
    console.log(values, "values modified");
    if (Object.keys(values).length === 0) {
      localStorage.removeItem(item)
      console.log("object is empty removing value");
    } else {
      localStorage.setItem(item, JSON.stringify(values))
    }
    console.log(localStorage, "localStorage updated");
  }

  itemButton.addEventListener("mouseover", showQuantity)
  itemButton.addEventListener("mouseleave", showItem)
  itemButton.addEventListener("click", plusOne)

  var listItem;
  console.log(choice);
  if (choice === "dozen" || choice === "half-dozen" || choice === "eighteen") {
    listItem = "eggs, " + choice
    // console.log("why are we in here");
  } else if (choice === "gallon" || choice === "half-gallon" || choice === "pint") {
    listItem = "milk, " + choice
  } else if (choice === "white" || choice === "wheat" || choice === "french" || choice === "sourdough") {
    listItem = choice + " bread"
  } else {
    listItem = choice
  }

  if (!document.getElementById(choice)) {
    itemButton.textContent = listItem
    var removeButton = document.createElement("button")
    removeButton.classList.add("remove")
    removeButton.classList.add("btn-primary")
    removeButton.textContent = "X"
    removeButton.id = choice
    removeButton.addEventListener("click", removeItem)
    div.append(itemButton)
    div.append(removeButton)
    insertionPoint.appendChild(div)
  }

event.target.parentNode.remove()
}





function clearForm() {
  var insertionPoint = document.getElementById("options")
  insertionPoint.innerHTML = ""
  document.getElementById("search").value = ""
}

function createMap() {
  clearForm()
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
      map.append(divpixel);
    }, 2 * i)
  }

  setTimeout(fillMap1, 2500);
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
  textbox = document.getElementsByClassName("divpixels")[101]
  textbox.id = "1B"
  // textbox.addEventListener("click", popupWindow)

  textbox = document.getElementsByClassName("divpixels")[579]
  textbox.append("1A")
  textbox = document.getElementsByClassName("divpixels")[581]
  textbox.id = "1A"
  // textbox.addEventListener("click", popupWindow)

  setTimeout(fillText2, 500)
}

let fillText2 = function(event) {
  let textbox = document.getElementsByClassName("divpixels")[152]
  textbox.append("2A")
  textbox = document.getElementsByClassName("divpixels")[154]
  textbox.id = "2A"
  // textbox.addEventListener("click", popupWindow)

  textbox = document.getElementsByClassName("divpixels")[332]
  textbox.append('2B')
  textbox = document.getElementsByClassName("divpixels")[334]
  textbox.id = "2B"
  // textbox.addEventListener("click", popupWindow)

  textbox = document.getElementsByClassName("divpixels")[512]
  textbox.append('2C')
  textbox = document.getElementsByClassName("divpixels")[514]
  textbox.id = "2C"
  // textbox.addEventListener("click", popupWindow)

  textbox = document.getElementsByClassName("divpixels")[692]
  textbox.append('2D')
  textbox = document.getElementsByClassName("divpixels")[694]
  textbox.id = "2D"
  // textbox.addEventListener("click", popupWindow)

  setTimeout(fillText3, 500)
}

let fillText3 = function(event) {
  let textbox = document.getElementsByClassName("divpixels")[115]
  textbox.append("3A")
  textbox = document.getElementsByClassName("divpixels")[117]
  textbox.id = "3A"
  // textbox.addEventListener("click", popupWindow)

  textbox = document.getElementsByClassName("divpixels")[385]
  textbox.append('3B')
  textbox = document.getElementsByClassName("divpixels")[387]
  textbox.id = "3B"
  // textbox.addEventListener("click", popupWindow)

  textbox = document.getElementsByClassName("divpixels")[715]
  textbox.append('3C')
  textbox = document.getElementsByClassName("divpixels")[717]
  textbox.id = "3C"
  // textbox.addEventListener("click", popupWindow)

  setTimeout(fillText4, 500)
}

let fillText4 = function(event) {
  let textbox = document.getElementsByClassName("divpixels")[107]
  textbox.append("4A")
  textbox = document.getElementsByClassName("divpixels")[109]
  textbox.id = "4A"
  // textbox.addEventListener("click", popupWindow)

  textbox = document.getElementsByClassName("divpixels")[557]
  textbox.append('4B')
  textbox = document.getElementsByClassName("divpixels")[559]
  textbox.id = "4B"
  // textbox.addEventListener("click", popupWindow)
  setTimeout(changeBorder, 800)
  setTimeout(populateMapLocations, 1500)
}

let populateMapLocations = function(event) {
  let yourLocation = document.getElementsByClassName("divpixels")[854]
  yourLocation.addEventListener("mouseover", popupWindow)
  yourLocation.addEventListener("mouseleave", closeWindow)
  let imgDiv = document.createElement("div")
  let image = document.createElement('img')
  let popupDiv = document.createElement("div")
  let popupImg = document.createElement('img')
  popupDiv.classList.add("popupyou")
  popupImg.setAttribute("src", "you.png")
  popupDiv.innerHTML = "You Are Here"
  popupDiv.appendChild(popupImg)
  //popupDiv.id = "myPopup"
  yourLocation.appendChild(popupDiv)
  image.setAttribute("src", "pulse_dot.gif")
  imgDiv.append(image)
  yourLocation.appendChild(imgDiv)

  var removeItem = function(event) {
    event.target.remove()
    // var choice = clicked.id
    // var item = $(this).siblings(clicked)[0].id
    // console.log(item, choice, "clicked")
    // let values = JSON.parse(localStorage.getItem(item))
    // console.log(values, "values gotten");
    // delete values[choice]
    // console.log(values, "values modified");
    // if (Object.keys(values).length === 0) {
    //   localStorage.removeItem(item)
    //   console.log("object is empty removing value");
    // } else {
    //   localStorage.setItem(item, JSON.stringify(values))
    // }
    // console.log(localStorage, "localStorage updated");
  }

  var itemLocations = function() {
    let list = Object.keys(localStorage)
    let itemLocation;
    console.log(list, "localStorage list")
    for (var key in inventory) {
      for (var i = 0; i < list.length; i++) {
        if (key === list[i]) {
          itemLocation = inventory[key]['location']
          console.log(itemLocation, "aisle");
          let insertionPoint = document.getElementById(itemLocation)
          insertionPoint.addEventListener("mouseover", popupWindow)
          insertionPoint.addEventListener("mouseleave", closeWindow)
          let imgDiv = document.createElement("div")
          let image = document.createElement('img')
          let popupDiv = document.createElement("div")
          let popupImg = document.createElement('img')
          popupImg.classList.add("popup-img")
          let imgSource = inventory[key]['image']
          popupImg.setAttribute("src", imgSource)
          popupDiv.innerHTML = key
          popupDiv.appendChild(popupImg)
          popupDiv.classList.add("popuptext")
          popupDiv.classList.add("tooltip__content")
          let parsedObject = JSON.parse(localStorage.getItem(key))
          let listArray = Object.keys(parsedObject)
          let itemQty;

          console.log(parsedObject);
          console.log(listArray);
          for (var j = 0; j < listArray.length; j++) {
            console.log(j);
            itemQty = parsedObject[listArray[j]]
            console.log(itemQty);
            let button = document.createElement("button")
            button.classList.add("btn-popup")
            button.addEventListener("click", removeItem)
            // button.addEventListener("mouseover", gotIt)
            // button.addEventListener("mouseleave", showIt)
            button.textContent = itemQty + " " + listArray[j]
            popupDiv.appendChild(button)
          }
          image.setAttribute("src", "pulse_dot.gif")
          imgDiv.append(image)
          insertionPoint.append(popupDiv)
          insertionPoint.appendChild(imgDiv)


        }
      }
    }
  }

  setTimeout(itemLocations, 700)
// var currentName;
//   var gotIt = function(event) {
//     currentName = event.target.textContent
//     event.target.textContent = "Got it"
//   }
//   var showIt = function(event) {
//     event.target.textContent = currentName
//   }

  // let itemLocation = document.getElementsByClassName("divpixels")[101]
  // itemLocation.addEventListener("mouseover", popupWindow)
  // itemLocation.addEventListener("mouseleave", closeWindow)
  // let imgDiv = document.createElement("div")
  // let image = document.createElement('img')
  // let popupDiv = document.createElement("div")
  // let popupImg = document.createElement('img')
  // popupImg.classList.add("popup-img")
  // popupImg.setAttribute("src", "eggs.jpg")
  // popupDiv.innerHTML = "Eggs"
  // popupDiv.append(popupImg)
  // popupDiv.classList.add("popuptext")
  // popupDiv.classList.add("tooltip__content")
  // //popupDiv.id = "myPopup"
  // itemLocation.appendChild(popupDiv)
  // image.setAttribute("src", "pulse_dot.gif")
  // imgDiv.append(image)
  // itemLocation.appendChild(imgDiv)


}

let closeWindow = function(event) {
  console.log("mouseleave");
  event.currentTarget.childNodes[0].classList.remove("show")
}

let popupWindow = function(event) {
  console.log("mouseenter")

  event.currentTarget.childNodes[0].classList.add("show")
}
