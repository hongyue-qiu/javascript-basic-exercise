export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if(array == null) throw 'Creating list from undefined array';
  if(array.length == 0) throw 'Creating list from empty array';
  if(array.length > 0){
    array.value = array[0];
    //if(array.length == 1) array.next = null;
    // if(array.length == 2) {array.next.value = array[1];array.next.next = null}
    // if(array.length == 3) {array.next.value = array[1];array.next.next.value = array[2];array.next.next.next = null;}
  }
  

}
