const rpA = require('request-promise');

//对接后台
const getDBList = ()=>{
    const option = {
        uri: 'http://localhost/api/getquicknews.php',
        // qs: {
        //     limit:limit || 35
        // },
        method: 'GET'
    };
    return new Promise((resolve,reject)=>{
        rpA(option).then(res=>{
            resolve(res);
        })
    })
};
const getQuickNews =async(ctx)=>{
    let data = await getDBList();
    quickNews = JSON.parse(data) || [];
    const opt={};
    opt.news = ctx.request.query.news;
    if(opt.news){

    }
    let total = quickNews.length? quickNews.length:0;
    ctx.body = {
        code:1,
        datas:{
            quickNews,
            pageInfo:{
                pageNum:1,
                pageSize:20,
                total
            },
        },
        msg:"success",
    }
}

module.exports={
    getQuickNews
};