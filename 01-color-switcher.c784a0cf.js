!function(){var t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),bodyStyle:document.querySelector("body")},e=null,n=!0;t.btnStart.addEventListener("click",(function(){n&&(n=!1,e=setInterval((function(){var e=["#".concat(Math.floor(16777215*Math.random()).toString(16))];t.bodyStyle.style.backgroundColor=e}),1e3))})),t.btnStop.addEventListener("click",(function(){n=!0,clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.c784a0cf.js.map