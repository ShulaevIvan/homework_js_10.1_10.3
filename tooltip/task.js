function createTooltip(text, target, dataPosition){

    let positionToltip = target.getBoundingClientRect()
    let tooltipDiv = document.createElement('div')
    let tooltipData = tooltipDiv.dataset.postion = dataPosition

    tooltipDiv.textContent = text

    switch(tooltipData) {
        case "left": 

            tooltipDiv.setAttribute("style", `left: ${positionToltip.left - positionToltip.width}px; top: ${rectRefence.top}px`)
            break
        case "right":

            tooltipDiv.setAttribute("style", `left: ${positionToltip.right}px; top: ${positionToltip.top}px`)
            break
        case "top":

            tooltipDiv.setAttribute("style", `left: ${positionToltip.left}px; top: ${positionToltip.top - positionToltip.height}px`)
            break
        default:

            tooltipDiv.setAttribute("style", `left: ${positionToltip.left}px; top: ${positionToltip.bottom}px`)
    };

    tooltipDiv.classList.add('tooltip')

    return tooltipDiv
};

function checkToolTip(){

    let tooltipActive = Array.from(document.querySelectorAll('.tooltip_active'))

    return tooltipActive.length >= 1 ? false : true
};

window.addEventListener('DOMContentLoaded', ()=>{

    let aTooltip = Array.from(document.querySelectorAll('.has-tooltip'))
    let floatParam = 'top'

    aTooltip.forEach((item)=>{

        item.addEventListener('click', (e)=>{
            e.preventDefault()

            let check = checkToolTip()
            let target = e.target
            let content = target.title
            let tooltip = createTooltip(content, target, floatParam='')
            let tooltipActive = document.querySelector('.tooltip_active')

            if (check) {
                tooltip.classList.add('tooltip_active')
                target.appendChild(tooltip)
            }
            else if (tooltipActive) {
                tooltipActive.classList.remove('tooltip_active')
                tooltipActive.remove()
                target.appendChild(tooltip)
                tooltip.classList.add('tooltip_active')
            };
        });
    });

});