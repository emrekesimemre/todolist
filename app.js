let container = document.getElementById("container")
let inputList = document.querySelector("#inputList");
let buttonAdd = document.getElementById("buttonAdd");
let ul = document.querySelector("#ul");
let li = document.querySelector("#li")

let btn_dlt = document.querySelector(".buttonDelete")

buttonAdd.addEventListener("click", ()=>{
    if (inputList.value == "") {
        alert("Ne eklemek istersiniz?");
    }
    else{
        li.innerHTML += '<li id= "li" style="border: solid; border-radius: 10px;"><input class ="check_btn" type="checkbox"></input>'+ inputList.value +  " " +'<i class="fas fa-trash-alt"></i></li>'
    }
    inputList.value = ""

    li.querySelectorAll("i").forEach(i=>{
        i.addEventListener("click", ()=>{
            i.closest("li").remove();
        })
    })

    li.querySelectorAll("input").forEach(input=>{

        input.addEventListener("click", ()=>{
            if (input.checked == true) {
                input.closest("li").style.textDecoration = "line-through"
                input.closest("li").style.color = "red"
            }
            else {
                input.closest("li").style.textDecoration = "none"
                input.closest("li").style.color = "royalblue"
            }
            
        })
    })


});


































// buttonAdd.addEventListener("click", ()=>{
// if (inputList.value == "") {
//     alert("Ne eklemek istersiniz?")
//     }
// else{ 
// let liItem = document.createElement('li');
// let item = document.createTextNode(inputList.value);
// liItem.appendChild(item);
// let element = document.getElementById("ul");
// element.appendChild(liItem);
// liItem.innerHTML =  '<input class = "ckeck_btn" type="checkbox"></input>'+ inputList.value +  " " +'<button class="buttonDelete" style="border: none;" type="button" >x</button>'
// inputList.value = ""
// }});






















