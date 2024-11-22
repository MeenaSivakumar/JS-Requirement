
const books = [
    {id:1,title:"The Tale of Genji",price:200,stock:5},
    {id:2,title:"Harry Potter And The goblet Of Fire",price:400,stock:15},
    {id:3,title:"A Bunch of Old Letter ",price:300,stock:20},
    {id:1,title:"The Tale of Genji",price:500,stock:5},
    {id:4,title:"Lost Child",price:200,stock:5},
    {id:5,title:"Macbeth",price:150,stock:25},
];

const customer = [{id:1,name:"john",isExisting:true,},
    {id:2,name:"virat",isExisting:false,},
    {id:3,name:"shreyas",isExisting:true,},
    {id:4,name:"harry",isExisting:false,},
];

//function to remove duplicates
//if book has same id then remove it from list
// get book id
//create empty list to store books which not have duplicates and use set to mantain unique id
//to check every property use for loop
// start from index 0 and check till list length
//if visitedid == bookid 
//remove property 


function removeDuplicates(){
    const uniqueBooks = [];
    const visitedIds = new Set();

    for(let i =0;i< books.length;i++){
        if(!visitedIds.has(books[i].id)){
            uniqueBooks.push(books[i]);
            visitedIds.add(books[i].id);
        }
    }
    return uniqueBooks;
    
}

const bookList = removeDuplicates();
console.log(bookList);


// //get customer choosen books

function getCustomerBooks(selectedIds){
    const selectedBooks =  books.filter(book => selectedIds.includes(book.id));
    return selectedBooks;

}
const selectedIds = [2,3,5];
const selectedList= getCustomerBooks(selectedIds);
console.log(selectedList);

// calculate discount
//check if customer already existed
//if then the price is > 200
//give 15% discount
//else
//give discount according to the price
//100 -200 - 2%
//₹200–₹500: 5%
// ₹500–₹750: 10%
// Above ₹750: 15%
//calculatediscountprice 
//return the books title , quantity, price ,discount 
//return discounted books
function calculateDiscount(customersId,selectedBookIds){
    const customers = customer.find((c) => c.id == customersId);
    if(!customers){
        return "customer Not Found";
    }

    
    const discountedBooks = selectedBookIds.map((selected) =>{ 
       const book = books.find((b) => b.id == selected.id);   
    
        let discount =0;

        if(customer.isExisting){
            if(book.price > 200){
                discount = book.price * 0.15;  // provide discount 15%
            }
        }else{
            if (book.price >= 100 && book.price <= 200) {
                discount = book.price * 0.02;
            } else if (book.price > 200 && book.price <= 500) {
                discount = book.price * 0.05;
            } else if (book.price > 500 && book.price <= 750) {
                discount = book.price * 0.10;
            } else if (book.price > 750) {
                discount = book.price * 0.15;
            }
        }
        const discountPrice = (book.price - discount) * selected.quantity;
        return {
            title: book.title,
            quantity:selected.quantity,
            originalPrice: book.price * selected.quantity,
            discount: (discount * selected.quantity).toFixed(2),
            finalPrice:discountPrice.toFixed(2),
        };
    });

    return discountedBooks;
}



//prepare bill
//calculate total price 
//call calculatediscount and get the discountedbooks
//from discountedbooks get totalprice,
//return details of purchased books
//create object bill
//return bill

function prepareBill(customersId,selectedBookIds){
    
    const discountedBooks = calculateDiscount(customersId,selectedBookIds);

    let totalPrice = 0;
    let totalDiscount = 0;
    let finalPrice = 0;
    
    const booksPurchased = discountedBooks.map((book) =>  {
        if (book.error) return book;

        totalPrice += parseFloat(book.originalPrice);
        totalDiscount += parseFloat(book.discount);;
        finalPrice += parseFloat(book.finalPrice);

        return {
            title: book.title,
            quantity: book.quantity,
            totalPrice: book.originalPrice.toFixed(2),
            discount: book.discount,
            finalPrice: book.finalPrice,
        };
    });
   
    
     
    const finalBill= {
        bill: {
        customerName: customer.find(c => c.id == customersId)?.name || "unknown",
        booksPurchased,
        totalPrice: totalPrice.toFixed(2),
        totalDiscount: totalDiscount.toFixed(2),
        
    },
    };
    

    return finalBill;

}
const selectedBookIds = [{id:2,quantity:3},{id:5,quantity:1},];
const customersId = 2;
const finalBill = prepareBill(customersId, selectedBookIds);
console.log(JSON.stringify(finalBill,null,2));

//updatestock
//iterate through each book 
//check stock of book has more than quantity
//then remove no .of. quantity from stock

function updateStock(selectedBookIds) {
    selectedBookIds.forEach(selected => {
        const book = books.find(b => b.id === selected.id);
        if (book && book.stock >= selected.quantity) {
            book.stock -= selected.quantity;
        } else if (book) {
            console.log(`Insufficient stock for book: ${book.title}`);
        }
    });
}

//updatecustomer details
//iterate through each customer
//if they purchased book
//insert the date,amount,book purchased,
//then remove no .of. quantity from stock


function updateCustomerDetails(customersId, finalBill) {
    const customerData = customer.find(c => c.id === customersId);
    if (customerData) {
        customerData.lastPurchase = {
            date: new Date().toISOString(),
            booksPurchased: finalBill.bill.booksPurchased,
            totalAmount: finalBill.bill.totalFinalPrice
        };
    }
}

updateStock(selectedBookIds);
updateCustomerDetails(customersId, finalBill);
console.log("Updated Books:", JSON.stringify(books, null, 2));
console.log("Updated Customer:", JSON.stringify(customer, null, 2));
