function skipRight(indexPok, event){
    event.stopPropagation();

    if (api === base_url_20) {
        let indexPokSkipRight = Math.min(indexPok + 1, 19);
        let overlay = document.getElementById("overlay");
        overlay.innerHTML =  getCardTemplate(indexPokSkipRight);
    }
    if (api === base_url_40) {
        let indexPokSkipRight = Math.min(indexPok + 1, 39);
        let overlay = document.getElementById("overlay");
        overlay.innerHTML =  getCardTemplate(indexPokSkipRight);
    }
}


function skipLeft(indexPok, event){
    event.stopPropagation();

    if (indexPok > 0) {
        let indexPokSkipLeft = indexPok-1;
        let overlay = document.getElementById("overlay");
        overlay.innerHTML =  getCardTemplate(indexPokSkipLeft);
    }
}