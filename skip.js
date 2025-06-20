function skipRight(indexPok, event){
    event.stopPropagation();

    
    let indexPokSkipRight = indexPok+1;
    let overlay = document.getElementById("overlay");
    
    
    overlay.innerHTML =  getCardTemplate(indexPokSkipRight);
}


function skipLeft(indexPok, event){
    event.stopPropagation();

    
    let indexPokSkipLeft = indexPok-1;
    let overlay = document.getElementById("overlay");
    
    
    overlay.innerHTML =  getCardTemplate(indexPokSkipLeft);
}