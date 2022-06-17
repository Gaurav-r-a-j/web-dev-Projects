let string = "";

let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string); // eval is a function which is used here
            document.querySelector('input').value = string;

        }
        else if (e.target.innerHTML == "C") {
            string =" ";
            document.querySelector('input').value = string;
        }

        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})

// to do
// make m+ m- and other things
