function createTooltip(tooltip, position='left'){

    let element = document.createElement('div')
    element.textContent = tooltip.title
    element.classList.add('tooltip')
    tooltip.insertAdjacentElement('beforeBegin', element)
    if (position == 'left'){
        element.style.left = `${tooltip.getBoundingClientRect().left}px`
        element.style.top = `${tooltip.getBoundingClientRect().bottom}px`
    };
   
    return element
};

window.addEventListener('DOMContentLoaded', ()=>{

    let tooltips = Array.from(document.querySelectorAll(".has-tooltip"))

    tooltips.forEach(tooltip=>{
        let element = createTooltip(tooltip)
     
        tooltip.addEventListener('click', (e)=>{
           e.preventDefault();
     
           let elems = Array.from(document.querySelectorAll('.tooltip_active'))
           let findElem = elems.find(elem => elem.classList.contains('tooltip_active'))
     
           if (!findElem ){
                element.classList.add('tooltip_active')
           } 
           else {
                if (findElem !== element) {
                element.classList.add('tooltip_active')
                };
                findElem.classList.remove('tooltip_active')
           };
        });
     });
});




