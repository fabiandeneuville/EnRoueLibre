"use strict";
const slider = document.querySelector('.slider');
const slides = Array.from(document.querySelectorAll('.slide'));
const miniatures = Array.from(document.querySelectorAll('.miniature'));
const descriptionSlider = document.querySelector('.product-description-slider');
const descriptionButtons = Array.from(document.querySelectorAll('.menu-button'));
let activeSlide = 0;
checkActiveSlide();
for (let i = 0; i < miniatures.length; i++) {
    miniatures[i].addEventListener('click', () => moveSlider(slider, i, 6));
    miniatures[i].addEventListener('keypress', () => moveSlider(slider, i, 6));
}
for (let i = 0; i < descriptionButtons.length; i++) {
    descriptionButtons[i].addEventListener('click', () => {
        moveSlider(descriptionSlider, i, 3);
        activeSlide = i;
        checkActiveSlide();
    });
    descriptionButtons[i].addEventListener('keypress', () => {
        moveSlider(descriptionSlider, i, 3);
        activeSlide = i;
        checkActiveSlide();
    });
}
function moveSlider(sliderElement, index, numberOfSlides) {
    const translateValue = -index * 100 / numberOfSlides;
    sliderElement.style.transform = `translateX(${translateValue}%)`;
}
function checkActiveSlide() {
    for (let i = 0; i < descriptionButtons.length; i++) {
        if (i === activeSlide) {
            descriptionButtons[i].style.border = "2px solid black";
        }
        else {
            descriptionButtons[i].style.border = "2px solid #F5F5F5";
        }
    }
}
