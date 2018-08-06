const rpA = require('request-promise');


const addMdNews =async(ctx)=>{

    const opt = ctx.request.body || {};
    const options = {
        method: 'POST',
        uri: 'http://localhost/api/addmdnews.php',
        body:opt,
        json: true
    };
    rpA(options)
        .then((parsedBody)=>{
            ctx.body = {
                code:1,
                msg:"success",
            }
        })
        .catch((err)=>{
            ctx.body = {
                code:0,
                msg:err,
            }
        });
 
}

module.exports={
    addMdNews
};