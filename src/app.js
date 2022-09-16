const express =require("express")

const app=express()
const port=process.env.PORT||3000

const fetchNews=require("./fetchNews")

const path=require("path")
const hbs=require("hbs")

app.set("view engine",'hbs')
staticPath=path.join(__dirname,'../public')
app.use(express.static(staticPath))

app.get('/',(req,res)=>{
    fetchNews((data=null,error=null)=>{
        if(error){
            return res.send({error})
        }
        res.render('index',{title:data})
    })
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})