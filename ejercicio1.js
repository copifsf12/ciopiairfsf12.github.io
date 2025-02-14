document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const colores = ['#f08080', '#98FB98', '#90EE90'];
    let contador = 0;
    const cartas = document.querySelectorAll('.card');
    const fraseJesis = document.getElementById('frase-jes');

    function cambiarColor() {
        body.style.backgroundColor = colores[contador];
        contador = (contador + 1) % colores.length;
    }

    setInterval(cambiarColor, 1000);

    function createConfetti(card) {
        const confettiContainer = document.createElement('div');
        confettiContainer.classList.add('confetti-container');
        card.appendChild(confettiContainer);

        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.setProperty('--random-x', Math.random() * 200 - 100);
            confettiContainer.appendChild(confetti);
        }

        setTimeout(() => {
            confettiContainer.remove();
        }, 3000);
    }

    cartas.forEach(carta => {
        carta.addEventListener('click', () => {
            const backgroundColor = window.getComputedStyle(body).backgroundColor;
            const back = carta.querySelector('.card-content.back');
            back.style.backgroundColor = backgroundColor;

            createConfetti(carta);
            carta.classList.toggle('flipped');

            const audio = new Audio('click.mp3');
            audio.play();
        });
    });

    const corazonesFondo = document.querySelector('.corazones-fondo');

    for (let i = 0; i < 5; i++) {
        const corazon = document.createElement('div');
        corazon.classList.add('corazon');
        corazon.innerHTML = '&#x2665;';
        corazonesFondo.appendChild(corazon);

        corazon.style.left = `${Math.random() * 100}%`;
        corazon.style.animationDelay = `${Math.random() * 3}s`;
    }
});
