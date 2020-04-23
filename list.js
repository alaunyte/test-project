const container = document.querySelector(".container");


const addProperty = (img, price, description, city) => {
    const div = document.createElement("div");
    div.classList.add("block");
    const image = document.createElement("img");
    image.src = img;
    const h3 = document.createElement("h3");
    h3.textContent = price;
    const h5 = document.createElement("h5");
    h5.textContent = city;
    const p = document.createElement("p");
    h3.textContent = description;


    div.append(image, h3, h5, p);
    container.append(div);

}

firebase.firestore().collection("home").get().then((snapshot) => snapshot.docs.forEach((doc) => {
    addProperty(doc.data().img, doc.data().price, doc.data().description, doc.data().city);
}))