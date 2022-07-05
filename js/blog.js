const but = document.querySelector(".myBtn")
but.addEventListener("click",butFun)
const but1 = document.querySelector(".myBttn")
but1.addEventListener("click",butFun1)

function butFun(){
    
    const item = document.querySelector(".show")
    item.classList.toggle("hide")   
     
    but.textContent == "Read More" ?
    but.textContent = "Read Less" : but.textContent = "Read More"
}

function butFun1(){
    
    const item1 = document.querySelector(".show-1")
    item1.classList.toggle("hide-1")   
     
    but1.textContent == "Read More" ?
    but1.textContent = "Read Less" : but1.textContent = "Read More"
}

setInterval(funct,1000)
function funct(){
    var date = new Date()
    document.querySelector("#date").innerHTML = date.toLocaleString()
    document.querySelector("#date-1").innerHTML = date.toLocaleString()
}