function date() {
    let dateHor = document.querySelector(".container-data-hora");

    let date = new Date();
    dateHor.textContent = `${date.toLocaleDateString()}  ${date.toLocaleTimeString()} `;


}
date()

setInterval(date, 1000);

function hiddendisplayLogin() {

    let getdocumentdisplay = document.querySelector("#login-hidden").style.display;
    let getpage1display = document.querySelector("#display-hidden").style.display;


    if (getdocumentdisplay == "block" || getpage1display == "none") {
        document.querySelector("#login-hidden").style.display = "none";
        document.querySelector("#display-hidden").style.display = "block";


    } else {
        document.querySelector("#login-hidden").style.display = "block";
        document.querySelector("#display-hidden").style.display = "none"

    }


}

function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("white")

}


