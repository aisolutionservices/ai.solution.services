document.addEventListener("DOMContentLoaded",function(){
  var on=document.querySelector("nav a.on");
  if(on){
    var nav=on.parentNode;
    nav.scrollLeft+=on.getBoundingClientRect().left-nav.getBoundingClientRect().left-(nav.clientWidth-on.offsetWidth)/2;
  }
  var vids=document.querySelectorAll("video");
  vids.forEach(function(v){v.addEventListener("play",function(){vids.forEach(function(o){if(o!==v){o.pause();}});});});
});
