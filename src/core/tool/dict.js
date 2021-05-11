import React from 'react';
import _ from 'lodash';
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
    let map = {
        'car_type':[{l:'货车',v:'0'},{l:'牵引车 / 集装箱',v:'1'}],
        'axles_num':[{l:'1',v:'1'},{l:'2',v:'2'},{l:'3',v:'3'},{l:'4',v:'4'},{l:'5',v:'5'},{l:'6',v:'6'},{l:'7',v:'7'}],
        'wheel_num':[{"l":4,"v":4},{"l":6,"v":6},{"l":8,"v":8},{"l":10,"v":10},{"l":12,"v":12},{"l":14,"v":14},{"l":16,"v":16},{"l":18,"v":18}],
        'car_color':[
            {l: (<div><span style={{ backgroundColor: '#F9BE03' }}/><span>黄色</span></div>), v: '#0000FF'},
            {l: (<div><span style={{ backgroundColor: '#0000FF' }}/><span>蓝色</span></div>), v: '#0000FF'},
            {l: (<div><span style={{ backgroundColor: 'linear-gradient(180deg, #F5F8EB 0%, #55B45A 100%)' }}/><span>渐变绿</span></div>), v: '#0000FF'},
            {l: (<div><span style={{ backgroundColor: '#0000FF' }}/><span>黄绿双拼</span></div>), v: '#0000FF'},
        ]
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
