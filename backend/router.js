var app = require("@forkjs/group-router");
const DB = require('./services/db.js');

app.group("/api/v1",() =>{
    app.get("/blogs", async (req,res)=>{
        try{
            let data = await DB.from('blog').select('*');
            let resp = {code:200,message:'ok',data}
            return res.json(resp).status(200);
        }catch(e){
            let resp = {code:500,message:e.getMessage(),data:null}
            return res.json(resp).status('500');
        }
        
    })
    
    app.post("/blog", async (req,res)=>{
        let body = req.body
        try{
            let blog = await DB('blog').insert(body).returning(['id'])
            return res.json(
                {
                    code:200,
                    message:'ok',
                    data:
                    {
                        id : blog[0].id,
                        ...body
                    },
                }).status(200)
        }catch(e){
            return res.json(
                {
                    code:500,
                    message:e.getMessage(),
                    data: null,
                }).status(500)
        }
    })

    app.get("/blog/:slug", async (req,res)=>{
        let slug = req.params.slug
        try{
            const blog = await DB.from('blog').select("*").where({slug:slug})
            return res.json({code:200,message:'ok',data:blog}).status(200)
        }catch(e){
            return res.json({code:500,message:e.getMessage(),data:null}).status(500)
        }
        
    })
    

    app.put("/blog/:slug", async (req,res)=>{
        let body = req.body;
        try{
            await DB.from('blog').where({slug:req.params.slug}).update(body);       
            return res.json({code:200,message:'ok',data:{slug:req.params.slug,...body}}).status(200)
        }catch(e){
            return res.json({code:500,message:e.getMessage(),data:null}).status(500)
        }
    })
    
    app.delete("/blog/:slug", async (req,res)=>{
        try{
            await DB.from('blog').where({slug:slug}).delete()
            return res.json({code:200,message:`Data blog dengan slug ${req.params.slug} berhasil di delete`}).status(200)
        }catch(e){
            return res.json({message:e.getMessage()}).status(500)
        }
        
    })
})

module.exports = app.router
