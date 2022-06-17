console.log("This is project 4");

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validname = false;
let validEmail = false;
let validphone = false;
// $('#failure').hide();
// $('#success').hide();


// console.log(name,email,phone);
name.addEventListener('blur', () => { //blur means select karke bahr click karna
    console.log("name is blurred");
    //validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){1,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your name is valid");
        name.classList.remove('is-invalid');
        validname = true;

    }
    else {
        console.log("your name is not valid");
        name.classList.add('is-invalid');
        validname = false;

    }
})


email.addEventListener('blur', () => {
    console.log("email is blurred");
    //validate email
    let regex = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){1,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Email is valid");
        email.classList.remove('is-invalid');
        validEmail= true;

    }
    else {
        console.log("email is not valid");
        email.classList.add('is-invalid');
        validEmail= false;

    }
})



phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    //validate phone
    let regex = /^[0-9]{10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your number is valid");
        phone.classList.remove('is-invalid');
        validphone=true;

    }
    else {
        console.log("your number is not valid");
        phone.classList.add('is-invalid');
        validphone=false;

    }
})





let submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    let failure = document.getElementById('failure');

    e.preventDefault();//prevent from reloading
    console.log("YOU clicked on submit");
    //submit your form here
    if (validEmail && validname && validphone) {
        let success = document.getElementById('success');
        success.classList.add('show');
        failure.classList.remove('show');
        success.style.display = 'block';

        // $('#failure').alert('close');
        // $('#failure').hide();
        // $('#success').show();


    }
    else {
        console.log("One of phone,email or user are not valid. Hence not submitting the forms.Please try again ")
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove('show');
        success.style.display = 'none';

        // $('#success').alert('close');
        // $('#success').hide();
        // $('#failure').show();


    }

})
