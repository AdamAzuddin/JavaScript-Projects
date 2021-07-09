let my_leads=[]
const inputEl=document.getElementById("newlist")
const ulEl=document.getElementById("all")
const links_from_local_storage= JSON.parse(localStorage.getItem("lists"))

if (links_from_local_storage){
    my_leads= links_from_local_storage
    render(my_leads)
}

const add=document.getElementById("new-list-btn").addEventListener("click",function(){
    if (inputEl!==""){
        my_leads.push(inputEl.value)
        inputEl.value = " "
        localStorage.setItem("lists",JSON.stringify(my_leads))
        render(my_leads)
    }
})

const clear_items=document.getElementById("clear-items").addEventListener("click",function(){
    let confirm_delete=confirm("Are you sure you want to delete all list?")
    if (confirm_delete===true){
        localStorage.clear()
        my_leads=[]
        render(my_leads)
    }
    else{
        return
    }
    
})

function delete_function(idtoremove){
    let confirm_delete=confirm("Are you sure you want to delete this list?")
    if (confirm_delete===true){
        // remove list from ulEl parent element
        ulEl.removeChild(document.getElementById(idtoremove))
        // remove list from my_leads array
        my_leads.splice(my_leads.indexOf(idtoremove),1)
        return
    }
    else{
        return
    }
}

function edit_function(idtoedit){
    let new_content=prompt("Edit to do list: ")
    if (new_content ===null || new_content===""){
        console.log("Cancelled")
    }
    else{
        document.getElementById(idtoedit).innerHTML=
        `
        <li id=${idtoedit}>
            <label class="container">
                <span>${new_content}</span>
                <input type="checkbox">
                <span class="checkmark"></span>
            </label>
            <button  class="edit" onclick="edit_function('${idtoedit}')">✍</button>
            <button  class="delete" onclick="delete_function('${idtoedit}')">✗</button>
        </li>
        `
    }
    
}

function render(leads){
    let list_items=""
    for (let i=0;i<leads.length;i++){
        let todo=leads[i]
        list_items+=
        `
        <li id="${todo}">
            <input type="checkbox">
                <span>${todo}</span>
            </input>
            <button  class="edit" onclick="edit_function('${todo}')">✍</button>
            <button  class="delete" onclick="delete_function('${todo}')">✗</button>
        </li>
        `
    }
    ulEl.innerHTML=list_items
}




