export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if(array == null) throw 'Creating list from undefined array';
  if(array.length == 0) throw 'Creating list from empty array';

  function List(value,next){
    value = value;
    next = next;    
  }
  var list = new List();
  var list2 = new Object();
  var list3 = new Object();

  //list.next = null;
  //list.value = array[0];
  
  if(array.length > 0){
    list.value = array[0];
    if(array.length == 1) {list.next = null; }
    if(array.length == 2) {
      list2.value = array[1];
      list2.next = null;
      list.next = list2;
      
    }
   if(array.length == 3) {
    list2.value = array[1];
    list3.next = null;
    list3.value = array[2];
    list2.next = list3;
    list.next = list2;

   }
   }
 
  return list;

}
