const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/auth",{
    useNewUrlParser:true,
    useUnifiedTopology:true
    });

() => {
    console.log("connected to DB")
}

//user schema 
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//routes routes
app.post("/Login",(req,res)=>{
    const {email,password} =req.body;
    User.findone({email:email},(err,user)=>{
        if(user){
           if(password === user.password){
               res.send({message:"login sucess",user:user})
           }else{
               res.send({message:"wrong credentials"})
           }
        }else{
            res.send("not register")
        }
    })
});
app.post("/Register",(req,res)=>{
    console.log(req.body) 
    const {name,email,password} =req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"user already exist"})
        }else {
            const user = new User({name,email,password})
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"sucessfull"})
                }
            })
        }
    })
}) 

app.listen(6969, ()=>{
    console.log("server started")
})




// const express = require('express')
// const cors = require('cors')
// const app = express()
// const PORT = 4004

// app.use(cors())
 
// app.use('/login', (req, res) => {
//     res.send({
//         token : 'test1234'
//     })
// })

// app.listen(PORT, () => console.log('API is running on port ' + PORT))
