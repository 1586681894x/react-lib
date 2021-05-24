import _ from 'lodash';
import qs from 'qs';
import Api from '@/api/index.js'

// api
_.api = function(name,param,options){
    return _.get(Api,name)?.call(this,param,options);
}

// http - params
_.params = {
    get:(url,key)=>{
        let pm = qs.parse(url.split('?')[1]);
        if(key){
            return pm[key]
        }else{
            return pm;
        }
    },
    add:(url,obj)=>{
        let pm = _.extend(_.params.get(url),obj);
        return (url+'?').replace(/\?.*/,`?${qs.stringify(pm)}`)
    }
}



// link
_.link = function(url = '',opt = {
    redirect:false
}){
    if(opt.redirect){
        let arr = url.split('?');
        if(url){
            url = _.params.add(url,{redirect:window.location.href});
        }else{
            url = _.params.get(url,'redirect');
        }
    }
    //
    return ()=>{
        if(/^http/.test(url)){
            window.location.href = decodeURIComponent(url);
        }else{
            _.history.push(url)
            document.documentElement.scrollTop = 0;
        }
    }
}
