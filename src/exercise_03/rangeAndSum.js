export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  var nums = [];
  var last = end;
  if(end-start >0){
    for(var i=start; i < last; i++){
      nums.push(parseInt(i));
    }
  }else{
    if(end-start <0){
      for(var i=start; i > last; i--){
        nums.push(parseInt(i));
      }
    }
  }
  return nums;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  var arr = 0;
  for(var i=0;i<numbers.length;i++){
    if(isNaN(numbers[i]))continue;
    arr+=parseInt(numbers[i]);
    }
        
    return arr;

}
