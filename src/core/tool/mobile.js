//
// (function(doc, win) {
//     var docEl = doc.documentElement,
//         resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
//         recalc = function() {
//             var clientWidth = docEl.clientWidth;
//             if (!clientWidth) return;
//             if (clientWidth >= 750) {
//                 docEl.style.fontSize = "100px";
//             } else {
//                 docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
//             }
//         };
//
//     if (!doc.addEventListener) return;
//     win.addEventListener(resizeEvt, recalc, false);
//     doc.addEventListener("DOMContentLoaded", recalc, false);
// })(document, window);
//
// window.addEventListener('offline',function(){
//     //Toast.info('亲，没网啦~~~');
// })
//
//
// var u = navigator.userAgent;
// if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
//     window.addEventListener("resize", function() {
//         if(document.activeElement.tagName==="INPUT" || document.activeElement.tagName==="TEXTAREA") {
//             window.setTimeout(function () {
//                 // document.activeElement.scrollIntoViewIfNeeded();
//                 document.activeElement.scrollIntoView(false);
//             }, 0);
//         }
//     })
// }
