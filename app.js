

     
    
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
    p2.innerHTML = ("Name: " + input1.value +" " + input2.value)
    
    var input3 = document.getElementById("inp3");
    var p3 = document.createElement("h3");
    p3.innerHTML = ("Email: " + input3.value)
    


    console.log(input1.value)
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

        
    




