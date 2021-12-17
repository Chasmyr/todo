//add close btn
var myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// add event listener ti enter keys
var focus = document.activeElement;
var inputElement = document.getElementById("textInput");
inputElement.addEventListener('click', function() {
    if (inputElement.tagName === "INPUT") {
        this.addEventListener('keypress', function(e) {
            if(e.key === "Enter") {
                newToDo();
            }
        })
    }
}) 


// made close btn work
var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// add the check function
var list = document.getElementById("myList");
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
}, false);

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

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    // remove item that we dont want
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}