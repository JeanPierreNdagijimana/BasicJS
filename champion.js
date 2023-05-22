//getting data from the local storage
document.addEventListener("DOMContentLoaded", function () {//call back function after DOMContentLoaded (everything on html has loaded) 
    const championList = document.querySelector('#champs');
    const Form = document.querySelector('#form1');
    const formData = localStorage.getItem('#formData');
    console.log("formData", formData);

    if (Form) {
        Form.addEventListener('submit', onSubmit);
    }
    //checking if the formData exists
    if (formData && championList) {
        championList.innerHTML = formData;
    }
});


const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const dob = document.querySelector('#dob');
const userList = document.querySelector('#champs');


function onSubmit(e) {
    e.preventDefault();

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`Hello Mr/Mrs ${firstName.value} ${lastName.value} on this date ${dob.value} you became a champion`));

    userList.appendChild(li);
    //save data to the web page
    localStorage.setItem("#formData", champs.innerHTML);

    firstName.value = '';
    lastName.value = '';
    dob.value = '';
}

