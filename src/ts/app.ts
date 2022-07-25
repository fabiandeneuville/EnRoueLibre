const slider = document.querySelector('.slider') as HTMLDivElement;
const slides : HTMLDivElement[] = Array.from(document.querySelectorAll('.slide') as NodeListOf<HTMLDivElement>);
const miniatures : HTMLImageElement[] = Array.from(document.querySelectorAll('.miniature') as NodeListOf<HTMLImageElement>);

const descriptionSlider = document.querySelector('.product-description-slider') as HTMLDivElement;
const descriptionButtons : HTMLButtonElement[] = Array.from(document.querySelectorAll('.menu-button') as NodeListOf<HTMLButtonElement>);

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

function moveSlider(sliderElement : HTMLDivElement, index : number, numberOfSlides : number) : void {
    const translateValue : number = -index * 100 / numberOfSlides;
    sliderElement.style.transform = `translateX(${translateValue}%)`;
}

function checkActiveSlide() : void {
    for(let i = 0 ; i < descriptionButtons.length ; i++){
        if(i === activeSlide){
            descriptionButtons[i].style.border = "2px solid black";
        } else {
            descriptionButtons[i].style.border = "2px solid #F5F5F5";
        }
    }
}