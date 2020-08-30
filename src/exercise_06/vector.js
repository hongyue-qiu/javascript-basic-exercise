export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.
  constructor(numx, numy) {
    this.numx = numx;
    this.numy = numy;
  }

  get x() {
    return this.numx;
  }

  get y() {
    return this.numy;
  }
   
  distance(){
    return Math.sqrt(Math.pow(this.numx, 2) + Math.pow(this.numy, 2));
  }  
  
  static plus(vector1,vector2){
    var x = vector1.x + vector2.x;
    var y = vector1.y + vector2.y;
    return new Vector(x,y);
  }
  static minus(vector1,vector2){
    var x = vector1.x - vector2.x;
    var y = vector1.y - vector2.y;
    return new Vector(x,y);
  }


}
