const http = require('http');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

async function getOrders(response) {
  try {
    const client = new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();
    console.log('Connected to MongoDB');
    
    const db = client.db("Myshop");
    const collection = db.collection("MYORDERS");
    
    const result = await collection.find({}).toArray();
    console.log('Fetched orders:', result);
    
    response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    response.end(JSON.stringify(result));
    
    await client.close();
    console.log('Connection to MongoDB closed');
  } catch (err) {
    console.error('Error:', err);
    response.writeHead(500, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    response.end(JSON.stringify({ error: 'Database connection error' }));
  }
}

const server = http.createServer((req, res) => {
  console.log(`Received request for ${req.url} with method ${req.method}`);
  if (req.url === '/orders' && req.method === 'GET') {
    getOrders(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
    res.end(JSON.stringify({ error: 'Resource not found' }));
  }
});

const port = 3002;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
