//Create a "close"btn and append it to each list

var myList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myList[i].appendChild(span);
}

//Click on "close"btn to hide the list item.

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";

  }
}

//add a checked symbol on clicking the target//

var list = document.querySelector('ol');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);



//Create a new list item by clicking on add btn.

function addTask() {

  var li = document.createElement("li");
  var inValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inValue);

  li.appendChild(t);
  if (inValue === '') {
    alert("PLease write the task first.");
  }
  else {
    document.getElementById("second").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");

  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++)
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";

    }
}












