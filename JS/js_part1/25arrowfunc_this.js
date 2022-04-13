//arrow function doesn't take this object from his scope but take from outer scope
let func={
    product:"Alliances",
    rate:"900",
    buyer:()=>{
        console.log(this.product,this.rate);
    }
}
func.buyer();       //give you undefined as this search for product outside func scope always you can change this of arrow call function
func.buyer.bind(func);  //even bind cannot change this of this function
