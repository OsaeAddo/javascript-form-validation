// return all classes and ids
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let username = id('username'),
    email = id('email'),
    password = id('password'),
    form = id('form'),
    
    errorMsg = classes('error'),
    successIcon = classes('success-icon'),
    failureIcon = classes('failure-icon');

// add event listener to the form's submit button
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // implement form validation engine
    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
})

// engine is for form validation
// id gets errors on 'id'
// serial gets errors on the 'classes'
// message prints a message inside the error class
let engine = (id, serial, message) => {
    // remove extra whitespace in user input
    if (id.value.trim() === ""){
        errorMsg[serial].innerHTML = message;  // print error message in class if blank form is submitted
        id.style.border = "2px solid red";

        // icons
        failureIcon[serial].style.opacity = "1"; // highlight failure icons if blank form is submitted
        successIcon[serial].style.opacity = "0";
    }
    else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1"; // highlight success icons if all inputs are filled
    }
}
