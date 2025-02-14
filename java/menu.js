document.addEventListener('DOMContentLoaded', () => {
    // Confetti function
    const crearConfeti = () => {
        const confeti = document.createElement('div');
        confeti.classList.add('confeti');
        document.body.appendChild(confeti);
        confeti.style.left = Math.random() * 100 + 'vw';
        confeti.style.animationDuration = Math.random() * 2 + 1.5 + 's';
    };

    const crearCinta = () => {
        const cinta = document.createElement('div');
        cinta.classList.add('cinta');
        document.body.appendChild(cinta);

        cinta.style.left = Math.random() * 100 + 'vw';
        cinta.style.animationDelay = Math.random() * 2 + 's';
    };

    // Start confetti after 1 second
    setTimeout(() => {
        for (let i = 0; i < 30; i++) {
            crearConfeti();
            crearCinta();
        }
    }, 1000);
});