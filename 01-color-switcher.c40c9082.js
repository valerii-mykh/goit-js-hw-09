const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),bodyStyle:document.querySelector("body")};let e=null,o=!0;t.btnStart.addEventListener("click",(()=>{o&&(o=!1,e=setInterval((()=>{let e=[`#${Math.floor(16777215*Math.random()).toString(16)}`];t.bodyStyle.style.backgroundColor=e}),1e3))})),t.btnStop.addEventListener("click",(()=>{o=!0,clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.c40c9082.js.map
