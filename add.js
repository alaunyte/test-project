document.forms.addProperty.addEventListener("submit", (event) => {
    event.preventDefault();

    const img = event.target.elements.img.value;
    const price = event.target.elements.price.value;
    const description = event.target.elements.description.value;
    const city = event.target.elements.city.value;
    const notification = document.querySelector("div.notification");

    firebase.firestore().collection("home").add({img: img, price: price, description: description, city: city })
    .then(() => {
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