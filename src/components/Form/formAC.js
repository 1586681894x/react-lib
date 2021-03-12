import _ from 'lodash';

const path = require('path')
const files = require.context('./module', false, /\.jsx$/)
const modules = {}
files.keys().forEach(key => {
    const name = path.basename(key, '.jsx') // 提取出用 ‘/' 隔开的path的最后一部分,path.basename(p, [ext])。 p要处理的path,ext要过滤的字符
    modules[name] = files(key).default || files(key)
})


export const AC = {
    types(name){
        return modules[name]
    },
    options(){
        let { columns,rules = {}, ...options } = this.props;
        let data = {};
        columns.forEach((v)=>{
            v.readonly ?? (v.readonly = options.readonly);
            v.disabled ?? (v.disabled = options.disabled);
            v.value && (data[v.name] = v.value);
            //
            rules[v.name] && (v.rules = rules[v.name]);
        })
        //
        _.extend(this.state.options,options);
        this.state.data = data;
    }
}

