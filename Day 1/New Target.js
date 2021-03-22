// Write a function that can be called with 'new' only or else it will throw error.

function Product(title, price) {
    if(!new.target){
        throw "'Product()' is a constructor, must be called with 'new'";
    }
    this.title = title;
    this.price = price;
}
try{
    let p1 = Product('Pen',10);
    console.log(p1);
    let p2 = Product('Pencil',5);
    console.log(p2);
}
catch(error){
    console.log(error);
}