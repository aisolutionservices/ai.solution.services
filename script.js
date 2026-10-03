document.addEventListener("DOMContentLoaded",function(){
  var on=document.querySelector("nav a.on");
  if(on){on.scrollIntoView({inline:"center",block:"nearest"});}
  var vids=document.querySelectorAll("video");
  vids.forEach(function(v){v.addEventListener("play",function(){vids.forEach(function(o){if(o!==v){o.pause();}});});});
});
