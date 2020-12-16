import anime from 'animejs/lib/anime.es.js';
import "./../css/style.css";

window.onload = () => {
    anime({
        targets: '#smile',
        keyframes: [
            {translateY: -40},
            {translateX: 250},
            {translateY: 40},
            {translateX: 0},
            {translateY: 30}
        ],
        duration: 4000,
        easing: 'easeOutElastic(1, .8)'
    });
}