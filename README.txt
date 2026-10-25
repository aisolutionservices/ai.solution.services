AI SOLUTION SERVICES WEBSITE (English + Hindi)
Prince Gupta, Agra, India

FOLDER STRUCTURE
index.html          Language page (English or Hindi)
style.css           All design and colours
script.js           Small script (highlights current menu, plays one video or audio at a time, review form and approved reviews)
README.txt          This file
README.md           Short GitHub description and copyright notice
robots.txt          Search engine rules (allows all pages)
assets/fonts/       Mukta font files (Hindi + English)
assets/img/         8 sample posters, 6 client posters, 1 blurred client LinkedIn post, favicon, 5 video thumbnails, UPI QR code
assets/video/       5 demo videos
assets/audio/       1 audio sample
en/                 English website, every section on its own page
hi/                 Hindi website, every section on its own page

PAGES (the same file names are inside en/ and hi/)
index.html (Home), about.html, education.html, why-different.html, services.html,
demo.html, process.html, payment-policy.html, refund-policy.html,
revision-policy.html, terms.html, privacy-policy.html, faq.html, reviews.html, contact.html

HOW TO OPEN
Double-click index.html in a browser. Fonts are included, so no internet is needed for them.

HOW TO PUBLISH
Upload the whole folder (index.html, style.css, script.js, assets, en, hi) to your hosting.
Keep the folder structure as it is.

REVIEWS
Clients write a review on reviews.html. It is saved in a private Google Sheet and shows on the website only after you type YES in the Approved column.
After you deploy the Google Apps Script (reviews-apps-script.gs), put its web app address in script.js: REVIEW_ENDPOINT="...". Until then the form shows "Reviews are not open yet".

HOW TO EDIT
Text: open the page file in en/ or hi/ in a text editor.
Colours and layout: style.css.
Keep the English and Hindi pages in sync when you change prices or policies.

---
फोल्डर की बनावट
index.html          भाषा चुनने का पेज (English या हिन्दी)
style.css           पूरा डिज़ाइन और रंग
script.js           छोटी स्क्रिप्ट
assets/img/         8 सैंपल पोस्टर, 6 क्लाइंट पोस्टर, 1 ब्लर किया हुआ क्लाइंट का लिंक्डइन पोस्ट, फेविकॉन, 5 वीडियो थंबनेल, यूपीआई क्यूआर कोड
assets/video/       5 डेमो वीडियो
assets/audio/       1 ऑडियो सैंपल
en/ और hi/          अंग्रेज़ी और हिन्दी वेबसाइट, हर सेक्शन अलग पेज पर

रिव्यू: क्लाइंट reviews.html पर रिव्यू लिखता है। वह एक निजी Google Sheet में सहेजा जाता है और Approved कॉलम में YES लिखने पर ही वेबसाइट पर दिखता है। Google Apps Script (reviews-apps-script.gs) चलाने के बाद उसका पता script.js में REVIEW_ENDPOINT="..." में डालें। तब तक फॉर्म "रिव्यू अभी शुरू नहीं हुए हैं" दिखाता है।
कैसे खोलें: index.html को ब्राउज़र में खोलें (फ़ॉन्ट साथ में हैं, इंटरनेट की ज़रूरत नहीं)।
कैसे पब्लिश करें: पूरा फोल्डर, उसी बनावट में, अपनी होस्टिंग पर अपलोड करें।
बदलाव: टेक्स्ट के लिए en/ या hi/ का पेज खोलें, रंग और लेआउट के लिए style.css।
कीमत या नीति बदलें तो अंग्रेज़ी और हिन्दी दोनों पेज बदलें।

LATER (after you get your website address): add canonical links, a sitemap.xml and Open Graph image tags with the full address.
बाद में (वेबसाइट का पता मिलने पर): पूरे पते के साथ canonical लिंक, sitemap.xml और Open Graph इमेज टैग जोड़ें।

COPYRIGHT AND LICENSING
(c) 2026 AI Solution Services. All Rights Reserved.

This website, its source code, content and visual design are the intellectual property of Prince Gupta (AI Solution Services), except third-party fonts (Mukta), which remain under their own licence.

Unauthorized copying, redistribution, modification or commercial use of any part of this repository without explicit written permission is strictly prohibited.
