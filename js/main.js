let numberDisplayElement = document.querySelector('.number-display');
let numberInputElement = document.querySelector('#number-input');
let plusButton = document.querySelector('#plus-button');
let minusButton = document.querySelector('#minus-button');




minusButton.onclick = function () {
    let numberInputted = parseInt(numberInputElement.value);
    let numberDisplayed = numberDisplayElement.textContent;
    let result = numberDisplayed - numberInputted;
    numberDisplayElement.textContent = result;
    if(result < 0){
        numberDisplayElement.style.color = "red";
    }
    else{
        numberDisplayElement.style.color = "black";

    }

}

plusButton.onclick = function () {
    let numberInputted = parseInt(numberInputElement.value);
    let numberDisplayed = parseInt(numberDisplayElement.textContent);
    let result = numberDisplayed + numberInputted;
    numberDisplayElement.textContent = result;
    if(result < 0){
        numberDisplayElement.style.color = "red";
    }
    else{
        numberDisplayElement.style.color = "black";

    }
}

plusButton.addEventListener('mouseover', function (e) {
    plusButton.style.backgroundColor = "white";
    plusButton.style.color = "grey";
    setTimeout(function () {
        plusButton.style.backgroundColor = "grey";
        plusButton.style.color = "white";
    }, 500);
});


minusButton.addEventListener('mouseover', function (e) {
    minusButton.style.backgroundColor = "white";
    minusButton.style.color = "grey";
    setTimeout(function () {
        minusButton.style.backgroundColor = "grey";
        minusButton.style.color = "white";
    }, 500);

});