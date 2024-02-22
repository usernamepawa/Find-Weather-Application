const bodyParser = require("body-parser")
const express=require("express")
const fetch=require("node-fetch")
const path=require("path")
// const relpath=path.join(__dirname,"index.html")
// console.log(relpath)


const dotenv=require("dotenv").config()

const app=express()
app.set("view engine","ejs")
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.get("/",(req,resp)=>
{
    resp.render("index")
})
app.post("*",async(req,resp)=>
{
    let location= await req.body.city
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.APIKEY}&units=metric`
    const response=await fetch(url);
    const weatherdata= await response.json()
    console.log(weatherdata)
    const temp=weatherdata.main.temp
    console.log("The temp is "+temp)
    const disc=weatherdata.weather[0].description;
    const icon=weatherdata.weather[0].icon;
    const imageURL=`https://openweathermap.org/img/wn/${icon}@2x.png`
  // resp.send(weatherdata)
   resp.write(`<h1> The current weather in ${location} is ${disc} </h1>`)
   resp.write(`<h1>The current tempertaure is ${temp} degree celsius</h1>`)
   resp.write(`<img src='${imageURL}'>`)
   resp.write(`<h1>Hello maroof</h1>`)
})
.listen(3400)






