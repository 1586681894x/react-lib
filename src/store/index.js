const path = require('path');
const modules = {};
const req = require.context('./', true, /\.js$/)

req.keys().forEach(key => {
    let name = path.basename(key,'.js');
    modules[name] = req(key);
})
//
export default modules;
