const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const { selectUser,addUser} = require("./user.js");

//http://localhost:4000/users
app.get("/users", async(req, res)=>{
    const list = await selectUser();
    res.json(list);
});

//http://localhost:4000/1
app.post("/1", async (req,res)=>
{
    const user = req.body;
    await addUser(user);
    res.json({message:"Added Successfully"});

});
app.listen(4000,() =>{
    console.log("server started");
});