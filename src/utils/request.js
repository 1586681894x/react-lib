import axios from "axios";
import modules from '@/api';
import _ from 'lodash';
import store from '@/store'

const TIPS = _.debounce((opt)=>{

},400)

const ajax = axios.create({
    baseURL: '/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    },
    timeout: 30000,
})

const msgMap = {
    '401':"用户未授权，请联系管理员！",
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


ajax.interceptors.request.use(
    (config) => {
        return _.merge(config,{
            headers:{
                _etc_token:window.localStorage._trafficbu_token
            }
        })
    },
    (error) => {
        return Promise.reject(error);
    }
);

ajax.interceptors.response.use(
    (response) => {
        // 未设置状态码则默认成功状态
        let res = _.merge({status:{},result:''},response.data);
        let msg = res.status.statusReason;
        if (res.status.statusCode === '401') {
            // MessageBox.confirm(
            //     '登录状态已过期，您可以继续留在该页面，或者重新登录',
            //     '系统提示',
            //     {
            //         confirmButtonText: '重新登录',
            //         cancelButtonText: '取消',
            //         type: 'warning'
            //     }
            // ).then(() => {
            //     store.dispatch('LogOut').then(() => {
            //         window.location.reload() // 为了重新实例化vue-router对象 避免bug
            //     })
            // })
            return;
        }else if (!res.status.statusCode) {
            TIPS({ message: msg, type: 'error' })
            return Promise.reject(res)
        } else {
            return res;
        }
    },
    (error) => {
        let status = error.response.status, msg = msgMap[status];
        if(msg){
            TIPS({ message: msg, type: 'error' })
        }else{
            console.log("ajax error ：", error);
        }
    }
);


export default ajax;

// ajaxbox
export function AjaxBox(prefix = ''){
    this.prefix = prefix;
    //
    this.ajax = function(opt = {}){
        opt.url = this.prefix + opt.url;
        opt.method = opt.method || 'post';
        return ajax(opt);
    }
}
