const {mongoose}=require("../../exports/mongoose")

const UserSchema=new mongoose.Schema({
    type:String,
    username:String,
    data:Array,
})

const UserModel= mongoose.model("user",UserSchema)

module.exports={
    UserModel
}



