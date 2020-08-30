export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if(array == null) throw 'Flatten undefined or null array';
  var newArray = [];
  for(var i =0; i < array.length; i++){
    if(array[i].length>0){
      for(var j=0; j < array[i].length; j++){
        newArray.push(array[i][j]);
      }
    }else{
      newArray.push(array[i]);
    }
  }
  return newArray;
}
