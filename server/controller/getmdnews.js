const rpA = require('request-promise');

//对接后台
const getDBList = ()=>{
    const option = {
        uri: 'http://localhost/api/getmdnewslist.php',
        method: 'GET'
    };
    return new Promise((resolve,reject)=>{
        rpA(option).then(res=>{
            resolve(res);
        })
    })
};
const getMdNewsList =async(ctx)=>{
    let data = await getDBList();
    let mdNewsList = JSON.parse(data) || [];
    if(ctx.request.query.id){
        mdNewsList = mdNewsList.filter((v)=>v.md_id==ctx.request.query.id)
    }
    let total = mdNewsList.length? mdNewsList.length:0;
    ctx.body = {
        code:1,
        datas:{
            mdNewsList,
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
    getMdNewsList
};