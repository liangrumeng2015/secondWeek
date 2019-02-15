const errorHandler = {
    error(app,logger){
        app.use(async(ctx,next)=>{
            try{
                await next();
            } catch(error){
                console.log(error);
                ctx.status = 500;
                logger.error(error);
                ctx.body = '/(ㄒoㄒ)/~~';

            }
        });
        app.use(async (ctx,next)=>{
            await next();
            if(404 != ctx.status){
                return;
            }
            // 不承认网站404 ，百度会对SEO降权。 一般都会写成 200.  腾讯404，小孩回家
            // ctx.status = 404;   
            ctx.status = 200;  //写成200，百度的搜索引擎不会发现，google可以分析ajax
            ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>';
        });
    }
}
module.exports = errorHandler;
