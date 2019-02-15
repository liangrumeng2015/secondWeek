class IndexController{
    constructor(){}
    actionIndex(){
        return async(ctx,next)=>{
            // ctx.body = 'hello indexController'
            // indexModel();  错误的，用来测试500端口的
            ctx.body = await ctx.render("index",{
                data:'Hello,拿到数据'
            });
        }
    }
}

//导出模块
module.exports = IndexController;
