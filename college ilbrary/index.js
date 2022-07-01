console.log("index.js");

/*
to do 
1 = store all the data to the locaStroage
2 = Give anotehr colum as an option to delete the book
3 = Add a scroll bar to the view
*/


var book;
//Constructor
function Book(title, author, type) {
    this.title = title;
    this.author = author;
    this.type = type;
}


//Display constructor

function Display() {

}





//ADd methods to display prototype

Display.prototype.add = function (book) {
    console.log("Adding to ui");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.title}</td>
                        <td>${book.author}</</td>
                        <td>${book.type}</</td>
                    </tr>`

    tableBody.innerHTML += uiString;
}


//implementing the validate function
Display.prototype.validate = function (book) {
    if (book.title.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}


//this protype is used to clear input after the form is submitted

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryform');
    libraryForm.reset();//here reset is used to clear the previous form filled data
}


//lets make a show function to through error
Display.prototype.show = function (type, displaymessage) {
    let message = document.getElementById('message');

    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message: </strong> ${displaymessage}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
    `

    // this is used to automatically remove the shown message after given time 
    setTimeout(function () {
        message.innerHTML = '';
    }, 1000);

}





//Add submit event listener to libraryform

let libraryForm = document.getElementById('libraryform');
libraryForm.addEventListener('submit', libraryFormSubmit);



function libraryFormSubmit(e) {
    console.log("you have submitted library from");//as by default behaviour of form the page reloaded after it submitted so lets change the default behaviour of our form

    let title = document.getElementById('bookName').value;
    let author = document.getElementById('Author').value;
    let type;


    let Fiction = document.getElementById('Fiction');
    let Programming = document.getElementById('Programming');
    let Cooking = document.getElementById('Cooking');


    if (Fiction.checked) {//checked method is used to get the choosen item from the checklist
        type = Fiction.value;
    }
    else if (Programming.checked) {
        type = Programming.value;
    }
    else if (Cooking.checked) {
        type = Cooking.value;
    }


    book = new Book(title, author, type);
    console.log(book);
    // console.log(book.title);

    //after submittting the form the value we enter is still written in the form so we need to clear it let see

    let display = new Display();


    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'your book has been successfully added');
    }
    else {
        //    show error to the user 
        display.show('danger', 'Sorry you cannot add this book.');

    }



    e.preventDefault();//this is used to remove the default behaviour of form
}

// console.log(book.title);
