let homeBtn = document.querySelector("#homeBtn")
let holidaysBtn = document.querySelector("#holidaysBtn")


let homeContainer = document.getElementById("homeContainer")
let holidaysContainer = document.getElementById("holidaysContainer")


function checkCtnr() {
    if (window.location.href.includes("#homeContainer")) {
        homeBtn.style.backgroundColor = "#353535"
        holidaysBtn.style.backgroundColor = "#272727"

        homeContainer.style.display = "block"
        holidaysContainer.style.display = "none"
    }
    else if (window.location.href.includes("#holidaysContainer")) {
        holidaysBtn.style.backgroundColor = "#353535"
        homeBtn.style.backgroundColor = "#272727"


        holidaysContainer.style.display = "block";
        homeContainer.style.display = "none";

    }
}

setInterval(checkCtnr, 100)