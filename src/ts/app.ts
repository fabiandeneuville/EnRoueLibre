/********** DOM ELEMENTS SELECTION  **********/

const slider = document.querySelector('.slider') as HTMLDivElement;
const slides : HTMLDivElement[] = Array.from(document.querySelectorAll('.slide') as NodeListOf<HTMLDivElement>);
const miniatures : HTMLImageElement[] = Array.from(document.querySelectorAll('.miniature') as NodeListOf<HTMLImageElement>);

const descriptionSlider = document.querySelector('.product-description-slider') as HTMLDivElement;
const descriptionButtons : HTMLButtonElement[] = Array.from(document.querySelectorAll('.menu-button') as NodeListOf<HTMLButtonElement>);

const offerEndingDateDisplay = document.querySelector('.offer-ending') as HTMLSpanElement;
const footerYearDisplay = document.querySelector('.year') as HTMLSpanElement;

/********** DATE SETTING **********/

footerYearDisplay.textContent = getYear().toString()

let offerEndingDate = setOfferEndingDate(new Date(), 5).toLocaleDateString() as string;
offerEndingDateDisplay.textContent = offerEndingDate;

/********** HANDLING SLIDES **********/

let activeSlide : number = 0;

checkActiveSlide();

for(let i = 0; i < miniatures.length; i++){
    miniatures[i].addEventListener('click', () => moveSlider(slider, i, 6))
    miniatures[i].addEventListener('keypress', () => moveSlider(slider, i, 6))
}

for(let i = 0; i < descriptionButtons.length; i++){
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

function moveSlider(sliderElement : HTMLDivElement, index : number, numberOfSlides : number) : void {
    const translateValue : number = -index * 100 / numberOfSlides;
    sliderElement.style.transform = `translateX(${translateValue}%)`;
}

function checkActiveSlide() : void {
    for(let i = 0 ; i < descriptionButtons.length ; i++){
        if(i === activeSlide){
            descriptionButtons[i].style.border = "2px solid green";
            descriptionButtons[i].style.color = "green";
        } else {
            descriptionButtons[i].style.border = "2px solid #F5F5F5";
            descriptionButtons[i].style.color = "#333";
        }
    }
}

function setOfferEndingDate(currentDate : Date, numberOfDays : number) : Date {
    let offerEndingDate = new Date(currentDate.getTime() + (numberOfDays * 24 * 60 * 60 * 1000));
    return offerEndingDate;
}

function getYear() : number {
    let currentYear = (new Date().getFullYear())
    return currentYear;
}