const User = require('../models/User')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
  const {username, email, password} = req.body
  try{
    //generate new password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    //create new user
    const newUser =  new User({
      username: username,
      email: email,
      password: hashPassword,
    })
    //save user and respond
    const user = await newUser.save()
    res.status(200).json(user)
  }catch (err){
    console.log(err)
  }
}

//LOGIN
const login = async (req, res) => {
  const {email, password} = req.body
  try{
   const user = await User.findOne({email: email})
    !user && res.status(404).send("user not")
    const validPassword = await bcrypt.compare(password, user.password)
    !validPassword && res.status(400).json('wrong password')
    res.status(200).json(user)
  }catch (err){
    res.status(500).json(err)
  }
}

module.exports = {
  register,
  login
}