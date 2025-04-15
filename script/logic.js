document.getElementById("btn").addEventListener("click",addElement)
function addElement(){
    const value = document.getElementById("input").value
    const ul = document.querySelector("ul")
    const li=document.createElement("li")
    const text = document.createTextNode(value)
    li.appendChild(text)
    ul.appendChild(li)
    li.classList.add("style-li")
    li.addEventListener("click", deleteElement);
}

function deleteElement(li){
    li.target.remove()
}
