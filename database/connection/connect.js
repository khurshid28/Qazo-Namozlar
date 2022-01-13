//open mongodb
const mongoose=require("mongoose")
mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://khurshid:khurshid2827@khurshidcluster.ae2lf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(v=>console.log("server is connected to online mongodb1"))
.catch(e=>console.log("there is a error >>> "+e))

//secret mongodb
const mongoose_secret=require("mongoose")
mongoose_secret.Promise = global.Promise;
mongoose_secret.connect("mongodb+srv://khurshid:khurshid2827@khurshidcluster.ae2lf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(v=>console.log("server is connected to online mongodb1"))
.catch(e=>console.log("there is a error >>> "+e))




module.exports={
    mongoose,mongoose_secret
}



