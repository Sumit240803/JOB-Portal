const express = require('express')
const { register, login, logout, registerAdmin } = require('../controllers/authControllers')

const authRouter = express.Router()

authRouter.post("/register" , register);
authRouter.post('/login' ,login);
authRouter.post("/adminregister",registerAdmin)
authRouter.post("/logout" ,logout);

module.exports = authRouter