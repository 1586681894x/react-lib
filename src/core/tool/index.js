import _ from "lodash";
const path = require('path')
const files = require.context('.', true, /\.js/)
const modules = {}
files.keys().forEach(key => {
    const name = path.basename(key, '.js') // 提取出用 ‘/' 隔开的path的最后一部分,path.basename(p, [ext])。 p要处理的path,ext要过滤的字符
    if(name === 'index'){ return; }
    modules[name] = files(key).default || files(key)
})

export default {
    ...modules
}
