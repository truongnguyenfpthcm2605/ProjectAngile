

var index = 0;
function back() {
    index--;
    if (index < 0) index = 7;
    var link = document.getElementById("image");
    link.src = "imgbanner/img" + index + ".jpg";
   
}
function next() {
    index++;
    if (index > 7) index = 0;
    var link = document.getElementById("image");
    link.src = "imgbanner/img" + index + ".jpg";
  
    link.style = "transition: all .5s linear";
}
setInterval("next()",3000);


