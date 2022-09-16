// API key -> 2b2845556c1742778dbd72f14dec5c46

const request = require("request")

const url = 'https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=2b2845556c1742778dbd72f14dec5c46'


const newsFunction = (callback)=>{
    request({url,json:true,headers:{'User-Agent': 'request'}}, (error,response)=>{
        if (error){
            callback(error="The URL is Invalid")
        }
        else if(response.body.status=="error"){
            callback(data=response.body.message)
        }
        else{
            callback(data=response.body.articles)
        }
    })    
}

module.exports=newsFunction