
const express=require("express")

const app=express();

app.get("/maroof",(req,resp)=>
{
 
    resp.send(JSON.stringify({id:1 ,name:"Maroof",city:"Jodhpur"}))
})

.listen(2300)
