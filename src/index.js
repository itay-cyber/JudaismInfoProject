//buttons

let homeBtn = document.querySelector("#homeBtn")
let holidaysBtn = document.querySelector("#holidaysBtn")
let originBtn = document.querySelector("#originBtn")
let religionBtn = document.querySelector("#religionBtn")

//containers
let homeContainer = document.getElementById("homeContainer")
let holidaysContainer = document.getElementById("holidaysContainer")
let originContainer = document.getElementById("originContainer")
let religionContainer = document.getElementById("religionContainer")

//checking containers
function checkCtnr() {
    if (window.location.href.includes("#homeContainer")) {

        homeBtn.style.backgroundColor = "#353535"
        holidaysBtn.style.backgroundColor = "#272727"
        originBtn.style.backgroundColor = "#272727"
        religionBtn.style.backgroundColor = "#272727"


        homeContainer.style.display = "block"
        holidaysContainer.style.display = "none"
        originContainer.style.display = "none"
        religionContainer.style.display = "none"


    }
    else if (window.location.href.includes("#holidaysContainer")) {

        holidaysBtn.style.backgroundColor = "#353535"
        homeBtn.style.backgroundColor = "#272727"
        originBtn.style.backgroundColor = "#272727"
        religionBtn.style.backgroundColor = "#272727"

        holidaysContainer.style.display = "block";
        homeContainer.style.display = "none";
        originContainer.style.display = "none"
        religionContainer.style.display = "none"


    }
    else if (window.location.href.includes("#originContainer")) {

        originBtn.style.backgroundColor = "#353535"
        homeBtn.style.backgroundColor = "#272727"
        holidaysBtn.style.backgroundColor = "#272727"
        religionBtn.style.backgroundColor = "#272727"


        originContainer.style.display = "block"
        homeContainer.style.display = "none";
        holidaysContainer.style.display = "none"
        religionContainer.style.display = "none"


    }
    else if (window.location.href.includes("#religionContainer")) {

        religionBtn.style.backgroundColor = "#353535"
        originBtn.style.backgroundColor = "#272727"
        homeBtn.style.backgroundColor = "#272727"
        holidaysBtn.style.backgroundColor = "#272727"


        religionContainer.style.display = "block"
        homeContainer.style.display = "none"
        originContainer.style.display = "none"
        holidaysContainer.style.display = "none"
    }
    else {

        religionBtn.style.backgroundColor = "#272727"
        originBtn.style.backgroundColor = "#272727"
        homeBtn.style.backgroundColor = "#353535"
        holidaysBtn.style.backgroundColor = "#272727"


        religionContainer.style.display = "none"
        homeContainer.style.display = "block"
        originContainer.style.display = "none"
        holidaysContainer.style.display = "none"

    }
}


//loop the function for every 100 ms
setInterval(checkCtnr, 100)