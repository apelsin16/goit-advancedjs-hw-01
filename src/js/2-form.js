const formData = {
    email: '',
    message: ''
}

const form = document.querySelector(".feedback-form");

const localStorageKey = "feedback-form-state";

if(localStorage.getItem(localStorageKey)) {
    const parsedData = JSON.parse(localStorage.getItem(localStorageKey));
    
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    form.elements.email.value = parsedData.email;
    form.elements.message.value = parsedData.message;
}

form.addEventListener("input", (evt) => {

    let name = evt.target.name;

    formData[name] = form.elements[name].value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if(!formData.email && !formData.message) {
        console.log('Both fields are requered');
        return;
    }
    console.log(formData);
    
    localStorage.removeItem(localStorageKey);
    form.reset();
});