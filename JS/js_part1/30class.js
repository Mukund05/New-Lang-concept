//Classes are a template for creating objects. They encapsulate data with code to work on that data.
// Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    iam(){
        return 'rect';
    }
}

let i=new Rectangle(120,23);
console.log(i);
//must use new keyword to create object by using classes

class square extends Rectangle{
    area(){
        return this.height*this.width;
    }
}
let s=new square(24,36);
console.log(s.area());
console.log(s.iam());
//now you see that after extending class rectangle into class square we can easily access reactangle properties into square class
//here square is subclass and rectangle is parent class

//skipping oops as already learned
//part 1 of js end here 