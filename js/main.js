let compare = []; // empty array intended to get "value" of first and second click
let firstCard, secondCard; // designed for first and second click

function makeCard(){ // create 12 Cards
    let main = document.querySelector("main");
    let i = 1;

    while( i < 13 ){ // add classes to cards
        let div = document.createElement("div");
        div.classList.add("card", "m-2", "m-lg-3");

        i < 3 ? div.classList.add("demon1") :
        i >=3 && i < 5 ? div.classList.add("demon2") :
        i >=5 && i < 7 ? div.classList.add("demon3") :
        i >=7 && i < 9 ? div.classList.add("demon4"):
        i >=9 && i < 11 ? div.classList.add("demon5"): div.classList.add("demon6");

        // math.rdm de i pour style.order(div)

        i++;
        main.append(div);
    }
}



function toReveal(){ // reveal card on click
    let div = this;
    getImg(div, "demon1");
    getImg(div, "demon2");
    getImg(div, "demon3");
    getImg(div, "demon4");
    getImg(div, "demon5");
    getImg(div, "demon6");

}

function getImg(div, path){ // change the card's image when revealed

    if (div.className.includes(path)){
        div.classList.add("reveal");
        div.style.background = `url(../img/${path}.jpg)`;
        compare.push(div);

        if (compare.length === 2) { // compare the first and second card
            firstCard = compare.shift();
            secondCard = compare.shift();
            console.log(firstCard, secondCard);
            if (firstCard.className === secondCard.className){
                match(firstCard, secondCard);
            } else {
                noMatch(firstCard, secondCard);
            }
        }
    }
}


function match(firstCard, secondCard){ // if 2 cards match
    firstCard.removeEventListener("click", toReveal);
    secondCard.removeEventListener("click", toReveal);
}

function noMatch(firstCard, secondCard){ // if 2 cards not match, reattribute inherit style.
    setTimeout (function(){
        firstCard.classList.remove("reveal");
        firstCard.style.background = "url(../img/cards-hide.jpg)";
        firstCard.style.backgroundSize = "cover";
        firstCard.style.backgroundPosition = "center center";
        firstCard.style.backgroundRepeat = "no-repeat";
        secondCard.classList.remove("reveal");
        secondCard.style.background = "url(../img/cards-hide.jpg)";
        secondCard.style.backgroundSize = "cover";
        secondCard.style.backgroundPosition = "center center";
        secondCard.style.backgroundRepeat = "no-repeat";
    }, 2000)
}





window.addEventListener("load", makeCard()); // Event on loading's page                         



let cards = document.getElementsByClassName("card");

for (let card of cards){
    card.addEventListener("click", toReveal); 

}




