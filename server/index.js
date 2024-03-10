const express = require('express')
const cors = require('cors')
const {MongoClient,ObjectId} = require('mongodb')
const jwt = require('jsonwebtoken');
const {expressjwt: exjwt} = require('express-jwt')
const jwt_decode = require('jwt-decode')

const app=express()

app.use(cors())
app.use(express.json())

secretkey = "abcd"
algorithm = "HS256"

const jwtmw = exjwt({
    secret: secretkey,
    algorithms: [algorithm]
})

const client =new MongoClient('mongodb+srv://admin:admin@cluster0.9qyfbnh.mongodb.net/?retryWrites=true&w=majority')
client.connect()
const db = client.db('Student')
const col = db.collection('register')
//col.insertOne({'student':"123"})

app.post('/register', (req, res)=>{
col.insertOne(req.body)
console.log(req.body)
res.send('Inserted successfully')
})

app.post('/login', async (req, res) => {
    const {email, password } = req.body;
    console.log(req.body)
    const user = await col.findOne({email});
    if(user){
        console.log(user.email, user.password, password)
    if(!user || !(password === user.password)){
        return res.status(401).json({message: 'Invalid email or password'});
    }
    const token = jwt.sign(user, secretkey, {algorithm: algorithm, expiresIn: '1m' });
    res.json({ username:user.name, token: token});
    }
    else
    {
        return res.status(401).json({message:'Inavlid Email'});
    }
    
});


app.get('/retrive', jwtmw, async (req, res)=>{
    //console.log(jwt_decode.jwtDecode(req.headers.authorization.substring(7)));
    const result= await col.find().toArray()
    console.log(result)
    res.send(result)
})

app.put('/users/:id', async (req,res)=>{ 
    const {id}= req.params 
    const {name, role, email, password}=req.body 
    const result= await col.updateOne({_id: new ObjectId(id)}, {$set:{name, role, email, password} }) 
    res.send('updated') 
})

app.delete('/users/:id', async (req, res)=>{
    const{id}= req.params
    const result=await col.deleteOne({_id : new ObjectId(id)})
    res.json({message:"Delete successfully"})
})

app.get('/', (req,res)=>{
    res.send('<h1>Hello World</h1>')
})
app.get('/about', (req,res)=>{
    res.send('<h1>This is about page</h1>')
})
app.listen('8080', ()=>{
    console.log('Server is running')})