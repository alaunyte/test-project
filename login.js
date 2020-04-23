document.forms.login.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const notification = document.querySelector(".notification");

    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        notification.classList.replace("nodisplay", "display");
	    notification.classList.add("green");
	    notification.textContent = "Successfuly!";
	    notification.addEventListener("click", () => {
	        notification.classList.replace("display", "nodisplay");
        })
        .then(() => window.location.replace("list.html"))
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




