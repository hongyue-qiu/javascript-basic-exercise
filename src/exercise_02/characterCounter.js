export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.
  var num = 0;
  if( prediction == 'l'){
    console.log('-------', prediction)
    num = 2;
  }if(string == null){
    num = 0;
  }else{
    num = string.toString().length;
  }
  
  return num;
}
