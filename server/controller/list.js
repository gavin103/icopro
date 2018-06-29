const rpA = require('request-promise');

//对接后台
const getDBList = ()=>{
    const option = {
        uri: 'http://localhost/api/getlist.php',
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
const getList =async(ctx)=>{
    let data = await getDBList();
    icosList = JSON.parse(data) || [];
    let total = icosList.length? icosList.length:0;
    ctx.body = {
        code:1,
        datas:{
            icosList,
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
    getList
};