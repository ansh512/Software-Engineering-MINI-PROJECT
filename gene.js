
function(s){

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
    }else{
      console.log("Error!!!!");
    }
  }

  // var b = s.match(/(.{1,3}/g));
  // for(var i = 0; i<b.length; i++){
  //   var I,J,K;
  //   for(var j = 0; j<3; j++){
  //
  //     if(b[i][j] == "T"){
  //       I =
  //     }
  //
  //   }
  //
  // }
}
