function stepsHover(val) {
    if (val !== "1") {
        document.getElementById(`line${val}`).style.width = "100%"
    }
    document.getElementById(`radius${val}`).style.backgroundColor = "#f47545"
    document.getElementById(`radius${val}`).style.color = "white"
    document.getElementById(`radius${val}`).style.boxShadow = "0px 6px 20px 1px #ff9c78"
    document.getElementById(`workDiv${val}`).style.boxShadow = "#0000001c 5px 5px 32px 5px"
    document.getElementById(`workDiv${val}`).style.background = "#f47545"
    document.getElementById(`workDiv${val}`).style.color = "white"
    document.getElementById(`withoutHover${val}`).style.display = "none"
    document.getElementById(`hover${val}`).style.display = "block"
}

function mouseOutStep(val) {
    if (val !== "1") {
        document.getElementById(`line${val}`).style.width = "0%"
    }
    document.getElementById(`radius${val}`).style.backgroundColor = "white"
    document.getElementById(`radius${val}`).style.color = "#f47545"
    document.getElementById(`radius${val}`).style.boxShadow = "none"
    document.getElementById(`workDiv${val}`).style.background = "white"
    document.getElementById(`workDiv${val}`).style.color = "black"
    document.getElementById(`workDiv${val}`).style.boxShadow = "none"
    document.getElementById(`withoutHover${val}`).style.display = "block"
    document.getElementById(`hover${val}`).style.display = "none"
}

function animateProgress() {
    document.getElementById('progress1').style.width = "89%"
    document.getElementById('progress2').style.width = "76%"
    document.getElementById('progress3').style.width = "75%"
    document.getElementById('progress4').style.width = "54%"
    document.getElementById('progress5').style.width = "67%"
}

// setTimeout(() => {
//     animateProgress()
// }, 1000)

function dropdown(id) {
    if (id === "1") {
        document.getElementById("one").style.overflow = "initial";
    }
    if (id === "2") {
        document.getElementById("two").style.overflow = "initial";
    }
    document.getElementById(id).style.zIndex = "1";
    document.getElementById(id).style.opacity = "1";
}

function dropdownOut(id) {
    document.getElementById(id).style.zIndex = "-1";
    document.getElementById(id).style.opacity = "0";
    if (id === "1") {
        document.getElementById("one").style.overflow = "hidden";
    }
    if (id === "2") {
        document.getElementById("two").style.overflow = "hidden";
    }
}

function hoverImage(id) {
    console.log(id)
    document.getElementById(`hoverDiv${id}`).style.opacity = "1"
}

function hoverOutImage(id) {
    // console.log(event.target)
    document.getElementById(`hoverDiv${id}`).style.opacity = "0"
}

function loading() {
    document.getElementById("loader").style.zIndex = "9999"
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0"
    }, 2000)
    setTimeout(() => {
        document.getElementById("loader").style.zIndex = "-1"
        document.getElementById("loaderIn").style.zIndex = "-1"
    }, 2500)
    setTimeout(() => {
        document.getElementById("firstSession").className += "  animation__style01"
    }, 2000)
}

loading()

function imageHover(id) {
    document.getElementById(`smOne${id}`).style.opacity = "1"
    setTimeout(() => {
        document.getElementById(`smOne${id}`).style.opacity = "0"
    },200)
    document.getElementById(`smOne${id}`).style.borderWidth = "20px"
    document.getElementById(`smOne${id}`).style.width = "100%"
    document.getElementById(`smOne${id}`).style.height = "100%"

    document.getElementById(`smTwo${id}`).style.opacity = "1"
    document.getElementById(`smTwo${id}`).style.borderWidth = "0px"
    document.getElementById(`smTwo${id}`).style.width = "100%"
    document.getElementById(`smTwo${id}`).style.height = "100%"
}

function imageHoverOut(id) {
    document.getElementById(`smOne${id}`).style.opacity = "0"
    document.getElementById(`smOne${id}`).style.borderWidth = "0px"
    document.getElementById(`smOne${id}`).style.width = "0%"
    document.getElementById(`smOne${id}`).style.height = "0%"

    document.getElementById(`smTwo${id}`).style.opacity = "0"
    document.getElementById(`smTwo${id}`).style.borderWidth = "60px"
    document.getElementById(`smTwo${id}`).style.width = "100%"
    document.getElementById(`smTwo${id}`).style.height = "100%"
}