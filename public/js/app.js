"use strict";
const slider = document.querySelector('.slider');
const slides = Array.from(document.querySelectorAll('.slide'));
const miniatures = Array.from(document.querySelectorAll('.miniature'));
for (let i = 0; i < miniatures.length; i++) {
    miniatures[i].addEventListener('click', () => moveSlider(i));
    miniatures[i].addEventListener('keypress', () => moveSlider(i));
}
function moveSlider(index) {
    const translateValue = -index * 100 / 6;
    slider.style.transform = `translateX(${translateValue}%)`;
}
