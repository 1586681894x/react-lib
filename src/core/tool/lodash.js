import _ from 'lodash';

/*  scroll animation   */
function ScrollExe(dom = document.body){
    let arr = [];
    //
    dom.querySelectorAll('div.scrollAn')?.forEach((el)=>{
        let offset = el.offsetTop;
        let h = window.innerHeight;
        el.style.transform = 'matrix(1, 0, 0, 1, 0, 50)';
        arr.push({
            el:el,
            scrollTop:offset - h - 10,
            end:{y:0}
        })
    })
    //
    ScrollExe.arr = arr;
    ScrollExe.action = _.debounce(ScrollExe.action);
    window.removeEventListener('scroll',ScrollExe.action)
    window.addEventListener('scroll',ScrollExe.action)
}

ScrollExe.action = function(){
    if(!ScrollExe.arr.length){
        window.removeEventListener('scroll',ScrollExe.action)
        return;
    }
    //
    let scrollTop = document.documentElement.scrollTop || window.pageYOffset;
    let [...arr] = ScrollExe.arr;
    arr.forEach((v,i)=>{
        if(scrollTop >= v.scrollTop){
            window.TweenMax.to(v.el, 1, v.end);
            ScrollExe.arr.splice(i,1);
        }
    })
}

_.scrollAn = ScrollExe;

/* setTimeout     */
let timer = {};
function Timeout(name,action,duration){
    clearInterval(timer[name]);
    if(action){
        timer[name] = window.setInterval(action,duration);
    }
}

_.timeout = Timeout;
