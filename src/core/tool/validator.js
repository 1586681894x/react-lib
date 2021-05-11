import _ from 'lodash';
import validator from 'validator';

validator.required = function(str){
    return !(_.isNil(str) || _.isEmpty(str));
}

// {name:'isLength',max:5,min:2}
function Tips(){
    this.tips = {};
    this.add = function(key,fun){
        let tips = this.tips;
        tips[key] = typeof fun === 'string' ? (()=>{return fun}) : fun;
        return this;
    }
    this.get = function(r){
        return _.get(this.tips,r.name,()=>{
            return '填写格式不正确'
        })(r)
    }
}

//
let tips = new Tips();
let valiFun = (o,r)=>{
    if(o.error){
        return;
    }
    //
    let rule = _.isString(r) ? {name:r} : r;
    let fun = validator[rule.name];
    rule.msg || (rule.msg = tips.get(rule));
    if(!fun){
        console.log(`VALIDATE ( ${rule.name} ) is not found`)
        return;
    }
    //
    if(_.isEmpty(o.value)){
        if('required' === rule.name){
            o.error = validator.required(o.value,rule) ? '' : rule.msg;
        }
    }else if(['isMobilePhone'].indexOf(rule.name)>-1){
        o.error = fun(o.value,rule.locale||['zh-CN'],rule) ? '' : rule.msg;
    }else{
        o.error = fun(o.value,rule) ? '' : rule.msg;
    }
}

tips.add('required',(r)=>{
    return '必填项'
});
tips.add('isInt',(r)=>{
    if(r.min || r.max){
        return `请输入数字，大小区间[${r.min} , ${r.max}]`
    }else{
        return `请输入数字`;
    }
});
tips.add('isLength',(r)=>{
    if(r.min || r.max){
        return `请输入字符，长度区间[${r.min} , ${r.max}]`
    }else{
        return `请输入字符`;
    }
});


//
_.validator = validator;
_.validate = (opt = {value:'',error:'',rules:[]})=>{// rule : [{name:''},'isInt']
    let promise = [];
    opt.error = '';
    opt.rules.forEach((v)=>{
        new Promise((res)=>{
            if(_.isFunction(v)){
                v(opt,()=>res())
            }else{
                valiFun(opt,v);
            }
        })
    })
    //
    return Promise.all(promise);
}


