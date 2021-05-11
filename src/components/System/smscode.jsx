import React, { useState,useEffect } from 'react';
import _ from 'lodash';

const TEXT = ['获取验证码','$$ s'];

export default function (props) {
    const [txt,setTxt] = useState(TEXT[0]);
    const [num,setNum] = useState(props.num);
    let time = props.time || 60;
    let handleTxt = ()=>{
        clearInterval(handleTxt.timer);
        handleTxt.time = time;
        handleTxt.timer = setInterval(()=>{
            --handleTxt.time;
            if(handleTxt.time<1){
                setTxt(TEXT[0])
            }else{
                setTxt(TEXT[1].replace('$$',handleTxt.time))
            }
        },1000)
    }
    let handleSms = ()=>{
        if(num && !(handleTxt.time>0)){
            handleTxt();
            _.api('sys.sms',{mobileNo:num},{
                onComplete:(res)=>{
                    props.onEnd && props.onEnd(res);
                }
            })
        }
    }
    //
    useEffect(()=>{
        props.onRef && props.onRef({
            setTxt,
            setNum
        })
    })

    return <span className={`${props.className||''} ${num?'code':''}`} onClick={handleSms}>{txt}</span>
}
