
// function animation(path){

// var style = document.createElement('style');
// style.type = 'text/css';
// style.innerHTML = `.reveal { animation : ${path} 1s linear 0s 1 normal; animation-fill-mode: both; }`;
// document.getElementsByTagName('head')[0].appendChild(style);
// }


// function changeImg(path){ // change background Img of Cards


// let keyframes = document.createElement("style");

// keyframes.innerHTML = `
//     @keyframes ${path} {
//         0% {
//             transform: rotateY(0deg);
//             background-image: url(../img/cards-hide.jpg);
//             background-size: cover;
//             background-position: center center;
//             background-repeat: no-repeat;
//         }
//         100% {
//             transform: rotateY(180deg);
//             background-image: url(../img/${path}.jpg);
//             background-size: cover;
//             background-position: center center;
//             background-repeat: no-repeat;
//         }
//     }
//     `;
//     return keyframes;
// }

// // #######################################################################################  //

// function toReveal(div, path){ // display Cards

//     // if (div.className.includes(path)){
//         div.appendChild(changeImg(path));
//         div.classList.add(animation(path));
//     // }

// }
// // ######################################################################################   //


// window.addEventListener("load", makeCard()); // Event on loading's page                         

// function makeCard(){ // create Cards
//     let main = document.querySelector("main");
//     let i = 1;

//     while( i < 13 ){
//         let div = document.createElement("div");
//         div.classList.add("card", "m-2", "m-lg-3");

//         i < 3 ? div.classList.add("demon1") :
//         i >=3 && i < 5 ? div.classList.add("demon2") :
//         i >=5 && i < 7 ? div.classList.add("demon3") :
//         i >=7 && i < 9 ? div.classList.add("demon4"):
//         i >=9 && i < 11 ? div.classList.add("demon5"): div.classList.add("demon6");

//         i++;
//         main.append(div);
//     }
// }

// // ###################################################################################  //

// let cardList = document.getElementsByClassName("card");
// for (let card in cardList){
//     cardList[card].addEventListener('click', (e) => {
//         e.stopPropagation();
//         toReveal(card, "demon1");
//     }) 

        // cardList[card].appendChild(changeImg("demon1"));
        // cardList[card].classList.add("demon2");
        // toReveal(cardList[card], "demon1");
        // toReveal(cardList[card], "demon2");
        // toReveal(cardList[card], "demon3");
        // toReveal(cardList[card], "demon4");
        // toReveal(cardList[card], "demon5");
        // toReveal(cardList[card], "demon6");
// }

// function getCard(card){
//     console.log(card);
//     toReveal(card, "demon1");

// }


        // i < 3 ? changeImg("demon1") :
        // i >=3 && i < 5 ? changeImg("demon2") :
        // i >=5 && i < 7 ? changeImg("demon3") :
        // i >=7 && i < 9 ? changeImg("demon4") :
        // i >=9 && i < 11 ? changeImg("demon5") : changeImg("demon6");

        // i < 3 ? document.styleSheets[3].cssRules[4][1].cssText.replace(/cards-hide/g, "demon1")  :
        // i >=3 && i < 5 ? document.styleSheets[3].cssRules[4][1].cssText.replace(/cards-hide/g, "demon2") :
        // i >=5 && i < 7 ? document.styleSheets[3].cssRules[4][1].cssText.replace(/cards-hide/g, "demon3") :
        // i >=7 && i < 9 ? document.styleSheets[3].cssRules[4][1].cssText.replace(/cards-hide/g, "demon4") :
        // i >=9 && i < 11 ? document.styleSheets[3].cssRules[4][1].cssText.replace(/cards-hide/g, "demon5") : document.styleSheets[3].cssRules[4][1].cssText.replace(/cards-hide/g, "demon6");

                // cardList[card].classList.add("reveal");

        // console.log(cardList[card]);
        // cardList[card].className.includes("demon1") ? cardList[card].appendChild(changeImg("demon1")) :
        // cardList[card].className.includes("demon2") ? cardList[card].appendChild(changeImg("demon2")) : cardList[card].appendChild(changeImg("demon3"));
        // cardList[card].classList.add("reveal");

        // if (cardList[card].className.includes("demon1")) {
        //     cardList[card].appendChild(changeImg("demon1"));
        //     cardList[card].classList.add("reveal");
        // }
        // else if (cardList[card].className.includes("demon2")) {
        //     cardList[card].appendChild(changeImg("demon2"));
        //     cardList[card].classList.add("reveal");
        // }
        // else if (cardList[card].className.includes("demon3")) {
        //     cardList[card].appendChild(changeImg("demon3"));
        //     cardList[card].classList.add("reveal");
        // }
        // else if (cardList[card].className.includes("demon4")) {
        //     cardList[card].appendChild(changeImg("demon4"));
        //     cardList[card].classList.add("reveal");
        // }
        // else if (cardList[card].className.includes("demon5")) {
        //     cardList[card].appendChild(changeImg("demon5"));
            // cardList[card].classList.add("reveal");
        // }
        // else {
            
        // }

        

// console.log(document.styleSheets[3].cssRules[4][1].cssText.replace(/cards-hide/g, "demon1"));


// .cssText
