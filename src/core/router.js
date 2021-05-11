import React from "react";
import Fade from '@material-ui/core/Fade';
import { Switch, Route, Redirect } from "react-router-dom";
import { loadable } from "@/components/System/loadable";

// let keys = require.context('@/views/', true, /\.jsx$/).keys();
let keys = [
    './index.jsx',
    './form.jsx'
]
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
        res.component = key.replace(/^\.\//,'').replace(/.jsx$/,'')  // req(key).default || req(key);
        modulesLayout[res.path] = res;
    }else if(name.indexOf('/modules')>-1){
        //
    }else{
        res.component = key.replace(/^\.\//,'').replace(/.jsx$/,'') // req(key).default ?? req(key);
    }
    //
    if(res.component){
        let url = res.component;
        res.component = loadable(import(`@/views/${url}.jsx`))
        modules.push(res);
    }
    return true;
})

// layout - children
Object.keys(modulesLayout).forEach((key)=>{
    for(let i = modules.length - 1;i>-1;i--){
        let v = modules[i];
        if(v.path !== key && v.path.indexOf(key)>-1){
            let push = modulesLayout[key].children?.push;
            push && push(v);
            modules.splice(i,1);
        }
    }
})

//
export default function RouteWeb() {
    React.useEffect(() => {
        window.module = modules
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
                    <Redirect from="*" to="/error404" />
                </Switch>
            }
        }/>

    )
}

// routes - get
function getRoutes(item){
    return item.children?.map((props)=>{ return <Route  {...props} /> })
}
