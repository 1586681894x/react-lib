
(function(doc, win) {
    let cw = doc.body.clientWidth;
    let docEl = doc.documentElement;
    //
    if(cw > 750){
        doc.body.removeAttribute('mobile')
        docEl.style.fontSize = '18px';
    }else{// mobile
        doc.body.setAttribute('mobile',true)
        docEl.style.fontSize = 26 * ( docEl.clientWidth / 750 ) + "px";
    }
})(document, window)

// window.addEventListener('offline',function(){
//     //Toast.info('亲，没网啦~~~');
// })

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
