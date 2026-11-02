var REVIEW_ENDPOINT="https://script.google.com/macros/s/AKfycbziP58HR9GQnm5RaST-PMX3980bRsHzx-GDLaUSYmte0_VHXRNYGuK8cAyOUZN1a01mhQ/exec";
var RV_TEXT={"en": {"labels": ["Not good", "Could be better", "Okay", "Good", "Loved it"], "tap": "Tap a face to rate", "eRate": "Tap a face to rate first", "eName": "Enter your name", "eSvc": "Choose the service you used", "eText": "Write a short review (at least 10 characters)", "closed": "Reviews are not open yet. Please check back soon.", "sending": "Sending…", "ok": "Thank you. Your review will appear after I approve it.", "fail": "Couldn't send your review. Check your internet and try again.", "send": "Send review"}, "hi": {"labels": ["अच्छा नहीं", "बेहतर हो सकता था", "ठीक-ठाक", "अच्छा", "बहुत पसंद आया"], "tap": "रेटिंग देने के लिए किसी चेहरे पर टैप करें", "eRate": "पहले किसी चेहरे पर टैप करके रेटिंग दें", "eName": "अपना नाम लिखें", "eSvc": "वह सेवा चुनें जो आपने ली", "eText": "कम से कम 10 अक्षरों का छोटा रिव्यू लिखें", "closed": "रिव्यू अभी शुरू नहीं हुए हैं। कृपया थोड़ी देर बाद आइए।", "sending": "भेजा जा रहा है…", "ok": "धन्यवाद। मेरी मंज़ूरी के बाद आपका रिव्यू दिखेगा।", "fail": "आपका रिव्यू नहीं भेजा जा सका। इंटरनेट जाँचकर फिर कोशिश करें।", "send": "रिव्यू भेजें"}};
var RV_EMOJI=["\ud83d\ude1e", "\ud83d\ude15", "\ud83d\ude10", "\ud83d\ude42", "\ud83d\ude0d"];
function rvInit(){
  var L=document.documentElement.lang==="hi"?"hi":"en";
  var T=RV_TEXT[L];
  var form=document.querySelector("form.rvform");
  if(form){
    var rating=0,opened=Date.now();
    var btns=form.querySelectorAll(".faces button");
    var lab=form.querySelector(".rvlab"),err=form.querySelector(".rverr"),ok=form.querySelector(".rvok"),send=form.querySelector("button[type=submit]");
    var press=function(b){for(var j=0;j<btns.length;j++){btns[j].setAttribute("aria-pressed",btns[j]===b?"true":"false");}};
    for(var i=0;i<btns.length;i++){(function(b){b.addEventListener("click",function(){rating=Number(b.getAttribute("data-v"));press(b);lab.textContent=T.labels[rating-1];err.textContent="";});})(btns[i]);}
    form.addEventListener("submit",function(ev){
      ev.preventDefault();ok.textContent="";
      var n=form.elements["n"].value.replace(/\s+/g," ").trim(),s=form.elements["s"].value,t=form.elements["t"].value.replace(/\s+/g," ").trim();
      if(!rating){err.textContent=T.eRate;return;}
      if(n.length<2){err.textContent=T.eName;return;}
      if(!s){err.textContent=T.eSvc;return;}
      if(t.length<10){err.textContent=T.eText;return;}
      err.textContent="";
      if(!REVIEW_ENDPOINT){err.textContent=T.closed;return;}
      send.disabled=true;send.textContent=T.sending;
      fetch(REVIEW_ENDPOINT,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({n:n,s:s,r:rating,t:t,l:L,w:form.elements["w"].value,ft:Date.now()-opened})}).then(function(){
        ok.textContent=T.ok;form.reset();rating=0;press(null);lab.textContent=T.tap;send.textContent=T.send;
      }).catch(function(){err.textContent=T.fail;send.disabled=false;send.textContent=T.send;});
    });
  }
  var lists=document.querySelectorAll("[data-reviews]");
  if(lists.length&&REVIEW_ENDPOINT){
    fetch(REVIEW_ENDPOINT).then(function(r){return r.json();}).then(function(d){
      if(!d||!d.ok||!d.reviews||!d.reviews.length){return;}
      for(var a=0;a<lists.length;a++){
        var list=lists[a],lim=list.getAttribute("data-reviews")==="all"?d.reviews.length:Number(list.getAttribute("data-reviews"));
        list.innerHTML="";
        for(var k=0;k<d.reviews.length&&k<lim;k++){
          var x=d.reviews[k],r=Number(x.r);if(!(r>=1&&r<=5)){continue;}
          var card=document.createElement("div");card.className="slip";
          var stub=document.createElement("div");stub.className="stub";
          var em=document.createElement("span");em.className="em";em.textContent=RV_EMOJI[r-1];
          var lb=document.createElement("span");lb.className="lb";lb.textContent=T.labels[r-1];
          stub.appendChild(em);stub.appendChild(lb);
          var bd=document.createElement("div");bd.className="bd";
          var tx=document.createElement("p");tx.className="tx";tx.textContent=x.t;
          var by=document.createElement("p");by.className="by";
          var when="";if(x.d){var dt=new Date(x.d+"T00:00:00");if(!isNaN(dt.getTime())){when=" \u00B7 "+dt.toLocaleDateString(L==="hi"?"hi-IN":"en-IN",{day:"numeric",month:"short",year:"numeric"});}}
          by.textContent=x.n+" \u00B7 "+x.s+when;
          bd.appendChild(tx);bd.appendChild(by);card.appendChild(stub);card.appendChild(bd);list.appendChild(card);
        }
      }
    }).catch(function(){});
  }
}
document.addEventListener("DOMContentLoaded",function(){
  var on=document.querySelector("nav a.on");
  if(on){
    var nav=on.parentNode;
    nav.scrollLeft+=on.getBoundingClientRect().left-nav.getBoundingClientRect().left-(nav.clientWidth-on.offsetWidth)/2;
  }
  var vids=document.querySelectorAll("video,audio");
  vids.forEach(function(v){v.addEventListener("play",function(){vids.forEach(function(o){if(o!==v){o.pause();}});});});
  rvInit();
});
