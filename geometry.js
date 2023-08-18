function getInputValue(elementID){
    const input = document.getElementById(elementID);
    const inputStringValue = input.value;
    const inputNumberValue = parseFloat(inputStringValue);
    return inputNumberValue;
    
}

function setTextValue(textElementId, area){
    const textElement = document.getElementById(textElementId);
    textElement.innerText = area;

}

function addToCalculationArea(shapeType, area){
    const calculationAreaElement = document.getElementById('calculation-area');

    const count = calculationAreaElement.childElementCount;
    
    calculationAreaElement.classList.add('my-3')
    
    const p = document.createElement('p');
    p.innerHTML = `${count + 1}. ${shapeType} ${area} cm<sup>2</sup>  <button class="btn btn-success my-2 btn-sm ">Convert to m<sup>2</sup> </button>`;
    calculationAreaElement.appendChild(p);
}


    


function calculateTriangleArea(){
    const base = getInputValue('triangle-base-input');
    const height = getInputValue('triangle-height-input');
    
    if(isNaN(base) || isNaN(height)){
        alert('Please provide number');
        return;
    }
    
    const area = 0.5 * base * height;
    
    setTextValue('area-span', area);
    addToCalculationArea('Triangle', area);
}


function calculateRectangleArea(){
    const width = getInputValue('rectangle-base-input');
    const height = getInputValue('rectangle-height-input');
    
    if(isNaN(width) || isNaN(height)){
        alert('Please provide number');
        return;
    }
    
    const area = width * height;
    
    setTextValue('area-span', area);
    addToCalculationArea('Rectangle', area);
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base-input');
    const height = getInputValue('parallelogram-height-input');
    
    if(isNaN(base) || isNaN(height)){
        alert('Please provide number');
        return;
    }
    
    const area = base * height;
    
    setTextValue('area-span', area);
    addToCalculationArea('Parallelogram', area);
}