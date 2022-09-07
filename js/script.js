const imgCount = 3;
const dir = "images/";
const randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
const images = new Array();
(images[1] = "home0_bg.jpg"),
  (images[2] = "home1_bg.jpg"),
  (images[3] = "home2_bg.jpg"),
  (document.getElementById("home_bg").style.backgroundImage =
    "url(" + dir + images[randomCount] + ")");
document.getElementById("about-section").style.backgroundImage =
  "url(" + dir + images[randomCount] + ")";

// const imageUrl = 'https://picsum.photos/1650/1000' || '../images/home_bg.jpg'
// // const imageUrl = '../images/home_bg.jpg'
// document.getElementById('home_bg').style.backgroundImage=`url('${imageUrl}')`;

/*    Lightbox   */
document.addEventListener("click", lightboxClick);

function lightboxClick(event) {
  var elem = event.target,
    elemID = elem.getAttribute("id"),
    lightboxImg = document.getElementById("lightbox-image"),
    lightbox = document.getElementById("lightbox-overlay"),
    newImg = new Image();

  if (elem.hasAttribute("data-lightbox")) {
    event.preventDefault();

    newImg.onload = function () {
      lightboxImg.src = this.src;
    };

    lightboxImg.src = "";
    newImg.src = elem.getAttribute("data-lightbox");
    lightbox.classList.add("visible");
  }

  if (elemID == "lightbox-image" || elemID == "lightbox-overlay") {
    event.preventDefault();

    lightbox.classList.remove("visible");
  }
}

/*    Lightbox End    */

/* back to top button */
btt = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btt.className = "visible";
  } else {
    btt.className = "";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* back to top button End*/

/* Auto complete */

let targetInput = document.getElementById("search-input");
let results = document.getElementById("autocomplete-results");
let countryList = [
  "Modal",
  "Change Color Theme",
  "Meme Generator",
  "Login Form",
  "Toggle Favorite",
  "Task Tracker",
  "Dropdown",
  "Meetups",
  "Chat Bot",
  "網頁視覺",
];
let matches = [];
let resultsCursor = 0;

// countryList.addEventListener('onclick',fuction()(console.log()));

// Focus the input
// targetInput.focus();

// Add event listener for the input keydown
targetInput.addEventListener("keydown", function (event) {
  if (event.keyCode == "13") {
    event.preventDefault();
  }
});

// Add event listener for the input keyup
targetInput.addEventListener("keyup", function (event) {
  /*
   * Key codes
   *
   * Enter: 13
   * Arrow up: 38
   * Arrow down: 40
   */

  results.innerHTML = "";
  toggleResults("hide");

  if (this.value.length > 0) {
    matches = getMatches(this.value);

    if (matches.length > 0) {
      displayMatches(matches);
    }
  }

  if (results.classList.contains("visible")) {
    switch (event.keyCode) {
      case 13:
        targetInput.value = results.children[resultsCursor].innerHTML;
        toggleResults("hide");
        resultsCursor = 0;

        break;
      case 38:
        if (resultsCursor > 0) {
          resultsCursor--;

          moveCursor(resultsCursor);
        }

        break;
      case 40:
        if (resultsCursor < matches.length - 1) {
          resultsCursor++;

          moveCursor(resultsCursor);
        }

        break;
    }
  }
});

// checking if the input value matches any of the country names
function getMatches(inputText) {
  var matchList = [];

  for (var i = 0; i < countryList.length; i++) {
    if (countryList[i].toLowerCase().indexOf(inputText.toLowerCase()) != -1) {
      matchList.push(countryList[i]);
    }
  }

  return matchList;
}

// displaying autocomplete results
function displayMatches(matchList) {
  var j = 0;

  while (j < matchList.length) {
    results.innerHTML += '<li class="result">' + matchList[j] + "</li>";
    j++;
  }

  // The first child gets a class of "highlighted"
  moveCursor(resultsCursor);

  // Show the results
  toggleResults("show");
}

// moving the cursor in the results list
function moveCursor(pos) {
  for (var x = 0; x < results.children.length; x++) {
    results.children[x].classList.remove("highlighted");
  }

  results.children[pos].classList.add("highlighted");
}

// toggling the results list
function toggleResults(action) {
  if (action == "show") {
    results.classList.add("visible");
  } else if (action == "hide") {
    results.classList.remove("visible");
  }
}

/* Auto compete End*/

/* Typing Animation */

// new TypeIt("#typing_animation", {
//     // strings: "This is my string!",
//     speed: 75,
//     loop:false
//   }).go();

/* Typing Animation End*/

new TypeIt(".multipleStrings", {
  strings: [
    "Hi! 我是洪琬婷",
    "自學網頁設計正朝全端工程師方向努力中，",
    "希望能透過過去在設計領域相關的經驗，",
    "結合喜歡解決問題的個性，",
    "藉以創造良好的使用者經驗 !",
  ],
  speed: 50,
  waitUntilVisible: true,
}).go();

//send email
function sendMail(e) {
  e.preventDefault();
  console.log("hey");
}

function githubIconColor(color) {
  document.getElementById("githubIcon").style.color = color;
}

//roll in
window.onscroll = function () {
  scrollRotate();
};
function scrollRotate() {
  var tools = document.getElementById("tools");
  tools.style.transform = "rotate(45deg)";
}

//INITIALIZE AOS
AOS.init();
