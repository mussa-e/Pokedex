function skipRight(indexPok, event) {
    event.stopPropagation();

    let indexPokSkipRight = Math.min(indexPok + 1, 19 + limit);
    let overlay = document.getElementById("overlay");
    overlay.innerHTML = generateCardHTML(indexPokSkipRight);

    checkSkipRight(indexPokSkipRight);
}


function skipLeft(indexPok, event) {
    event.stopPropagation();
    let indexPokSkipLeft = indexPok;

    if (indexPok > 0) {
        indexPokSkipLeft = indexPok - 1;
        let overlay = document.getElementById("overlay");
        overlay.innerHTML = generateCardHTML(indexPokSkipLeft);
    }

    checkSkipLeft(indexPokSkipLeft);
}


function checkSkipLeft(indexPok) {
    let contentRefLeft = document.getElementById("arrow-left");
    
    if (indexPok < 1 ) {
        contentRefLeft.classList.add("d-none");
    } else {
        contentRefLeft.classList.remove("d-none");
    }
}


function checkSkipLeftTwo(indexPok){
    let contentRefLeft = document.getElementById("arrow-left");
    
    if (indexPok < 1 ) {
        contentRefLeft.classList.add("d-none");
    } else {
        contentRefLeft.classList.remove("d-none");
    }
}


function checkSkipRight(indexPok) {
    let contentRefRight = document.getElementById("arrow-right");

    if (indexPok >= allPokemonData.length - 1) {
        contentRefRight.classList.add("d-none");
    } else {
        contentRefRight.classList.remove("d-none");
    }
}
