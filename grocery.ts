//Define an interface to standardize and reuse your object
interface Item {
    name: string;
    price: number;
    quantity: number;
}

let apple: Item = {
  name: "Apple",
  price: 0.43,
  quantity: 2
}

let orange: Item = {
    name: "Orange",
    price: 1,
    quantity: 4
  }

  let banana: Item = {
    name: "Banana",
    price: 0.60,
    quantity: 5
  }

 const element = document.getElementById("app");
 
let item: Item[] = [];
item.push(apple);
item.push(orange);
item.push(banana);



console.log(item);
