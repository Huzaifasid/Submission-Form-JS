function login() {
    var btn = document.getElementById("btn")
    var body = document.getElementById("Body");
    body.style.display = "none"
    var section1 = document.getElementById("logedin");
    var section2 = document.getElementById("result");
    var input1 = document.getElementById("inp1");
    var p1 = document.createElement("h3");
    var input2 = document.getElementById("inp2");
    var p2 = document.createElement("h3");
    p2.innerHTML = ("Name: " + input1.value + " " + input2.value)
    var input3 = document.getElementById("inp3");
    var p3 = document.createElement("h3");
    p3.innerHTML = ("Email: " + input3.value)
    var h1 = document.createElement("h1");
    var h1text = document.createTextNode("Congratulations! Your account has been created successfully");
    h1.appendChild(h1text);
    section1.appendChild(h1);
    section2.appendChild(p1)
    section2.appendChild(p2)
    section2.appendChild(p3)
    section2.classList.add("cont")
    btn.disabled = true
}


function showPass(e) {
    var pass = document.getElementById("pass");

    if (pass.type == "text") {
        pass.type = "password"
        e.innerHTML ="<i class='far fa-eye'></i>"
    } else {
        pass.type = "text"
        e.innerHTML = "<i class='fas fa-eye-slash'></i>"
    }
}

function enablebtn(e){
    var body = document.childNodes[1].children[1]
    var modalH = document.getElementById("modalHead");
    var modalB = document.getElementById("modalBody");
    var modalF = document.getElementById("modalFoot");
    if (e.className == "fas fa-toggle-off") {
        body.style.backgroundColor = "#202124";
        modalH.style.backgroundColor = "#202124"
        modalB.style.backgroundColor = "#202124"
        modalF.style.backgroundColor = "#202124"
        // modal.style.Color = "white"
        body.style.color = "white"
        e.className = "fas fa-toggle-on"
    } else {
        e.className = "fas fa-toggle-off"
        body.style.backgroundColor = "white"
        modalH.style.backgroundColor = "white"
        modalB.style.backgroundColor = "white"
        modalF.style.backgroundColor = "white"
        body.style.color = "black"

    }
}
