const {join} = require('path');
let config = {
    "viewDir": join(__dirname,'..',"views"),
    "staticDir": join(__dirname, '..','assets')
}
const __ = require('lodash');     //安装 lodash  npm install lodash --save
if(process.env.NODE_ENV == 'development'){
    const localConfig = {
        baseURL: 'http://localhost/basic1/web/index.php?r=',
        port: 3000
    }
    config = __.extend(config, localConfig);
}
if(process.env.NODE_ENV == 'production'){
    const prodConfig = {
        port: 8081
    }
    config = __.extend(config, prodConfig);
}
module.exports = config;


// Map 