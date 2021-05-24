import React from 'react';
import _ from 'lodash';

let map = {

}

//
let cacheResult = (()=>{
    let loadDict = (type)=>{
        return new Promise((resolve)=>{
            if('role' === type){
                //
            }else{
                console.warn(`Not find dict ( ${type} ) ! `)
                // request({ url: '/system/dict/data/type/' + type, method: 'get' }).then((res)=>{
                //     if(res.data){
                //         cacheResult.set(type,res.data.map((v)=>{return {k:v.dictLabel,v:v.dictValue}}));
                //         resolve(cacheResult.get(type));
                //     }
                // })
            }
        })
    }
    //
    return {
        _val(type,id){
            let item = (map[type]||[]).filter((v)=>{return v.v == id})
            return item.length>0 ? item[0]['l'] : "";
        },
        _get(type){
            return map[type];
        },
        _set(type,result){
            map[type] = result;
        },
        _load(type,fun) {
            let list = cacheResult.get(type);
            if(!list){
                loadDict(type).then((data)=>{
                    fun(data)
                })
            } else {
                return fun(list)
            }
        }
    }
})()

// getTxt(['xxx','xxx'])
// getTxt('xxx','id')
_.dict = (arr,o1)=>{
    let isInit = typeof arr === 'object';
    if(isInit){
        return new Promise((res)=>{
            arr.forEach((type)=>{
                let options = this.options || (this.options = {})
                cacheResult._load(type,(list)=>{
                    Object.assign(options,{[type]:list})
                    res(list);
                })
            })
        })
    }else{
        return _.isNil(o1) ? cacheResult._get(arr) : cacheResult._val(arr,o1);
    }
}
