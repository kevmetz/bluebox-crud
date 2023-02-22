const express = require("express");
const app = express();
const port = 4000;

//add support for post requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

//---------------------------------------------------

let g_DB = null;
let deptModel = null;

const mongoose = require("mongoose");
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const connStr1 =
  "mongodb+srv://sidekick:robin123@cluster0.0xd5y.mongodb.net/db123?retryWrites=true&w=majority";
mongoose.set("strictQuery", false);
mongoose
  .connect(connStr1, connectionParams)
  .then(handleConnection())
  .catch((err) => console.log("Error:", err));

//------------------------------------------------------

function handleConnection() {
  console.log("mongoose connected");

  g_DB = mongoose.connection;
  g_DB.once("open", function () {
      console.log("database open");
   
      //create models
      let _schema = new mongoose.Schema({
        deptid: Number,
        deptname: String
      });
      deptModel = mongoose.model('dept', _schema, 'depts');
    
  });
}

//-------------- DEPT API -----------------
app.get("/depts", function (req, res) {

  g_DB
    .collection("depts")
    .find({})
    .toArray((err, docs) => {
      if (err) res.send(err)
      else res.send(docs)
    });

});
//--
app.post("/depts", function (req, res) {

  const newDoc = new deptModel({
    deptid: req.body.deptid,
    deptname: req.body.deptname,
  });

  newDoc.save((err, docs) => {
    if (err) res.send(err)
    else res.send(docs)
  });
})
//--
app.put("/depts", function (req, res) {

  deptModel.findByIdAndUpdate(req.body._id, req.body, function(err, docs){
    res.send(docs)
  })
})
//--
app.delete("/depts/:id", function (req, res) {
  
  deptModel.deleteOne({_id: req.params.id}, function (err) {
    if (err) res.send("err")
    else res.send("ok")
  });    
})