/* AI Solution Services - guided chat assistant (Step 1): services, prices, policies and contact details; custom projects and quotations go to WhatsApp or email. No AI/API, no server, no cost.
   Reads window.AIS_DATA (text taken from the site's own pages). English + Hindi. */
(function () {
  var NUM = "919760695417";
  var BASE = window.AIS_BASE || "";
  var U = {
    en: { name: "Assistant", open: "Open chat assistant", close: "Close",
      hi: "Hi! I can explain our services, prices and policies in simple words. What would you like to know?",
      guide: "Which service do I need?", pick: "Tell me what you need:",
      wa: "Message on WhatsApp", menu: "Back to menu", full: "Read the full page",
      more: "Read more", less: "Show less", talk: "Talk to me on WhatsApp",
      msg: "Hello, I want to know about your AI services. My need: ", gen: "Hello, I want to know about your AI services." },
    hi: { name: "सहायक", open: "चैट सहायक खोलें", close: "बंद करें",
      hi: "नमस्ते! मैं हमारी सेवाएं, कीमतें और नियम आसान भाषा में समझा सकता हूँ। आप क्या जानना चाहते हैं?",
      guide: "मुझे कौन सी सेवा चाहिए?", pick: "बताइए आपको क्या चाहिए:",
      wa: "व्हाट्सऐप पर संदेश भेजें", menu: "मेन्यू पर वापस", full: "पूरा पेज पढ़ें",
      more: "और पढ़ें", less: "कम दिखाएं", talk: "व्हाट्सऐप पर मुझसे बात करें",
      msg: "नमस्ते, मुझे आपकी एआई सेवाओं के बारे में जानना है। मेरी ज़रूरत: ", gen: "नमस्ते, मुझे आपकी एआई सेवाओं के बारे में जानना है।" }
  };

  var MAIL = "ai.solution.services.prince@gmail.com";
  var SOC = [["li", "https://www.linkedin.com/in/princegupta-aisolutions/"], ["fb", "https://www.facebook.com/profile.php?id=61595219802420"], ["ig", "https://www.instagram.com/ai.solution.services.prince"], ["yt", "https://youtube.com/@aisolutionservices"]];
  Object.assign(U.en, { soc: "Social media", socA: "Follow and connect with AI Solution Services on these platforms:", li: "LinkedIn", fb: "Facebook", ig: "Instagram", yt: "YouTube" });
  Object.assign(U.hi, { soc: "सोशल मीडिया", socA: "इन प्लेटफ़ॉर्म पर AI Solution Services से जुड़ें और हमें फ़ॉलो करें:", li: "लिंक्डइन", fb: "फेसबुक", ig: "इंस्टाग्राम", yt: "यूट्यूब" });
  Object.assign(U.en, { prices: "Services and prices", contact: "Contact details", custom: "Custom project or quotation", mail: "Email me",
    customA: "For a custom or bigger project, or a quotation, please message me on WhatsApp or email me. I will understand your need and reply with the details and the price.",
    cmsg: "Hello, I want a custom project or a quotation. My need: ",
    csub: "Custom project or quotation: AI Solution Services",
    cbody: "Hello Prince,\n\nI want to discuss a custom project or a quotation.\n\nName:\nWhat I need (short description):\nDeadline (if any):\nMy WhatsApp number:\n\nThank you.",
    cl: ["WhatsApp: " + NUM.slice(2) + ". You can message me 24 hours a day, 7 days a week.", "Email: " + MAIL, "Call timings: 8 am to 10 am and 9 pm to 11 pm.", "Location: Agra, Uttar Pradesh, India."] });
  Object.assign(U.hi, { prices: "सेवाएं और कीमतें", contact: "संपर्क जानकारी", custom: "कस्टम प्रोजेक्ट या कोटेशन", mail: "ईमेल भेजें",
    customA: "कस्टम या बड़े प्रोजेक्ट और कोटेशन के लिए कृपया मुझे व्हाट्सऐप पर संदेश भेजें या ईमेल करें। मैं आपकी ज़रूरत समझकर विवरण और कीमत बताऊँगा।",
    cmsg: "नमस्ते, मुझे कस्टम प्रोजेक्ट या कोटेशन चाहिए। मेरी ज़रूरत: ",
    csub: "कस्टम प्रोजेक्ट या कोटेशन: AI Solution Services",
    cbody: "नमस्ते प्रिंस जी,\n\nमुझे कस्टम प्रोजेक्ट या कोटेशन के बारे में बात करनी है।\n\nनाम:\nमेरी ज़रूरत (संक्षेप में):\nकब तक चाहिए (अगर कोई समय सीमा है):\nमेरा व्हाट्सऐप नंबर:\n\nधन्यवाद।",
    cl: ["व्हाट्सऐप: " + NUM.slice(2) + "। आप मुझे 24 घंटे, हफ़्ते के सातों दिन संदेश भेज सकते हैं।", "ईमेल: " + MAIL, "कॉल का समय: सुबह 8 से 10 बजे और रात 9 से 11 बजे।", "स्थान: आगरा, उत्तर प्रदेश, भारत।"] });
  var ORDER = ["process", "payment", "refund", "revision", "terms", "privacy", "why"];
  var L, T, D, root, box, log;

  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }
  function wa(text) { return "https://wa.me/" + NUM + "?text=" + encodeURIComponent(text); }
  function mail(sub, body) { return "mailto:" + MAIL + "?subject=" + encodeURIComponent(sub) + "&body=" + encodeURIComponent(body); }
  function scroll() { log.scrollTop = log.scrollHeight; }
  function bot() { var b = el("div", "ais-b ais-bot"); log.appendChild(b); return b; }
  function me(t) { log.appendChild(el("div", "ais-b ais-me", t)); }
  function btns(list) {
    var w = el("div", "ais-btns");
    list.forEach(function (x) {
      var b = el(x.href ? "a" : "button", "ais-btn" + (x.cls ? " " + x.cls : ""), x.t);
      if (x.href) { b.href = x.href; if (x.href.indexOf("mailto:") !== 0) { b.target = "_blank"; b.rel = "noopener"; } }
      else b.onclick = x.fn;
      w.appendChild(b);
    });
    log.appendChild(w); scroll();
  }
  function menu() {
    var list = [{ t: T.guide, fn: guide }, { t: T.prices, fn: prices }];
    ORDER.forEach(function (k) { list.push({ t: D.top[k].t, fn: function () { topic(k); } }); });
    list.push({ t: T.contact, fn: contact });
    list.push({ t: T.soc, fn: social });
    list.push({ t: T.custom, fn: custom });
    list.push({ t: T.talk, href: wa(T.gen), cls: "ais-wa" });
    btns(list);
  }
  function home() { log.innerHTML = ""; bot().textContent = T.hi; menu(); }
  function back() { btns([{ t: T.menu, fn: function () { menu(); } }]); }
  function guide() {
    me(T.guide); bot().textContent = T.pick;
    btns(D.svc.map(function (r) { return { t: r[0], fn: function () { answer(r); } }; }).concat([{ t: T.custom, fn: custom }]));
  }
  function answer(r) {
    me(r[0]); bot().textContent = r[1];
    btns([{ t: T.wa, href: wa(T.msg + r[0]), cls: "ais-wa" }, { t: T.guide, fn: guide }, { t: T.menu, fn: menu }]);
  }
  function prices() {
    me(T.prices); var b = bot(), ul = el("ul"); b.appendChild(ul);
    /* The last row of D.svc is "I am still not sure" (no price), so it is left out of this list. */
    D.svc.slice(0, -1).forEach(function (r) { ul.appendChild(el("li", null, r[1])); });
    btns([{ t: T.full, href: BASE + L + "/services.html" }, { t: T.custom, fn: custom }, { t: T.wa, href: wa(T.gen), cls: "ais-wa" }, { t: T.menu, fn: menu }]);
  }
  function contact() {
    me(T.contact); var b = bot();
    T.cl.forEach(function (x) { b.appendChild(el("p", null, x)); });
    btns([{ t: T.wa, href: wa(T.gen), cls: "ais-wa" }, { t: T.mail, href: mail(T.csub, T.cbody) }, { t: T.soc, fn: social }, { t: T.menu, fn: menu }]);
  }
  function social() {
    me(T.soc); bot().textContent = T.socA;
    btns(SOC.map(function (x) { return { t: T[x[0]], href: x[1] }; }).concat([{ t: T.wa, href: wa(T.gen), cls: "ais-wa" }, { t: T.menu, fn: menu }]));
  }
  function custom() {
    me(T.custom); bot().textContent = T.customA;
    btns([{ t: T.wa, href: wa(T.cmsg), cls: "ais-wa" }, { t: T.mail, href: mail(T.csub, T.cbody) }, { t: T.menu, fn: menu }]);
  }
  function topic(k) {
    var d = D.top[k], b, ul = null, n = 0;
    me(d.t); b = bot();
    d.l.forEach(function (x) {
      n += x[1].length;
      if (x[0] === "li") {
        if (!ul) { ul = el("ul"); b.appendChild(ul); }
        ul.appendChild(el("li", null, x[1]));
      } else {
        ul = null;
        b.appendChild(el(x[0] === "p" || x[0] === "tr" ? "p" : "b", x[0] === "tr" ? "ais-row" : null, x[1]));
      }
    });
    if (n > 700) {
      b.classList.add("ais-clip");
      var t = el("button", "ais-link", T.more);
      t.onclick = function () { var c = b.classList.toggle("ais-clip"); t.textContent = c ? T.more : T.less; };
      log.appendChild(t);
    }
    btns([{ t: T.full, href: BASE + L + "/" + d.f + ".html" }, { t: T.wa, href: wa(T.gen), cls: "ais-wa" }, { t: T.menu, fn: menu }]);
  }
  function css() {
    if (document.getElementById("ais-css")) return;
    var s = el("style"); s.id = "ais-css";
    s.textContent =
      ".ais{--a:#E8871E;--h:#1B2A5C;--c:#fff;--i:#1B1B2F;--l:#EBD9B8;--w:#167A3C;font:400 16px/1.5 Mukta,'Noto Sans Devanagari',system-ui,sans-serif;color:var(--i)}" +
      "@media(prefers-color-scheme:dark){:root:not([data-theme=light]) .ais{--c:#1F2342;--i:#F3EEE2;--l:#3A3F6B;--h:#FFD08A}}" +
      ":root[data-theme=dark] .ais{--c:#1F2342;--i:#F3EEE2;--l:#3A3F6B;--h:#FFD08A}" +
      ".ais-fab{position:fixed;left:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));width:56px;height:56px;border-radius:50%;border:0;background:var(--a);color:#1B1B2F;font-size:26px;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.3);z-index:50}" +
      ".ais-box{position:fixed;left:12px;bottom:calc(84px + env(safe-area-inset-bottom,0px));width:min(380px,calc(100vw - 24px));height:min(560px,calc(100vh - 120px));display:none;flex-direction:column;background:var(--c);border:1px solid var(--l);border-radius:14px;box-shadow:0 8px 28px rgba(0,0,0,.3);z-index:50;overflow:hidden}" +
      ".ais-box.on{display:flex}" +
      ".ais-top{display:flex;justify-content:space-between;align-items:center;padding:10px 14px;background:var(--h);color:#fff;font-weight:800}" +
      ".ais-top button{background:none;border:0;color:#fff;font-size:22px;cursor:pointer}" +
      ".ais-log{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px}" +
      ".ais-b{max-width:92%;padding:9px 12px;border-radius:12px;overflow-wrap:anywhere}" +
      ".ais-bot{background:rgba(232,135,30,.14);align-self:flex-start}.ais-bot p,.ais-bot ul{margin:4px 0}.ais-bot ul{padding-left:18px}" +
      ".ais-row{border-top:1px solid var(--l);padding-top:4px}" +
      ".ais-me{background:var(--h);color:#fff;align-self:flex-end}" +
      ".ais-clip{max-height:200px;overflow:hidden}" +
      ".ais-btns{display:flex;flex-direction:column;gap:6px}" +
      ".ais-btn{display:block;text-align:left;padding:9px 12px;border:1px solid var(--a);border-radius:10px;background:transparent;color:var(--i);font:inherit;cursor:pointer;text-decoration:none}" +
      ".ais-btn:hover{background:rgba(232,135,30,.18)}.ais-wa{background:var(--w);border-color:var(--w);color:#fff;font-weight:600}.ais-wa:hover{background:var(--w);opacity:.9}" +
      ".ais-link{align-self:flex-start;background:none;border:0;color:var(--h);font:inherit;text-decoration:underline;cursor:pointer;padding:0 4px}";
    document.head.appendChild(s);
  }
  function init(lang) {
    L = lang || (document.documentElement.lang === "hi" ? "hi" : "en");
    T = U[L]; D = window.AIS_DATA[L];
    css();
    if (root) root.remove();
    root = el("div", "ais");
    var fab = el("button", "ais-fab", "💬"); fab.setAttribute("aria-label", T.open);
    box = el("div", "ais-box");
    var top = el("div", "ais-top"); top.appendChild(el("span", null, T.name));
    var x = el("button", null, "×"); x.setAttribute("aria-label", T.close); top.appendChild(x);
    log = el("div", "ais-log"); box.appendChild(top); box.appendChild(log);
    fab.onclick = function () { box.classList.toggle("on"); if (!log.children.length) home(); };
    x.onclick = function () { box.classList.remove("on"); };
    root.appendChild(box); root.appendChild(fab); document.body.appendChild(root);
  }
  window.AIS_ASSIST = { init: init, open: function () { box.classList.add("on"); if (!log.children.length) home(); } };
  if (!window.AIS_PREVIEW) { if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { init(); }); else init(); }
})();
