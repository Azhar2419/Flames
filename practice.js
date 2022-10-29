// factory function
// using this type of function we can create objects by calling this function.
function createObject (radius){
    return   {
       radius,
       draw : function(){
           console.log("dwaing the circle with radius", radius);
       }
   };
   }
   
   let myObj1 = createObject(5);
   let myObj2 = createObject(10);
   myObj1.draw();
   myObj2.draw();

   // Constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log("drawing circle in constructor function with radius", this.radius);
    }
};

// this new keyword creates an empty object and returns the object.
let myObj3 = new Circle(13);
myObj3.draw();
