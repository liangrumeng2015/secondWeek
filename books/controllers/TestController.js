class TestController{
    constructor(){}
    actionIndex(){
        return async(ctx,next)=>{
            ctx.body = {
                data:'TestController'
            }
        }
    }
}

//导出模块
module.exports = TestController;