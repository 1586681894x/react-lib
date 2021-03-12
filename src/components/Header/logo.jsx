import React,{ useEffect,useRef } from 'react';

export default function(props){
    const el = useRef();

    useEffect(()=>{
        //bindHover(el.current);
    })

    return (
        <div ref={el} className="logo fl-center" >
            <span>Medicinal Materials</span>
        </div>
    )
}

// hover
function bindHover(e){
    let el = e.target;
    let { CSSPlugin, TimelineLite,SplitText,Back } = window;
    let tagline = new SplitText(".logo");
    let tl = new TimelineLite();
    tl.staggerFrom(tagline.chars, 0.3, {opacity:0, rotation:90, scale:0, x:20, y:60, ease:Back.easeOut}, 0.1);
    //
    el.onmouseenter = ()=>{
        tl.restart();
    };
}
