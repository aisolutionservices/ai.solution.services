/* AI Solution Services - guided chat assistant (Step 1). No AI/API, no server, no cost.
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

  Object.assign(U.en, { live: "Try a live demo", lposter: "Make a demo poster", lemail: "Make demo email drafts",
    fname: "Business name", fhead: "Headline or offer", fdet: "Extra line for the email (optional)", fstyle: "Style", fpur: "Purpose",
    make: "Make demo", dl: "Download poster", copy: "Copy draft", copied: "Copied", err: "Enter the business name (at least 2 characters).",
    save: "Nothing you type is saved or sent anywhere.", wm: "AI Solution Services", nc: "This is not for commercial use",
    dmo: "DEMO PREVIEW: template design, not final AI work", dmoai: "DEMO PREVIEW: AI-made background + your text, not final work", nosave: "For viewing only. Download is turned off.", sub: "Subject",
    sty: ["Blue-Orange", "Green-Yellow", "Red-Pink"], pur: ["Payment reminder", "New offer", "Thank you"], pick2: "What do you want to try?" });
  Object.assign(U.hi, { live: "लाइव डेमो आज़माएं", lposter: "डेमो पोस्टर बनाएं", lemail: "डेमो ईमेल ड्राफ्ट बनाएं",
    fname: "बिज़नेस का नाम", fhead: "हेडलाइन या ऑफ़र", fdet: "ईमेल में जोड़ने की बात (वैकल्पिक)", fstyle: "स्टाइल", fpur: "मकसद",
    make: "डेमो बनाएं", dl: "पोस्टर डाउनलोड करें", copy: "ड्राफ्ट कॉपी करें", copied: "कॉपी हो गया", err: "बिज़नेस का नाम लिखें (कम से कम 2 अक्षर)।",
    save: "आप जो लिखेंगे वह कहीं सेव या भेजा नहीं जाएगा।", wm: "AI Solution Services", nc: "This is not for commercial use | व्यावसायिक उपयोग के लिए नहीं",
    dmo: "डेमो प्रीव्यू: टेम्पलेट डिज़ाइन, अंतिम काम नहीं", dmoai: "डेमो प्रीव्यू: एआई से बना बैकग्राउंड + आपका टेक्स्ट, अंतिम काम नहीं", nosave: "यह सिर्फ़ देखने के लिए है। डाउनलोड बंद है।", sub: "विषय",
    sty: ["नीला-केसरिया", "हरा-पीला", "लाल-गुलाबी"], pur: ["भुगतान याद दिलाना", "नया ऑफ़र", "धन्यवाद"], pick2: "आप क्या आज़माना चाहते हैं?" });
  var MAILS = {
    en: [[["A gentle reminder from {n}", "Hello, this is a friendly reminder from {n}. {o} Thank you for your support."],
          ["Quick note from {n}", "Hi, a small reminder from {n}. {o} If you have already done it, please ignore this message."]],
         [["A special offer from {n}", "Hello, {n} has something for you. {o} We would love to serve you."],
          ["{n}: this week only", "Hi, a quick update from {n}. {o} Message us to know more."]],
         [["Thank you from {n}", "Dear customer, thank you for choosing {n}. {o} We look forward to serving you again."],
          ["We appreciate you", "Hello, the team at {n} says thank you for your trust. {o}"]]],
    hi: [[["{n} की ओर से एक विनम्र याद दिलाना", "नमस्ते, {n} की ओर से एक छोटा सा अनुरोध। {o} आपके सहयोग के लिए धन्यवाद।"],
          ["{n} की ओर से छोटा संदेश", "नमस्ते, {n} की ओर से याद दिलाना। {o} अगर आप यह कर चुके हैं, तो इस संदेश को अनदेखा करें।"]],
         [["{n} की ओर से खास ऑफ़र", "नमस्ते, {n} के पास आपके लिए कुछ है। {o} हमें आपकी सेवा करके खुशी होगी।"],
          ["{n}: सिर्फ़ इस हफ़्ते", "नमस्ते, {n} की ओर से एक ज़रूरी सूचना। {o} ज़्यादा जानने के लिए हमें संदेश करें।"]],
         [["{n} की ओर से धन्यवाद", "प्रिय ग्राहक, {n} को चुनने के लिए धन्यवाद। {o} हम आपकी फिर सेवा करने के लिए उत्सुक हैं।"],
          ["आपका भरोसा हमारे लिए ज़रूरी है", "नमस्ते, {n} की पूरी टीम की ओर से आपके भरोसे के लिए धन्यवाद। {o}"]]]
  };
  var FONT = "Mukta,'Noto Sans Devanagari',system-ui,sans-serif";
  var ORDER = ["process", "payment", "refund", "revision", "terms", "privacy", "why"];
  var L, T, D, root, box, log;

  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }
  function wa(text) { return "https://wa.me/" + NUM + "?text=" + encodeURIComponent(text); }
  function scroll() { log.scrollTop = log.scrollHeight; }
  function bot() { var b = el("div", "ais-b ais-bot"); log.appendChild(b); return b; }
  function me(t) { log.appendChild(el("div", "ais-b ais-me", t)); }
  function btns(list) {
    var w = el("div", "ais-btns");
    list.forEach(function (x) {
      var b = el(x.href ? "a" : "button", "ais-btn" + (x.cls ? " " + x.cls : ""), x.t);
      if (x.href) { b.href = x.href; b.target = "_blank"; b.rel = "noopener"; }
      else b.onclick = x.fn;
      w.appendChild(b);
    });
    log.appendChild(w); scroll();
  }
  function menu() {
    var list = [{ t: T.guide, fn: guide }, { t: T.live, fn: live }];
    ORDER.forEach(function (k) { list.push({ t: D.top[k].t, fn: function () { topic(k); } }); });
    list.push({ t: T.talk, href: wa(T.gen), cls: "ais-wa" });
    btns(list);
  }
  function home() { log.innerHTML = ""; bot().textContent = T.hi; menu(); }
  function back() { btns([{ t: T.menu, fn: function () { menu(); } }]); }
  function guide() {
    me(T.guide); bot().textContent = T.pick;
    btns(D.svc.map(function (r) { return { t: r[0], fn: function () { answer(r); } }; }));
  }
  function answer(r) {
    me(r[0]); bot().textContent = r[1];
    btns([{ t: T.wa, href: wa(T.msg + r[0]), cls: "ais-wa" }, { t: T.guide, fn: guide }, { t: T.menu, fn: menu }]);
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
  function field(b, label, max, ph) {
    b.appendChild(el("label", null, label));
    var i = el("input", "ais-in"); i.maxLength = max; if (ph) i.placeholder = ph; b.appendChild(i); return i;
  }
  function pickSel(b, label, arr) {
    b.appendChild(el("label", null, label));
    var s = el("select", "ais-in");
    arr.forEach(function (x, k) { var o = el("option", null, x); o.value = k; s.appendChild(o); });
    b.appendChild(s); return s;
  }
  function live() {
    me(T.live); bot().textContent = T.pick2;
    btns([{ t: T.lposter, fn: formPoster }, { t: T.lemail, fn: formEmail }, { t: T.menu, fn: menu }]);
  }
  function form(title, build, run) {
    me(title); var b = bot(), got = build(b), e = el("div", "ais-err"), note = el("small", null, T.save);
    var go = el("button", "ais-btn ais-wa", T.make);
    go.onclick = function () { if (got.n.value.trim().length < 2) { e.textContent = T.err; return; } e.textContent = ""; go.disabled = true; run(got); };
    b.appendChild(e); b.appendChild(go); b.appendChild(note); scroll();
  }
  function bgList() { return window.AIS_BG || []; }
  function formPoster() {
    var bg = bgList();
    form(T.lposter, function (b) {
      return { n: field(b, T.fname, 40), h: field(b, T.fhead, 70), s: pickSel(b, T.fstyle, bg.length ? bg.map(function (x) { return x.name[L] || x.name.en; }) : T.sty) };
    }, function (g) {
      poster(g.n.value.trim(), g.h.value.trim(), +g.s.value, function (c) {
        var b = bot(); c.className = "ais-cv"; b.appendChild(c); b.appendChild(el("small", null, T.nosave));
        btns([{ t: T.lposter, fn: formPoster }, { t: T.wa, href: wa(T.gen), cls: "ais-wa" }, { t: T.menu, fn: menu }]);
      });
    });
  }
  function wrap(g, txt, x, y, w, lh) {
    var words = txt.split(" "), line = "", n = 0;
    for (var k = 0; k < words.length; k++) {
      var t = line ? line + " " + words[k] : words[k];
      if (g.measureText(t).width > w && line) { g.fillText(line, x, y + n * lh); n++; line = words[k]; if (n > 3) break; } else line = t;
    }
    if (n <= 3) g.fillText(line, x, y + n * lh);
  }
  function poster(name, head, st, done) {
    var c = el("canvas"); c.width = c.height = 720; var g = c.getContext("2d"); g.scale(2 / 3, 2 / 3);
    var bg = bgList()[st];
    function paint(img) {
      if (img) {
        var k = Math.max(1080 / img.width, 1080 / img.height);
        g.drawImage(img, (1080 - img.width * k) / 2, (1080 - img.height * k) / 2, img.width * k, img.height * k);
        g.fillStyle = "rgba(0,0,0,.4)"; g.fillRect(0, 0, 1080, 1080);
      } else {
        var P = [["#1B2A5C", "#E8871E"], ["#14532d", "#facc15"], ["#7c1d3a", "#fda4af"]][bg ? 0 : st];
        var gr = g.createLinearGradient(0, 0, 1080, 1080); gr.addColorStop(0, P[0]); gr.addColorStop(1, P[1]);
        g.fillStyle = gr; g.fillRect(0, 0, 1080, 1080);
      }
      g.fillStyle = "#fff"; g.textAlign = "center";
      g.font = "800 92px " + FONT; wrap(g, name, 540, 380, 940, 104);
      g.font = "600 54px " + FONT; wrap(g, head, 540, 650, 900, 68);
      g.save(); g.globalAlpha = 0.24; g.rotate(-Math.PI / 6); g.font = "800 56px " + FONT;
      var tw = g.measureText(T.wm).width + 160;
      for (var y = -700, r = 0; y < 1500; y += 170, r++) for (var x = -900 + (r % 2 ? tw / 2 : 0); x < 1500; x += tw) g.fillText(T.wm, x, y);
      g.restore();
      g.fillStyle = "rgba(0,0,0,.72)"; g.fillRect(0, 0, 1080, 76); g.fillRect(0, 950, 1080, 130);
      g.fillStyle = "#fff"; g.font = "800 40px " + FONT; g.fillText(T.wm + "  |  DEMO", 540, 54);
      g.font = "700 30px " + FONT; g.fillText(T.nc, 540, 1005);
      g.font = "400 26px " + FONT; g.fillText(img ? T.dmoai : T.dmo, 540, 1048);
      done(c);
    }
    if (bg) { var im = new Image(); im.onload = function () { paint(im); }; im.onerror = function () { paint(null); }; im.src = bg.src; }
    else paint(null);
  }
  function formEmail() {
    form(T.lemail, function (b) { return { n: field(b, T.fname, 40), o: field(b, T.fdet, 80), s: pickSel(b, T.fpur, T.pur) }; }, function (g) {
      var n = g.n.value.trim(), o = g.o.value.trim();
      MAILS[L][+g.s.value].forEach(function (m) {
        var f = function (x) { return x.replace(/\{n\}/g, n).replace(/\{o\}/g, o).replace(/ {2,}/g, " ").trim(); };
        var txt = "[" + T.wm + " | DEMO]\n\n" + T.sub + ": " + f(m[0]) + "\n\n" + f(m[1]) + "\n\n" + n + "\n\n" + T.nc + "\n" + T.dmo;
        var b = bot(); b.classList.add("ais-pre"); b.textContent = txt;
      });
      btns([{ t: T.lemail, fn: formEmail }, { t: T.wa, href: wa(T.gen), cls: "ais-wa" }, { t: T.menu, fn: menu }]);
    });
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
      ".ais-link{align-self:flex-start;background:none;border:0;color:var(--h);font:inherit;text-decoration:underline;cursor:pointer;padding:0 4px}" +
      ".ais-in{display:block;width:100%;padding:8px;margin:2px 0 8px;border:1px solid var(--l);border-radius:8px;background:transparent;color:var(--i);font:inherit}" +
      ".ais-bot img{max-width:100%;border-radius:8px;display:block;margin-bottom:6px}.ais-pre{white-space:pre-wrap}.ais-pre,.ais-cv{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.ais-cv{max-width:100%;width:100%;height:auto;border-radius:8px;display:block;pointer-events:none;margin-bottom:6px}.ais-err{color:#c0392b;margin:4px 0}.ais-bot label{display:block;font-weight:600}.ais-bot small{display:block;margin-top:6px;opacity:.8}";
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
    root.addEventListener("contextmenu", function (e) { if (e.target.closest && e.target.closest(".ais-pre,.ais-cv")) e.preventDefault(); });
    root.appendChild(box); root.appendChild(fab); document.body.appendChild(root);
  }
  window.AIS_ASSIST = { init: init, open: function () { box.classList.add("on"); if (!log.children.length) home(); } };
  if (!window.AIS_PREVIEW) { if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { init(); }); else init(); }
})();
