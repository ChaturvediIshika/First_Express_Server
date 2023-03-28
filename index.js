const express=require('express');
// const color=require('colors');
const app=express();

// app.use((req,res)=>{
//     // console.log("Request made");
//     res.send("<h1>Successfull request</h1>")
// })

// Routing....
app.get('/',(req,res)=>{
    res.send("Home Route");
})

app.get('/cat',(req,res)=>{
    res.send("<h1>Meeooowww</h1>");
});

app.get('/dog',(req,res)=>{
    res.send("<h1>booooowww</h1>");
});

app.get('*',(req,res)=>{
    res.send("<h1>*************</h1>");
});


app.listen(5000,()=>{
    console.log("Server is running");
})