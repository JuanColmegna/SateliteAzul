window.addEventListener('scroll', function() {
    const auspicia = document.querySelector('.auspicia');
    const auspiciaOffset = auspicia.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (auspiciaOffset < windowHeight * 0.75) {
        auspicia.classList.add('mostrar');
    }
});