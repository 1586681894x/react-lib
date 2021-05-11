import React from 'react';

let resource = {};

export function Hoc(options){
    return function (Com) {
        Object.keys(options).forEach((key)=>{
            let fun = getHoc(key);
            if(fun){
                Com = fun.call(options,Com)
            }
        })
        return Com;
    }
}

export function createHoc(key,Com){
    resource[key] = Com;
}

export function getHoc(key){
    return resource[key];
}

const path = require('path')
const files = require.context('.', false, /\.js$/)
files.keys().forEach(key => {
    const name = path.basename(key, '.js') // 提取出用 ‘/' 隔开的path的最后一部分,path.basename(p, [ext])。 p要处理的path,ext要过滤的字符
    if(name === 'index'){return;}
    createHoc(name,files(key).default || files(key))
})

