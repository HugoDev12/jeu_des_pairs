let compare = []; // empty array intended to get "value" of first and second click
let firstCard, secondCard; // designed for first and second click
let layer = document.createElement("div");
let timeLeft = 60; // timer
let timer = document.getElementById('timer');
let delay; // countdown timer


// #############################################################    Functions   ########################################### //

// ##########################################################   Create a layer   ##########################################  //

function startGame(layer){
    layer.setAttribute("id", "onload");
    layer.classList.add("layerItems");
    layer.innerHTML = 
    `<figure id="left-side"><img src="img/layer-img1.jpg" alt="demon" id="left-demon" class="layerItems"></figure>
    <figure id="right-side"><img src="img/layer-img2.jpg" alt="demon" id="right-demon" class="layerItems"></figure>  
    <section class="d-flex flex-column align-items-center justify-content-center">
    <h1 id="title">jeu des paires</h1>
    <div style="height: 55%;"></div>
    <button id="start">Jouer</button>
    </section>`;

    document.body.appendChild(layer);

    // #############################################    Layer's images position     ##################################  //
    let leftImg = document.getElementById("left-side");
    leftImg.style.left = `${((window.innerWidth - (leftImg.clientWidth)*2.90)/2)}px`;
    let rightImg = document.getElementById("right-side"); 
    rightImg.style.right = `${((window.innerWidth - (leftImg.clientWidth)*2.75)/2)}px`;



    document.getElementById("start").addEventListener("click", function(){ // ######################"start game on button's click"############################ //
        // let layerItems = document.getElementsByClassName("layerItems");
        // for(let item of layerItems){
        //     item.classList.add("drop");
        // }
        document.querySelector("body").removeChild(layer);
        delay = setInterval(countdown, 1000);
            makeCard();
            playGame();  
    })
}

// #########################################################    Adding a timer to the game / win and loss conditions  ######################################################  //  

function countdown() {
    timer.innerHTML = timeLeft + "s";
    if (timeLeft === 0){
        reStart("Temps écoulé ! vous avez perdu");
    } else timeLeft--;
}

// #############################################################    Create 12 cards     ####################################################### //

function makeCard(){
    let main = document.querySelector("main");
    let i = 1;

    while( i < 13 ){ // add classes to cards
        let div = document.createElement("div");
        div.classList.add("card", "m-3");

        div.setAttribute("data-id", i); // set data-id attribute to verify if user won't click on the same card twice

        i < 3 ? div.classList.add("demon1") : // add class demon according to jpg's images.
        i >=3 && i < 5 ? div.classList.add("demon2") :
        i >=5 && i < 7 ? div.classList.add("demon3") :
        i >=7 && i < 9 ? div.classList.add("demon4"):
        i >=9 && i < 11 ? div.classList.add("demon5"): div.classList.add("demon6");


        div.style.order = Math.floor(Math.random() * i); // display in a random order cards

        i++;
        main.append(div);
    }
}

// ###########################################################     Reveal card on click    ##################################################  //

function toReveal(){ // reveal card on click
    let i = 1
    let div = this;
    while (i < 7){
        getImg(div, "demon"+i);
        i++;
    }

    let win = [];   // #################################################    Restart when user wins  ########################################### //
    document.querySelector("main").querySelectorAll("div").forEach(div => win.push(div.className.includes("reveal")));
    !win.includes(false) && reStart("Bravo ! vous avez gagné.");

}   

// ############################################################   click Event on each cards   #################################################### //

function playGame(){ // loading cards

    let cards = document.getElementsByClassName("card");

    for (let card of cards){
        card.addEventListener("click", toReveal);
    }

}

// ##########################################################     Change the card's image when revealed   ######################################  //

function getImg(div, path){ // change the card's image when revealed

    if (div.className.includes(path)){
        div.classList.add("reveal");
        div.style.background = `url(../img/${path}.jpg)`;
        compare.push(div);

        if (compare.length === 2) { // ##########################   Compare the first and second card   ####################################### //
            firstCard = compare.shift();
            secondCard = compare.shift();
            if (firstCard.getAttribute("data-id") !== secondCard.getAttribute("data-id")  && firstCard.className === secondCard.className){ // verify if user doesn't click on the same card.
                match(firstCard, secondCard);
            } else {
                noMatch(firstCard, secondCard);
            }
        }
    }
}

// ##################################################################   Compare first and second click  ############################################### //

function match(firstCard, secondCard){ // if 2 cards match
    firstCard.removeEventListener("click", toReveal);
    secondCard.removeEventListener("click", toReveal);
}

function noMatch(firstCard, secondCard){ // if 2 cards not match, reattribute origin style.
    setTimeout (function(){

        let array = [firstCard, secondCard];
        array.forEach((div) => {
            div.classList.remove("reveal");
            div.classList.add("card");
            div.style.background = "url(../img/cards-hide.jpg)";
            div.style.backgroundSize = "cover";
            div.style.backgroundPosition = "center center";
            div.style.backgroundRepeat = "no-repeat";
        })
    }, 1500)
}

// ############################################################  Restart the game  ############################################### //

function reStart(text){
    layer.children[2].firstElementChild.textContent = text;
    layer.lastElementChild.lastElementChild.textContent = "Rejouer?";
    document.body.appendChild(layer);
    // let layerItems = document.getElementsByClassName("layerItems");
    // for(let item of layerItems){
    //     item.classList.remove("drop");
    // }
    clearInterval(delay);
    document.getElementById("start").addEventListener("click", function(){ // ###################"start game on button's click"############################ //
        document.querySelector("main").innerHTML = "";
        makeCard();
        playGame();
        timeLeft = 60;
    })
}

// #######################################################     Start of the game    ######################################################## //
startGame(layer);


