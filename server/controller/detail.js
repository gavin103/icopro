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
const getDetail =async(ctx)=>{
    let data = await getDBList();
    const icosList = JSON.parse(data) || [];
    let icoId = ctx.request.query.id;
    const detailInfo = icosList.find((v,i)=>{
        return v.icoId == icoId;
    })
    ctx.body = {
        code:1,
        datas:{
            detailInfo
        },
        msg:"success",
    }
}

module.exports={
    getDetail
};