const express = require('express');
const AuthenticateRoute = express.Router();
const AuthService = require('../services/auth.service');

AuthenticateRoute.post("/login",(request,response)=>{
    const userObject =request.body;
    const username = userObject.username;
    const password = userObject.password;

    AuthService.login(username,password).then(user=>{
        console.log('In login Routr ,after db call',user)

        if(user === null)
        {
            response.status(500).json(`{
                status:"failed",
                code :500,
                message:"Login Failed"
            }`);

            
            
        }
        else
        {
            response.status(200).json({
                status:"success",
                code : 200,
                message:"Login Successful",
                user:user,
            });

        }
    })
});
module.exports=AuthenticateRoute