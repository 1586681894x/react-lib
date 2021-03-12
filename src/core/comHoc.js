import _ from 'lodash';
import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

let resource = {};

export function Hoc(options){
    if(options.path){
        return getHoc('path').bind(options);
    }else{
        return getHoc(options.type).bind(options);
    }
}

export function createHoc(key,Com){
    resource[key] = Com;
}

export function getHoc(key){
    return resource[key];
}

//
createHoc('path',function (Com) {
    let conf = this;
    return function(props){// component
        return (
            <Route path={conf.path} component={Com}/>
        )
    }
})


const path = require('path')
const files = require.context('./comHoc', false, /\.js$/)
files.keys().forEach(key => {
    const name = path.basename(key, '.js') // 提取出用 ‘/' 隔开的path的最后一部分,path.basename(p, [ext])。 p要处理的path,ext要过滤的字符
    createHoc(name,files(key).default || files(key))
})

