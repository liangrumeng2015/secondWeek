const fetch = require('node-fetch');   //安装node-fetch  npm install node-fetch --save-dev
const config = require('../config');

class SafeRequest{
    constructor(url){
        this.url = url;
        this.baseURL = config.baseURL;
    }
    fetch(options){
        let ydfetch = fetch(this.baseURL + this.url);
        return new Promise((resolve,reject)=>{
            let result = {
                code: 0,
                message: "",
                data: []
            };
            ydfetch
            .then(res=>res.json())
            .then((json)=>{
                result.data = json;
                resolve(result);
            }).catch((error)=>{
                result.code = 1;
                result.message = 'node-fetch和后端通信异常 ';
                reject(result);
            })
        })
    }
}

module.exports = SafeRequest; 