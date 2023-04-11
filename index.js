let dbUsers = [
  {
      username: "hasmini",
      password: "H@s230798",
      name: "Hasmini",
      email: "hasmininanthan023@gmail.com"
  
  },
  {
      username: "john",
      password: "password",
      name: "John",
      email: "john@utem.edu.my"
  
  },
  {
      username: "ali",
      password: "230798",
      name: "Ali",
      email: "ali@utem.edu.my"
  
  }
  ]

function login(reqUsername, reqPassword) {
  let matchUser = dbUsers.find(user => user.username == reqUsername)

  //console.log(matchUser)

if(!matchUser) return "User not found!"

if(matchUser.password == reqPassword){
  return matchUser
}else{
  return "Invalid password"
}
}

function register (reqUsername,reqPassword,reqName,reqEmail){
  dbUsers.push({
      username: reqUsername,
      password: reqPassword,
      name: reqName,
      email: reqEmail

  })


}

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/login', (req, res) => {
    console.log(req.body)

    let result = login(req.body.username,req.body.password)

    res.send(result)
})

app.get('/', (req, res) => {
  res.send('Hi WORLD!')
})

app.get('/bye', (req, res) => {
    res.send('Bye WORLD!')
  })

app.post('/register', (req, res) => {
  let result = register(
    req.body.username,
    req.body.password,
    req.body.name,
    req.body.email
  )  
  
  res.send(result)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})