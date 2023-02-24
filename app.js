import express from 'express'
const app = express()
import {join} from 'path' 
import connectDb from './db/connection.js'
import web from './routes/web.js'
const port = process.env.PORT || 5000
const url = process.env.DATABASEURL || "mongodb://localhost:27017/crud";


//Database Connection
connectDb(url);

//Built In Middleware Urlencode
app.use(express.urlencoded({extended:false}))

// Static Files 
app.use(express.static(join((process.cwd(),"public"))))
// app.use('/student/edit',express.static(join((process.cwd(),"public"))))

//Set View engine
app.set('view engine','ejs');

//Load Routes
app.use('/student',web);

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})


app.listen(port , ()=> console.log(`server running on http://localhost:${port}`))