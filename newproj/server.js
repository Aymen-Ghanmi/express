//  1 require express

const express = require('express')

// 2 get instance from express

const app = express()

// 3 apply middleware bodyparser

app.use(express.json())


//import middleware verify time

const verify = require('./middleware')


//PUG

app.set("view engine", "pug")
app.set("views", "./views")


app.get("/", (req, res) => {
    res.status(200).render("home", { title: "Home" })
  })
  
  app.get("/our-services", verify, (req, res) => {
    res.status(200).render("services", { title: "Our Services" })
  })
  
  app.get("/contact-us", verify, (req, res) => {
    res.status(200).render("contact", { title: "Contact Us" })
  })




app.get('/error', (req, res)=>{
    res.status(200).send('server is only available during 9 to 17 from monday to friday')
})

// call verify 
app.use(verify)

// 4 create routes

app.get('/',(req, res)=>{
    res.send('welcome to Express , server is running  !!')
})

app.get('/test',(req, res)=>{
    res.send('welcome to Test !!!!')
})


// route add new user

app.post('/add_user', (req, res)=>{
    let newUser = req.body;
    users = [...users, newUser]
    res.status(200).send({msg: "user added successfully", newUser})
})

// 4 create port 

const PORT = 5000
 
// 5 create server

app.listen(PORT, (err)=>{
    err
    ?console.log(err)
    :console.log(`server is running at http://127.0.0.1:${PORT}`)
})




// static Database

let users=[
    {
        id:1,
        name:'user1',
        email:'user1@gmail.com'
    }
    ,
    {
        id:2,
        name:'user2',
        email:'user2@gmail.com'
    }
    ,
    {
        id:3,
        name:'user3',
        email:'user3@gmail.com'
    }
]

// route get all users 



app.get('/users', (req, res)=>{
    res.status(200).send({users})
}) 

app.get('/users/get_one/:id', (req, res)=>{
    const id = req.params.id
    let foundUser = users.find((el)=> el.id == id)
    res.status(200).send({foundUser})
})