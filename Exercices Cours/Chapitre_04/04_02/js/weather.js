//grab required elements
let btn = document.getElementById('btnSend');
let cityField = document.getElementById("city");
let response = document.getElementById('response');

//request options
let token = "ec8fd2639309e9";
let baseUrl = "https://ipinfo.io/";

//event listeners
btn.addEventListener('click', handleClick, false);

async function handleClick(e){
    //grab city value
    let city = cityField.value;
    //disable form
    cityField.disabled = true;
    btn.disabled = true;
    //show spinner
    updateUI(`<img src="images/spinner.gif" alt="spinner" id="spinner">`);
    //create xhr
    try {
        let response = await fetch(buildUrl(city));
        let data = await handleErrors(response);
        await createSuccessHtml(data);
    } catch (error) {
        createErrorHtml(error);
    } finally {
        resetForm();
    }
    
}

async function handleErrors(response){
    if(response.ok){
        return response.json();
    } else {
        let error = await response.json();
        throw error;
    }
}

function createSuccessHtml(data){
        let html =  `
            <h1>Le temps à ${data.hostname}</h1>
        `
        updateUI(html);
}

function createErrorHtml(data){
    let html = `
        <h1>Une erreur s'est produite !</h1>
        <p>${data.message}</p>
    `
    updateUI(html)
}


/*Utilities*/
let buildUrl = city => `${baseUrl}${encodeURIComponent(city)}/json?token=${token}`;
let updateUI = html => {
    //empty response container
    response.innerHTML = '';
    //replace with htmlString
    response.insertAdjacentHTML( 'beforeend', html);
}

function resetForm(){
    //reset form
    cityField.disabled = false;
    btn.disabled = false;
}