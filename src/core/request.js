import axios from "axios";
import modules from '@/api';
import _ from 'lodash';

const Ajax = axios.create({
    baseURL: process.env.REACT_APP_BASEURL,
    timeout: 100000
})
const msg = {
    '401':"未授权，请登录",
    '403':'拒绝访问',
    '404':'请求地址出错',
    '408':'请求超时',
    '500':'服务器内部错误',
    '501':'服务未实现',
    '502':'网关错误',
    '503':'服务不可用',
    '504':'网关超时',
    '505':'HTTP版本不受支持',
}


axios.interceptors.request.use(
    (config) => {
        return _.merge(config,{
            //data:JSON.stringify(config.data),
            headers:{
                "Content-Type": "application/json"
            }
        });
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {console.log(response)
        if(msg[response.status]){
            return false;
        }
        return response;
    },
    (error) => {
        console.log("请求出错：", error);
    }
);

export default Ajax;

export function Api(name,param,options){
    let option = options || this.options || (this.options = {});
    let request = _.get(modules,name);
    if(!request){
        console.warn(`API:${name} not found!`)
        return;
    }
    //
    return new Promise((res,rej)=>{
        option.loading = true;
        request(param).then((response)=>{
            option.loading = false;
            let result = response;
            option.onComplete && option.onComplete(result);
            if(result.total !== void 0){
                option.total = result.total;
                option.data = result.rows;
            }else{
                option.data = result.data;
            }
            _.delay(()=>{ res(option) });
        },()=>{
            option.loading = false;
        })
    })
}
