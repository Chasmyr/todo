var count;
var myNodelist = document.getElementsByTagName("LI");
//add close btn
for (let i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// add event listener enter keys
var focus = document.activeElement;
var inputElement = document.getElementById("textInput");
inputElement.addEventListener('click', function() {
  var value = document.getElementById("textInput").value;
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
    
    div.remove();
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
    } else {
        document.getElementById("myList").appendChild(li);
        
    }
    document.getElementById("textInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    span.onclick = function () {
      document.getElementById("items").innerHTML = count.length - 1 + " items left";
      console.log(count.length - 1);
    }

    // dynamic number of items, print it on footer
    count = document.getElementsByTagName("LI");
    document.getElementById("items").innerHTML = count.length + " items left";

    // remove item that we dont want
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            // minus 1 to the dynamic number when remove one item
            document.getElementById("items").innerHTML = count.length -1 + " items left";
            div.remove();
        }
    }
}

// show all 
function showAll() {
  var toshow = document.getElementsByTagName("LI");
  for(let i = 0; i < toshow.length; i++) {
    toshow[i].style.display = "block";
  }
  console.log("all");
}

// show active only
function showActive() {
  var toshow = document.getElementsByTagName("LI");
  for(let i = 0; i < toshow.length; i++) {
    if(toshow[i].classList.contains("completed")) {
      toshow[i].style.display = "none";
    } else {
      toshow[i].style.display = "block";
    }
  }
  console.log("active only");
}

// show completed only
function showCompleted() {
  var toshow = document.getElementsByTagName("LI");
  for(let i = 0; i < toshow.length; i++) {
    if(toshow[i].classList.contains("completed")) {
      toshow[i].style.display = "block";
    } else {
      toshow[i].style.display = "none";
    }
  }
  console.log("completed only");
}

// remove completed 
function removeCompleted() {
  var toshow = document.getElementsByTagName("LI");
  for(let i = 0; i < toshow.length; i++) {
    if(toshow[i].classList.contains("completed")) {
      toshow[i].remove();
    }
  }
  
  console.log("remove completed");
}