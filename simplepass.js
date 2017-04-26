getString("computerscience");

//type getString below
function getString(str){
  try{
    str = checkString(str);
  }
  catch(e){
    console.log(e.message);
    getString(str);
  }
}

//type checkString below
function checkString(str){
if(8>str.length){
  throw new RangeError("The password has to be between 8 and 20 characters");
}
else if (str.length>20) {
  throw new RangeError("The password has to be between 8 and 20 characters");
}
else{
  console.log("good")
  return str
}
}
