document.addEventListener("DOMContentLoaded", function () {
    const championList = document.querySelector('#champs');
    const formData = localStorage.getItem('#formData');

    if (formData) {
        championList.innerHTML = formData;
    }
});

const Form = document.querySelector('#form1');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const dob = document.querySelector('#dob');
const userList = document.querySelector('#champs');

Form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`Hello Mr ${firstName.value} ${lastName.value} on this date ${dob.value} you became a champion`));

    userList.appendChild(li);

    localStorage.setItem("#formData", champs.innerHTML);

    firstName.value = '';
    lastName.value = '';
    dob.value = '';
}