const express = require('express')
const cors = require('cors')

const extractFrames = require('ffmpeg-extract-frames')

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//routes routes

// app.get("/api/")
app.get('/api/video', (req, res) => {
    res.send('fuckyou')
})
app.get('/',(req,res)=>{

    console.log("hello")
    res.send("hello")
});

app.post('/api/video', (req, res) => {
    console.log(req.body)
    
    async function f1() {
        try{
            await extractFrames({
                input: req.body.fileName,
                output: './assets/generated/screenshot-%i.jpg',
                numFrames: 10
            })
        } catch (e) {
            console.log(e)
            res.send("failed")
        }
    }
      
    f1();
    res.send('success')
})

app.listen(3001, ()=>{
    console.log(process.env.PATH)
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
