
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

//ustunu cizmek icin
let list = document.querySelector("#list");   
list.addEventListener(
  "click",
  function (ustunuciz) {
    if (ustunuciz.target.tagName === "LI") {
      ustunuciz.target.classList.toggle("checked");
    }
  },
  false
);


//listeye li eklemek
let listDOM = document.querySelector('#list')

function newElement() {
    let liDOM = document.createElement('li');
    let gorev = document.getElementById("task").value;
    //liDOM.innerHTML = ` ${gorev} `
    //listDOM.append(liDOM)
    let textnode = document.createTextNode(gorev);
    liDOM.appendChild(textnode)
    

    // (/^\s+|\s+$/g, "") Find as many whitespace characters from the beginning of the 
    // string as possible or as many whitespace characters from the end 
    // as possible.

    if (gorev ==="" ||  gorev.replace(/^\s+|\s+$/g, "").length == 0) {
        $(".error").toast("show"); 
    }
     else {
        $(".success").toast("show");
        document.getElementById("list").appendChild(liDOM);
        document.getElementById("task").value = "";     //inputu, ekledikten sonra sıfırlar
    } 
    

//li elemanlarını silmek için

//let lisil = document.getElementsByTagName("LI");
/*
let gorevler = document.getElementsByTagName("LI")
let index;
for (index=0; index<gorevler.length; index++) {

}
*/

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}  

var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  liDOM.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

}

  