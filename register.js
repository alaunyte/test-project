document.forms.register.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = event.target.elements.email2.value;
    const password = event.target.elements.password2.value;
    const notification = document.querySelector("div.notification");


    firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        notification.classList.replace("nodisplay", "display");
	    notification.classList.add("green");
	    notification.textContent = "Successfuly!";
	    notification.addEventListener("click", () => {
	        notification.classList.replace("display", "nodisplay");
	    });
    })
    .catch((error) => {
        notification.classList.replace("nodisplay", "display");
        notification.classList.add("red");
        notification.textContent = "Something is wrong..";
        notification.addEventListener("click", () => {
            notification.classList.replace("display", "nodisplay");
	    });
    })
})

