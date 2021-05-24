import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { loadable } from "@/components/System/loadable";
import Views  from './views.js';

let req = require.context('@/views/', true, /\.jsx$/);
let keys = Views || req.keys();
let modulesLayout = {};
let modules = [];
// modules 、 Layout.jsx
keys.map(key => {
    let name = key.replace(/^\.(.+)\.jsx$/,'$1').replace(/:/g,'/:');
    let res = {
        key:key,
        path:name,
        exact:false,
        children:[],
        component:''
    }
    // layout
    if(name.indexOf('/layout')>-1){
        res.exact = true;
        res.path = name.replace('/layout','');
        res.component = key.replace(/^\.\//,'').replace(/.jsx$/,'')
        modulesLayout[res.path] = res;
    }else if(name.indexOf('/modules')>-1){
        //
    }else{
        res.component = key.replace(/^\.\//,'').replace(/.jsx$/,'')
    }
    //
    if(res.component){
        let url = res.component;
        res.component = Views ? loadable(import(`@/views/${url}.jsx`)) : req(key).default ?? req(key)
        modules.push(res);
    }
    return true;
})

// layout - children
Object.keys(modulesLayout).forEach((key)=>{
    for(let i = modules.length - 1;i>-1;i--){
        let v = modules[i];
        if(v.path !== key && v.path.indexOf(key)>-1){
            modulesLayout[key].children?.push(v);
            modules.splice(i,1);
        }
    }
})

//
export default function RouteWeb(props) {
    React.useEffect(() => {
        window.module = keys;
    });

    return (
        <Route render={
            ()=>{
                return <Switch>
                    <Redirect exact from="/" to="/home" />
                    {
                        modules.map((item)=>{
                            if(item.children.length>0){
                                return <item.component key={item.key}>{getRoutes(item)}</item.component>
                            }else{
                                return <Route {...item} />
                            }
                        })
                    }
                    <Redirect from="*" to="/resouce404" />
                </Switch>
            }
        }/>

    )
}

// routes - get
function getRoutes(item){
    return item.children?.map((props)=>{ return <Route  {...props} /> })
}
