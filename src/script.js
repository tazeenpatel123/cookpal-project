// -------------  for Menu Button or Mobile nav --------

let menuBtn = document.querySelector(".menu__icon");
let mobileNav = document.querySelector(".Mobile__nav");

mobileNav.style.transition = "all 0.5s ease";

let isNavOpen = false;

menuBtn.addEventListener("click", () => {

    if(isNavOpen === false){
        mobileNav.style.display = "block";
        isNavOpen = true
    } else if(isNavOpen === true){
        mobileNav.style.display = "none";
        isNavOpen = false
    }
})

// -------------  for Menu Button or Mobile nav end--------




// -----------------------All Veg Non Veg Filtering js start --------------



// Json info

let recipes = [
    {
        "name": "Russian Salad",
        "imageSrc": "assets/rounded (2).png",
        "time": "40 min",
        "type": "veg",
        "isLiked": true,
        "rating": 4.2
    },
    {
        "name": "Russian Salad",
        "imageSrc": "assets/rounded (2).png",
        "time": "40 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Russian Salad",
        "imageSrc": "assets/rounded (4).png",
        "time": "40 min",
        "type": "veg",
        "isLiked": true,
        "rating": 4.1
    },
    {
        "name":"Russian Salad",
        "imageSrc": "assets/rounded (4).png",
        "time": "40 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Russian Salad",
        "imageSrc": "assets/rounded (2).png",
        "time": "40 min",
        "type": "non-veg",
        "isLiked": true,
        "rating": 4.6
    },
    {
        "name": "Russian Salad",
        "imageSrc": "assets/rounded (2).png",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Russian Salad",
        "imageSrc": "assets/rounded (2).png",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Russian Salad",
        "imageSrc": "assets/rounded (3).png",
        "time": "40 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Russian Salad",
        "imageSrc": "assets/rounded (5).png",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Russian Salad",
        "imageSrc": "assets/rounded (4).png",
        "time": "40 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Russian Salad",
        "imageSrc": "assets/rounded (4).png",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "Russian Salads",
        "imageSrc": "assets/rounded (4).png",
        "time": "40 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Russian Salad",
        "imageSrc": "assets/rounded (4).png",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Russian Salad",
        "imageSrc": "assets/rounded (4).png",
        "time": "40 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Russian Salad",
        "imageSrc": "assets/rounded (4).png",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]

// ------------------ Removing Mobnav if someone clicked on the Nav link -------------------------


let homeN = document.querySelector("#HomeNav");
let exploreN = document.querySelector("#ExploreNav");
let helpN = document.querySelector("#HelpNav");
let mobNav = document.querySelector(".Mobile__nav");

homeN.addEventListener("click", () => {
    mobNav.style.display = "none";
})

exploreN.addEventListener("click", () => {
    mobNav.style.display = "none";
})


helpN.addEventListener("click", () => {
    mobNav.style.display = "none";
})





// ------------------ Removing Mobnav if someone clicked on the Nav link -------------------------



// ------------- For Search --------

function displaySearch(){
    let searchTerm = document.querySelector("#search_input").value;
    
    // Removing the other cards first
    cardDiv.innerHTML = "";

   let searchElementsList = recipes.filter((e) => {
        if (e.name.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1) {
            return e;
        } 
    })

    console.log(searchElementsList);

    if (searchElementsList.length == 0) {
        // Removing the other cards first
        cardDiv.innerHTML = "";
        cardDiv.innerHTML = `<h1>Please, Check your recipe name..</h1>`  
    } else {
        // Removing the other cards first
        cardDiv.innerHTML = "";
        searchElementsList.forEach( (e) => {
            let cardElement = document.createElement("div");
            cardElement.classList = "card"
            cardElement.innerHTML = `
            <img src="${e.imageSrc}" alt="recipe 1" />
            <div id="recipi__tag">${e.type}</div>
            <div class="card__info-first">
              <h3>${e.name}</h3>
              <div class="star_rating">
                <img src="./assets/Frame 28.png" alt="star Icon" />
                <p>${e.rating}</p>
              </div>
            </div>
            <div class="card__info-last">
              <h3>${e.time} min</h3>
              <div class="share__container">
                <img src="./assets/like.svg" class="like_img" alt="like" />
                <img src="./assets/comments.svg" alt="like" />
              </div>
            </div>`;
    
            let likeImg = cardElement.querySelector(".like_img"); 
            if (e.isLiked === true) {
            likeImg.src = "../assets/like (1).svg";
            }
    
            cardDiv.appendChild(cardElement);  
        })
    }
    
}


// ------------- For Search Ended --------

// Adding cards

let card = `
<img src="./assets/rounded.png" alt="recipe 1" />
<div id="recipi__tag">Veg</div>
<div class="card__info-first">
  <h3>Russion Salad</h3>
  <div class="star_rating">
    <img src="./assets/Frame 28.png" alt="star Icon" />
    <p>4.4</p>
  </div>
</div>
<div class="card__info-last">
  <h3>40 min</h3>
  <div class="share__container">
    <img src="./assets/like.svg" class="like_img" alt="like" />
    <img src="./assets/comments.svg" alt="like" />
  </div>
</div>`

// function for default cards

function defaultCards () {
    recipes.forEach( (e) => {
        let cardElement = document.createElement("div");
        cardElement.classList = "card"
        cardElement.innerHTML = `
        <img src="${e.imageSrc}" alt="recipe 1" />
        <div id="recipi__tag">${e.type}</div>
        <div class="card__info-first">
          <h3>${e.name}</h3>
          <div class="star_rating">
            <img src="./assets/Frame 28.png" alt="star Icon" />
            <p>${e.rating}</p>
          </div>
        </div>
        <div class="card__info-last">
          <h3>${e.time} min</h3>
          <div class="share__container">
            <img src="./assets/like.svg" class="like_img" alt="like" />
            <img src="./assets/comments.svg" alt="like" />
          </div>
        </div>`;
        
        let likeImg = cardElement.querySelector(".like_img"); 
        if (e.isLiked === true) {
        likeImg.src = "../assets/like (1).svg";
        }
        cardDiv.appendChild(cardElement);  
    })
}


let cardDiv = document.querySelector(".recipe__recipe-grid");

let firstFilterBtn = document.querySelector(".hero__first");
let secondFilterBtn = document.querySelector(".hero__second");
let thirdFilterBtn = document.querySelector(".hero__third");

// calling all the recipes on load


window.addEventListener('load', (event) => {
    defaultCards();
});

// Js for styling all recipes button
firstFilterBtn.addEventListener("click", () => {
    // Removing the other cards first
    cardDiv.innerHTML = "";
   defaultCards();
})

// Js for styling all veg recipes button
secondFilterBtn.addEventListener("click", () => {
    // Removing the other cards first
    cardDiv.innerHTML = "";

    let vegRecipes = recipes.filter((k) => {
        if (k.type == "veg") {
            return k;
        }
    })


    vegRecipes.forEach( (e) => {
        let cardElement = document.createElement("div");
        cardElement.classList = "card"
        cardElement.innerHTML = `
        <img src="${e.imageSrc}" alt="recipe 1" />
        <div id="recipi__tag">${e.type}</div>
        <div class="card__info-first">
          <h3>${e.name}</h3>
          <div class="star_rating">
            <img src="./assets/Frame 28.png" alt="star Icon" />
            <p>${e.rating}</p>
          </div>
        </div>
        <div class="card__info-last">
          <h3>${e.time} min</h3>
          <div class="share__container">
            <img src="./assets/like.svg" class="like_img" alt="like" />
            <img src="./assets/comments.svg" alt="like" />
          </div>
        </div>`;

        let likeImg = cardElement.querySelector(".like_img"); 
        if (e.isLiked === true) {
        likeImg.src = "../assets/like (1).svg";
        }

        cardDiv.appendChild(cardElement);  
    })
})


// Js for filtering all non veg recipes button
thirdFilterBtn.addEventListener("click", () => {
    // Removing the other cards first
    cardDiv.innerHTML = "";

    let nonvegRecipes = recipes.filter((k) => {
        if (k.type == "non-veg") {
            return k;
        }
    })


    nonvegRecipes.forEach( (e) => {
        let cardElement = document.createElement("div");
        cardElement.classList = "card"
        cardElement.innerHTML = `
        <img src="${e.imageSrc}" alt="recipe 1" />
        <div id="recipi__tag">${e.type}</div>
        <div class="card__info-first">
          <h3>${e.name}</h3>
          <div class="star_rating">
            <img src="./assets/Frame 28.png" alt="star Icon" />
            <p>${e.rating}</p>
          </div>
        </div>
        <div class="card__info-last">
          <h3>${e.time} min</h3>
          <div class="share__container">
            <img src="./assets/like.svg" class="like_img" alt="like" />
            <img src="./assets/comments.svg" alt="like" />
          </div>
        </div>`;

        let likeImg = cardElement.querySelector(".like_img"); 
        if (e.isLiked === true) {
        likeImg.src = "../assets/like (1).svg";
        }

        cardDiv.appendChild(cardElement);  
    })
})

// -----------------------All Veg Non Veg Filtering js End --------------


// -----------------------Checkbox Filtering for Rating in js started --------------


let fourAbove = document.querySelector("#four_above");

fourAbove.addEventListener("change", function () {
    // Removing the other cards first
    cardDiv.innerHTML = "";
    
    if(this.checked){
        let aboveFourRating = recipes.filter((e) => {
            if (e.rating >= 4) {
                return e;
            }
        })
        
        aboveFourRating.forEach( (e) => {
            let cardElement = document.createElement("div");
            cardElement.classList = "card"
            cardElement.innerHTML = `
            <img src="${e.imageSrc}" alt="recipe 1" />
            <div id="recipi__tag">${e.type}</div>
            <div class="card__info-first">
            <h3>${e.name}</h3>
            <div class="star_rating">
            <img src="./assets/Frame 28.png" alt="star Icon" />
            <p>${e.rating}</p>
            </div>
            </div>
            <div class="card__info-last">
            <h3>${e.time} min</h3>
            <div class="share__container">
            <img src="./assets/like.svg" a class="like_img"lt="like" />
            <img src="./assets/comments.svg" alt="like" />
            </div>
            </div>`;

            let likeImg = cardElement.querySelector(".like_img"); 
            if (e.isLiked === true) {
            likeImg.src = "../assets/like (1).svg";
            }
            cardDiv.appendChild(cardElement);  
        })
    } else {
        cardDiv.innerHTML = "";
        defaultCards();
    }
})

let fourBelow = document.querySelector("#four_below");


fourBelow.addEventListener("change", function () {
    // Removing the other cards first

if(this.checked){
    cardDiv.innerHTML = "";
    let belowFourRating = recipes.filter((e) => {
        if (e.rating < 4) {
            return e;
        }
    })
    console.log(belowFourRating);

    belowFourRating.forEach( (e) => {
        let cardElement = document.createElement("div");
        cardElement.classList = "card"
        cardElement.innerHTML = `
        <img src="${e.imageSrc}" alt="recipe 1" />
        <div id="recipi__tag">${e.type}</div>
        <div class="card__info-first">
          <h3>${e.name}</h3>
          <div class="star_rating">
            <img src="./assets/Frame 28.png" alt="star Icon" />
            <p>${e.rating}</p>
          </div>
        </div>
        <div class="card__info-last">
          <h3>${e.time} min</h3>
          <div class="share__container">
            <img src="./assets/like.svg" class="like_img" alt="like" />
            <img src="./assets/comments.svg" alt="like" />
          </div>
        </div>`;

        let likeImg = cardElement.querySelector(".like_img"); 
        if (e.isLiked === true) {
        likeImg.src = "../assets/like (1).svg";
        }

        cardDiv.appendChild(cardElement);  
    })
} else {
    cardDiv.innerHTML = "";
    defaultCards();
}
})


// -----------------------Checkbox Filtering for Rating in js ended --------------


