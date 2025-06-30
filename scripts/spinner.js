function spinner() {
  let spinnerOverlay = document.getElementById('spinner-overlay');
  spinnerOverlay.style.display = 'flex';

  setTimeout(() => {
    spinnerOverlay.style.display = 'none';
    
  }, 1000);
}


function evoSpinner(){
    setTimeout(() => {
                let spin = document.getElementById('evo-spinner');
                if (spin) spin.remove();
            }, 1000);
}


function showEvoSpinner(container) {
    container.innerHTML = evochainLoading();
}