console.log('This is tutorial no.63 in which we are going to make postman clone');

////Utility Functions:
//1.Utility function to get dom element from string

function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}


//Initialize number of parameter
let addedParamscount = 0;

//hiding the parameter box initially
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = "none";

//If the user clicks on params box,  hide the json box
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';
})

//If the user clicks on json box,  hide the params box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'block';
    document.getElementById('parametersBox').style.display = 'none';
})



///if the users clicks on + plus button add more parameters or also for - button to delete
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = `<div class="form-row my-2">
    <label for="url" class="col-sm-2 col-form-label">Parameter ${addedParamscount + 2}</label>
    <div class=" col-md-4">
        <input type="text" class="form-control" id="parameterKey${addedParamscount + 2}" placeholder="Enter parameter ${addedParamscount + 2} key">
    </div>
    <div class=" col-md-4">
        <input type="text" class="form-control" id="parameterValue${addedParamscount + 2}" placeholder="Enter parameter ${addedParamscount + 2} value">
    </div>
    <button id="deleteParam" class="btn btn-primary deleteParam">-</button>
</div>`;

    //convert the element string to Dom node
    let paramElement = getElementFromString(string);
    // console.log(paramElement);just to test
    params.appendChild(paramElement);

    ///Add an event listener to remove the parameter on clicking - or deleteparam button
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            e.target.parentElement.remove();//this is used to remove parameters
        })
    }

    addedParamscount++;

})


///If the user clicks on submit button

let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    //show please wait in the response box to request patience from the user

    // document.getElementById('responseJsonText').value = "Please wait.....Fetching Response....";
    document.getElementById('responsePrism').innerHTML ="Please wait.....Fetching Response....";



    ///fetch all the values user has entered
    let url = document.getElementById('url').value;
    let requestType = document.querySelector("input[name = 'requestType']:checked").value;
    let contentType = document.querySelector("input[name = 'contentType']:checked").value;

    //log all the values in the console for debugging
    console.log('Url is ', url);
    console.log('requestType is ', requestType);
    console.log('contentType is ', contentType);

    //if user has select params option insted of json , collect all the parameters in an object
    if (contentType == 'params') {
        data = {};
        for (i = 0; i < addedParamscount + 1; i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let value = document.getElementById('parameterValue' + (i + 1)).value;
                data[key] = value;
            }
            data = JSON.stringify(data);
        }
    }
    else {
        data = document.getElementById('requestJsonText').value;
    }

    //log all the values in the console for debugging
    console.log('Url is ', url);
    console.log('requestType is ', requestType);
    console.log('contentType is ', contentType);
    console.log('data is', data);

    ///If the request type is get invoke fetch api to create a post request
    if (requestType == 'GET') {
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.text())
            .then((text) => {
                // document.getElementById('responseJsonText').value = text;

                document.getElementById('responsePrism').innerHTML = text;
                Prism.highlightAll();


            });
    }

    else {
        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(response => response.text())
            .then((text) => {
                // document.getElementById('responseJsonText').value = text;
                document.getElementById('responsePrism').innerHTML = text;
                Prism.highlightAll();//this is the function given by prism it will higlight the code
            });
    }

});







