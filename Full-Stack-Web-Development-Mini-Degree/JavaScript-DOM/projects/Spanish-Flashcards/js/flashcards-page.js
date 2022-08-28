// let firstButton = document.getElementsByClassName('card-button')[0];
// let firstAnswer = document.getElementsByClassName('card-answer')[0];

// firstButton.addEventListener('click', function(event) {
//     if (firstButton.innerHTML == 'Show') {
//         firstAnswer.style.display = 'Block';
//         firstButton.innerHTML = 'Hide';
//     } else if (firstButton.innerHTML == 'Hide') {
//         firstAnswer.style.display = 'none';
//         firstButton.innerHTML = 'Show';
//     }    
// })

let cards = document.getElementsByClassName('card');
for (let cardIndex in cards) {
    let button = cards[cardIndex].querySelector('.card-button');
    button.addEventListener('click', function(event) {
        let currentButton = event.target;
        let currentCard = currentButton.parentNode;
        let currentAnswer = currentCard.querySelector('.card-answer');


         if (currentButton.innerHTML == 'Show') {
             currentAnswer.style.display = 'Block';
             currentButton.innerHTML = 'Hide';
         } else if (currentButton.innerHTML == 'Hide') {
             currentAnswer.style.display = 'none';
             currentButton.innerHTML = 'Show';
         }    


    })
}