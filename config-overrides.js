
const path = require('path');
const { override, addLessLoader,addBabelPlugin,fixBabelImports,addWebpackAlias } = require('customize-cra');

module.exports = override(
    addWebpackAlias({
        ["@"]: path.resolve(__dirname, "src")
    }),
    // 调用这个函数相当于在 webpack.config.js 里面配置 less-loader  前提是要下载 less 和 less-loader
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            localIdentName: '[local]--[hash:base64:5]'
        }
    }),
    // 按需加载
    fixBabelImports('import', [
        {
            libraryName: '@material-ui/core',
            style: 'css'
        }
    ]),
    // addBabelPlugin 用来配置添加babel插件的
    // 这里以 @babel/plugin-proposal-decorators 插件为例， 这个插件是用来支持 es7 装饰器语法的
    addBabelPlugin(
        ["@babel/plugin-proposal-decorators", { "legacy": true }]
    ),
    (config)=>{
        let loaders = config.module.rules[1].oneOf;
        loaders[1].options.limit = 30000;
        //config.devtool = false;
        return config;
    }
)
