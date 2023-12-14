//grab required elements
let btn = document.getElementById('btnSend');
let cityField = document.getElementById("city");
let response = document.getElementById('response');

//request options
let baseUrl = "http://api.openweathermap.org/data/2.5/weather"
let key = "<--  Votre clé ici -->";
let xhr;

//event listeners
btn.addEventListener('click', handleClick, false);

function handleClick(e){
    //grab city value
    let city = cityField.value;
    //disable form
    cityField.disabled = true;
    btn.disabled = true;
    //show spinner
    updateUI(`<img src="images/spinner.gif" alt="spinner" id="spinner">`);
    //create xhr
}



/*Utilities*/
let buildUrl = city => `${baseUrl}?units=metric&lang=fr&q=${city}&appid=${key}`;
let updateUI = html => {
    //empty response container
    response.innerHTML = '';
    //replace with htmlString
    response.insertAdjacentHTML( 'beforeend', html);
    //reset form
    cityField.disabled = false;
    btn.disabled = false;
}