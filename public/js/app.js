"use strict";
/********** DOM ELEMENTS SELECTION  **********/
const slider = document.querySelector('.slider');
const slides = Array.from(document.querySelectorAll('.slide'));
const miniatures = Array.from(document.querySelectorAll('.miniature'));
const descriptionSlider = document.querySelector('.product-description-slider');
const descriptionButtons = Array.from(document.querySelectorAll('.menu-button'));
const offerEndingDateDisplay = document.querySelector('.offer-ending');
const footerYearDisplay = document.querySelector('.year');
/********** DATE SETTING **********/
footerYearDisplay.textContent = getYear().toString();
let offerEndingDate = setOfferEndingDate(new Date(), 5).toLocaleDateString();
offerEndingDateDisplay.textContent = offerEndingDate;
/********** HANDLING SLIDES **********/
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
/********** FUNCTIONS **********/
function moveSlider(sliderElement, index, numberOfSlides) {
    const translateValue = -index * 100 / numberOfSlides;
    sliderElement.style.transform = `translateX(${translateValue}%)`;
}
function checkActiveSlide() {
    for (let i = 0; i < descriptionButtons.length; i++) {
        if (i === activeSlide) {
            descriptionButtons[i].style.border = "2px solid green";
            descriptionButtons[i].style.color = "green";
        }
        else {
            descriptionButtons[i].style.border = "2px solid #F5F5F5";
            descriptionButtons[i].style.color = "#333";
        }
    }
}
function setOfferEndingDate(currentDate, numberOfDays) {
    let offerEndingDate = new Date(currentDate.getTime() + (numberOfDays * 24 * 60 * 60 * 1000));
    return offerEndingDate;
}
function getYear() {
    let currentYear = (new Date().getFullYear());
    return currentYear;
}
