const express =require("express")
const {app}=require("../../exports/app")

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set("view engine","ejs")
