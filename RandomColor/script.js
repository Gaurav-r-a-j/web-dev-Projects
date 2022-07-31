const colors = ['#4fdb5d', '#cddb4f', '#db4f4f', '#934fdb'];

const multiColors = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

const text = document.getElementById('text');
const btn = document.getElementById('btn');
console.log(btn);
const btn2 = document.getElementById('btn2');




btn.addEventListener("click", () =>{
        const element = colors[randomNumbers(colors)];
        // console.log(element);
        text.innerHTML = `Background color is : ${element}`;
        bodyColor(element);
    
});

btn2.addEventListener('click' , () =>{
    let color = '#';
    for (let index = 0; index <6; index++) {
        let element = multiColors[randomNumbers(multiColors)];
        color += element;
    }
    text.innerHTML = `Background color is : ${color}`
    // console.log(color);
    bodyColor(color);
    
})

const randomNumbers = (arr) =>{
    const random  = Math.floor(Math.random() * arr.length);
    return random;
}

const bodyColor = (color) =>{
    document.body.style.background = color;
}

// changeColour();