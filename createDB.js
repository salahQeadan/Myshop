const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db('Myshop');
        const col = db.collection('MYORDERS');
        var myobj = [
          { productName: "Product A", orderNumber: 1, orderId: "A123", orderPrice: 100, deliveryAddress: "123 Street, City", customerEmail: "example@example.com" },
          { productName: "Product B", orderNumber: 2, orderId: "B456", orderPrice: 150, deliveryAddress: "456 Avenue, City", customerEmail: "example2@example.com" },
          { productName: "Product C", orderNumber: 3, orderId: "C789", orderPrice: 200, deliveryAddress: "789 Road, City", customerEmail: "example3@example.com" },
          { productName: "Product D", orderNumber: 4, orderId: "D101", orderPrice: 250, deliveryAddress: "101 Blvd, City", customerEmail: "example4@example.com" },
          { productName: "Product E", orderNumber: 5, orderId: "E112", orderPrice: 300, deliveryAddress: "112 Lane, City", customerEmail: "example5@example.com" },
          { productName: "Product F", orderNumber: 6, orderId: "F131", orderPrice: 350, deliveryAddress: "131 Path, City", customerEmail: "example6@example.com" },
          { productName: "Product G", orderNumber: 7, orderId: "G415", orderPrice: 400, deliveryAddress: "415 High St, City", customerEmail: "example7@example.com" },
          { productName: "Product H", orderNumber: 8, orderId: "H161", orderPrice: 450, deliveryAddress: "161 Park Ave, City", customerEmail: "example8@example.com" },
          { productName: "Product I", orderNumber: 9, orderId: "I718", orderPrice: 500, deliveryAddress: "718 View St, City", customerEmail: "example9@example.com" },
          { productName: "Product J", orderNumber: 10, orderId: "J202", orderPrice: 550, deliveryAddress: "202 Lake Rd, City", customerEmail: "example10@example.com" }
      ];
      
        const p = await col.insertMany(myobj);
        console.log("Document inserted");

    } catch (err) {
        console.log(err.stack);
    }

    finally {
       await client.close();
    }
}

run().catch(console.dir);
