var iframe = document.createElement("iframe");
iframe.src = chrome.extension.getURL("callout.html");
var gdiv = document.getElementById("rhs");
gdiv.insertBefore(iframe, gdiv.childNodes[0]);