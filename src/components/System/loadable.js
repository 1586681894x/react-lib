import React from 'react';
import Loadable from 'react-loadable';


//通用的过场组件
const loadingComponent =()=>{
    return (
        <div>loading ... </div>
    )
}

export function loadable(loaderRet, loading=loadingComponent) {
    // console.log("loaderHelper", arguments);
    if(loaderRet === undefined) {
        throw new Error(`请传入参数，格式： import("xxx")`);
    }
    return Loadable({
        loader: () => loaderRet,
        loading,
        delay: 200,
        timeout: false,
    });
}
