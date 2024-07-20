const inp = document.getElementById('input')
const todo = document.getElementById('todo')

function addTask(){
    if(inp.value===''){
        alert('You Must Write Something!')
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inp.value;
        todo.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inp.value = "";
}

todo.addEventListener("click" , function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
} , false);