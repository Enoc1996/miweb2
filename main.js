const firstName = document.querySelector('#firstNameInput');
const lastName = document.querySelector('#lastNameInput');
const emailAddress = document.querySelector('#emailInput');
const password = document.querySelector('#paswordInput');

const firstNameError = document.querySelector('#firstNameError');
const lastNameError = document.querySelector('#lastNameError');
const emailAddressError = document.querySelector('#emailError');
const passError = document.querySelector('#passError');

const button = document.querySelector('#button');

button.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError, 'First name cannot be empty');
    validateEmpty(lastName.value, lastName, lastNameError, 'Last name cannot be empty');
    validateEmail(emailAddress.value, emailAddress, emailAddressError, 'Looks like this is not a email' );
    validateEmpty(password.value, password, passError, 'Password cannot be empty');

});

function validateEmail(valueInput, divInput, divError, error){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if(regExp.test(valueInput) == true){
        hideError(divInput,divError)
    }else{
        showError(divInput,divError, error)
    }
}

function validateEmpty(valueInput, divInput, divError, error){
    if(valueInput.length ==0){
        showError(divInput, divError,error);

    }else{
        hideError(divInput,divError);
    }
}

function showError(divInput, divError, error){
    divInput.style.border = '1px solid red'
    divError.innerHTML = `<img class="icon-error" src="./images/icon-error.svg" alt="" class="icon-error">
    <p class="error"> ${error}</p>`;
}
function hideError(divInput, divError){
    divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = ``;
}
