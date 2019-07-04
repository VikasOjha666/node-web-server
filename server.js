const express=require('express');
const hbs=require('hbs');

var app=express();
hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'))


hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear()
});

app.get('/',(req,res)=>{
  res.send('<h1>Welcome!</h1>')
});

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle:'About Page',
    currentYear:new Date().getFullYear()
  });
});

app.listen(3000,(mes)=>{
  console.log("Server is up on port 3000");
});
