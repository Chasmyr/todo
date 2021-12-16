// add item
function newToDo() {
    var li = document.createElement("li");
    li.className = "active";
    var value = document.getElementById("textInput").value;
    var e = document.createTextNode(value);
    li.appendChild(e);
    if (value === "") {
        alert("écrit frr")
    } else {
        document.getElementById("myList").appendChild(li);
        
    }
    document.getElementById("textInput").value = "";

    // add a class to hide them
    //    var span = document.createElement("SPAN");
    //    var txt = document.createTextNode("\u00D7");
    //    span.className = "close";
    //    span.appendChild(txt);
    //    li.appendChild(span);

    // remove item that we dont want
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = () => {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}