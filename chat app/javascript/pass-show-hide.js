const pswrdField = document.querySelector(".form .field input[type = 'password']");
toggleBtn = document.querySelector(".form .field i");

//this to hide and show password 
toggleBtn.onclick = ()=>{
    if(pswrdField.type == "password"){
        pswrdField.type = "text";  //this is for from password to text
        toggleBtn.classList.add("active");
    }
    else{
        pswrdField.type = "password"; //this is for from text to password
        toggleBtn.classList.remove("active");

    }
}



