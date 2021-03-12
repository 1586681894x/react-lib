import _ from 'lodash';
import validator from 'validator';

//_.validator = validator;// test

function Tips(){
    this.tips = {};
}
Tips.prototype.add = function(key,fun){
    let tips = this.tips;
    tips[key] = typeof fun === 'string' ? (()=>{return fun}) : fun;
    return this;
}
Tips.prototype.get = function(r){
    return _.get(this.tips,r.name,()=>{
        return '填写格式不正确'
    })(r)
}

//
let valiFun = (o,r,c)=>{c(validator[r.name](o.value,r) ? '' : r.msg)};
let tips = new Tips();

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


_.VALIDATE = (opt = {value:'',rules:[]},callback = ()=>{})=>{// rule : [{name:''},'isInt']
    let valiMsg = [];
    let valiResult = (msg)=>{
        valiMsg.push(msg);
        //
        if(valiMsg.length === opt.rules.length){
            callback(valiMsg.filter((v)=>{return v})[0]);
        }
    }
    //
    opt.rules.forEach((v)=>{
        if(_.isFunction(v)){
            v(opt,valiResult)
        }else{
            let rule = _.isString(v) ? {name:v} : v;
            rule.msg || (rule.msg = tips.get(v));
            valiFun(opt,rule,valiResult);
        }
    })
}


