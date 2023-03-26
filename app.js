const express = require("express");
const upload = require('express-fileupload');
const fs = require('fs');
const mongoose = require('mongoose');
var Gene = require(__dirname +"/user_model.js");

const app = express();
mongoose.connect('mongodb://localhost:27017/genedb',{useNewUrlParser: true});
app.use(upload());
app.use(express.static(__dirname+'/public'));
app.set("view engine", "ejs");

var filename = "";

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/table",function(req,res){
  Gene.find({}, function (err, allGenes) {
    if (err) {
        console.log(err);
    } else {
        res.render("index", { details: allGenes })
    }
})
});

app.post('/', function(req, res) {
  if(req.files){
    // console.log(req.files);
    var file = req.files.file;
    filename = file.name;
    // console.log(filename);

    file.mv('./uploads/'+filename,function(err){
      if(err){
        res.send(err);
      }else{
        //console.log("File Uploaded");
        const fileData = fs.readFileSync('./uploads/'+filename, "utf8");

        //let pattern = /" genome\r\n"/;
        const result = fileData.split(">");
        //console.log(result);
        //let ret = db(result);
        //console.log(result.length);

        let ret;
        for(var i= 1; i<result.length;i++){
          let result2 = result[i].split(", complete genome");
          //console.log(result2);
          db(result2[1].toUpperCase(),result2[0],i);
        }
        //console.log(ret);
        res.sendFile(__dirname+"/sucess.html");
      }
    })
  }
});

function db(s,info,sl_no){


  var gentic_code_table = [

    [["F","F","L","L"],["S","S","S","S"],["Y","Y","!","!"],["C","C","!","W"]],
    [["L","L","L","L"],["P","P","P","P"],["H","H","Q","Q"],["R","R","R","R"]],
    [["I","I","I","M"],["T","T","T","T"],["N","N","K","K"],["S","S","R","R"]],
    [["V","V","V","V"],["A","A","A","A"],["D","D","E","E"],["G","G","G","G"]],

  ];


  var s_num = "";
  for(var i = 0; i<s.length;i++){
    if(s[i] == "T"){
      s_num+="0";
    }else if(s[i] == "C"){
      s_num+="1";
    }else if(s[i] == "A"){
      s_num+="2";
    }else if(s[i] == "G"){
      s_num+="3"
    }else if(s[i] == "\r" || s[i] == "\n"){
      continue;
    }else{
      return;
    }
  }

  var C = 0,G = 0,result = "";
  var b = s_num.split(/(.{1,3})/g);
  //console.log(b);
  for(var i = 1; i<b.length; i+=2){
    var I,J,K;
     for(var j = 0; j<b[i].length; j++){

       if(b[i][j] == "1"){
         C++;
       }
       if(b[i][j] == "3"){
         G++;
       }
       if(j == 0){
         I = parseInt(b[i][j]);
       }else if(j == 1){
         J = parseInt(b[i][j]);
       }else{
         K = parseInt(b[i][j]);
       }
     }
     //console.log(I,J,K);
     if(i == 1 && gentic_code_table[I][J][K] != "M" && gentic_code_table[I][J][K] != "V")
     return;
     if(gentic_code_table[I][J][K] == "!"){
       break;
     }else{
         result+=gentic_code_table[I][J][K];

     }

  }

      const insert = new Gene({
        Sl_no: sl_no,
        Info: info,
        NucleotideSeq : s,
        Size: 3*result.length,
        per: ((G+C)/(3*result.length))*100,
        ProteinSeq: result,
        Remark: "Correct"

      });

      insert.save(function(err){
        if(err) console.log(err);
      });

  return;

}



app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
