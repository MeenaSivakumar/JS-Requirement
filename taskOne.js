//initialize data
const bookList = [
  { id: 1, title: "book1", price: 200, stock: 10 },
  { id: 2, title: "book2", price: 300, stock: 15 },
  { id: 1, title: "book3", price: 200, stock: 10 },
  { id: 3, title: "book4", price: 400, stock: 10 },
  { id: 4, title: "book5", price: 150, stock: 9 },
];
const customerList = [
  { id: 1, customerName: "virat", },
  { id: 2, customerName: "shreyas", },
  { id: 3, customerName: "john", },
];
const customerId = 2;
const chosenbooksId = [1, 3,3,3];

//remove duplicates

function removeDuplicates() {
    const uniqueBookSet = new Set();
    const uniqueBooksList = [];
   for(const book of bookList){
    if(!uniqueBookSet.has(book.id)){
       uniqueBookSet.add(book.id);
       uniqueBooksList.push(book);
    }
    console.log(book);
   }
   return uniqueBooksList;
}

// console.log(removeDuplicates());
function filterChosenBooks(uniqueBooksList){
 return uniqueBooksList.filter(book => chosenbooksId.includes(book.id));
}

function calculateDiscount(customerChosenList){
    const currentCustomer = customerList.find(customer => customer.id === customerId);
    console.log(currentCustomer);
    const isExisting = currentCustomer ? true:false;
    for(let book of customerChosenList){
        if(isExisting){
            if(book.price > 200){
                book.discount = book.price * 15 / 100;
            }else{
                book.discount = 0;
            }
        }else{
            switch(book.price){
                case  book.price >= 100 && book.price < 200:
                     book.discount = book.price * 2 / 100;
                     break;
                case book.price >= 200 && book.price < 500:
                     book.discount = book.price * 5 / 100;
                     break;
                case book.price >= 500 && book.price < 750:
                     book.discount = book.price * 10 / 100;
                     break;   
                case  book.price >=750:
                     book.discount = book.price * 15 / 100;
                     break;  
                default:
                     book.discount = 0;
                     break;    
            }
        }
    }
    console.log(customerChosenList);
    calculatePrice(customerChosenList,currentCustomer);
    
}

function  calculatePrice(customerChosenList,currentCustomer){
    let totalDiscount = 0;
    let totalPrice = 0;
  
    for(let chosenList of customerChosenList){
        chosenList.discountprice = chosenList.price - chosenList.discount;
        totalDiscount = totalDiscount + chosenList.discount;
        totalPrice = totalPrice + chosenList.discountprice;
        }
    console.log();
    console.log("Bill:");
    console.log("customer Name:",currentCustomer.customerName);
    console.log(customerChosenList);
    console.log("totalDiscount:",totalDiscount);
    console.log("totalDiscount:",totalPrice);

    
}

function genrateBill(){
    const uniqueBooksList = removeDuplicates();
    console.log(uniqueBooksList);
    const customerChosenList = filterChosenBooks(uniqueBooksList);
    console.log(customerChosenList);
    calculateDiscount(customerChosenList);
    
    
    
}

genrateBill();

