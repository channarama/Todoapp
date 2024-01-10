const txt = document.querySelector(".textbox");
const btn = document.querySelector(".btn1"); 
const para = document.querySelector(".para").innerHTML;
const print = document.querySelector(".body");
store = [];
edit_id = null;
storestr = localStorage.getItem("data");
store = JSON.parse(storestr);
function btnclick() {
    ele = document.querySelector(".textbox").value;
    if (edit_id != null) {
        store.splice(edit_id, 1, ele);
        edit_id = null;
        document.querySelector(".textbox").value = "";
        document.querySelector(".para").innerHTML = para;
        display();
    }
    else if (txt.value != "") {
        ele = document.querySelector(".textbox").value;
        store.push(ele);
        document.querySelector(".textbox").value = "";
        storedata(store);
        display();
    }
    else {
        alert("you didn't added anything");

    }
}

function storedata(storeinfo) {
    jsonstr = JSON.stringify(storeinfo);
    localStorage.setItem("data", jsonstr);
}

function display() {
    str = "";
    store.forEach((element, index) => {
        str += `<div class="rows">
    <li class="ele">${element}</li>
    <li><button class="btn3"onclick="edit(${index})";>edit</button></li> 
    <li><button class="btn4"onclick="del(${index})";><p>x</p></button></li>
</div>`

    })

    print.innerHTML = str;
    storedata(store);

}
display();
function del(inde) {
    store.splice(inde, 1);
    display();
    storedata(store);
}
function edit(index) {
    edit_id = index;
    txt.value = store[index];
    document.querySelector(".para").innerHTML = "Save";
}

