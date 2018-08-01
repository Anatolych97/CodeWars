var addOne = function(e) {  return e + 1; };
var square = function(e) {  return e * e; };

Function.prototype.pipe = function(e) {
   let adder = this;
   return function(elem) {
       return e(adder(elem));
   }
}
var result = [1,2,3,4,5].map(addOne.pipe(square)) //-> [4,9,16,25,36]