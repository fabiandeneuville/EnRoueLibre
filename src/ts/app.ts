const slider = document.querySelector('.slider') as HTMLDivElement;
const slides : HTMLDivElement[] = Array.from(document.querySelectorAll('.slide') as NodeListOf<HTMLDivElement>);
const miniatures : HTMLImageElement[] = Array.from(document.querySelectorAll('.miniature') as NodeListOf<HTMLImageElement>);

for(let i = 0; i < miniatures.length; i++){
    miniatures[i].addEventListener('click', () => moveSlider(i))
    miniatures[i].addEventListener('keypress', () => moveSlider(i))
}

function moveSlider(index : number) : void {
    const translateValue : number = -index * 100 / 6;
    slider.style.transform = `translateX(${translateValue}%)`
}