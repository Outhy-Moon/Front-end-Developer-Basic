

// com addEventListener

// function trocaModo() {
//     const buttonMode = document.querySelector("#buttonMode");
//     buttonMode.addEventListener("click", modo);
// }

// function modo() {
//     const html = document.documentElement; // documentElement é a referencia do html

//     if (html.classList.contains("light")) {  
//         html.classList.remove("light")
//     } else {
//         html.classList.add("light")
//     }
// }

// trocaModo()

// ou sem

function trocaMode2() {

    const html = document.documentElement;
    const getImgLight = document.querySelector("#avatar"); // trocando a img junto

    if (html.classList.contains("black")) {
        html.classList.remove("black")
        getImgLight.src = "../assets/Ellipse.jpg"
    } else {
        html.classList.add("black")
        getImgLight.src = "../assets/Avatar.png"
    }

    // ou

    // html.classList.toggle("light")

}

function trocaMode3() {
    const html = document.documentElement;
    html.classList.toggle("black")

    let getImg = document.querySelector("#avatar");

    if (html.classList.contains("black")) {
        getImg.setAttribute("src", "../assets/Avatar.png") //setAttribute() vai ajustar ou modificar ou adicionar um atributo 
        getImg.setAttribute("alt", "avart-black-mode");

    } else {
        getImg.setAttribute("src", "../assets/Ellipse.jpg")
        getImg.setAttribute("alt", "avart-ligth-mode");
    }

}



