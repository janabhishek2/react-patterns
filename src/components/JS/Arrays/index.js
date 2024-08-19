// Saving all values of form to sessionStorage

const checkoutForm = document.getElementById("checkoutForm");

const form_key = "form_1"
checkoutForm.addEventListener("input", (e) => {
    // get sessioStorage object for form

    const formValues = JSON.parse(sessionStorage.getItem(form_key)) ?? {};
    const { name, value } = e?.target ?? {};
    formValues[name] = value;

    // set the values to sessionStorage
    sessionStorage.setItem(form_key, JSON.stringify(formValues));
});

const populateForm = function() {
    const formValues = JSON.parse(sessionStorage.getItem(form_key)) ?? {};
    for(let key in formValues) {
        // find the element in UI
        const element = document.getElementById(key);
        element && (element.value = formValues[key]);
    }
    return;
}

populateForm();
