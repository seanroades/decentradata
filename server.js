const express = require('express');
var request = require("request");
require('dotenv').config();
app = express();

app.get('/', (req, res) => {
    res.send("hey")
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('listening');
})

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://seanroades:justiN95!@virtual-worlds-cluster.fytit.mongodb.net/RRF-Wallet?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/test", (req, res) => {
    const { MongoClient } = require("mongodb");
    // Connection URI
    const uri =
    "mongodb+srv://seanroades:justiN95!@virtual-worlds-cluster.fytit.mongodb.net/RRF-Wallet?retryWrites=true&w=majority";
    // Create a new MongoClient
    var recommendations = [];
    const client = new MongoClient(uri);
    async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        // Establish and verify connection
        db = await client.db("dcl")
        collection = await db.collection('rec')
        cursor1 = await collection.find({"sector": "1"})
        cursor2 = await collection.find({"sector": "2"})
        cursor3 = await collection.find({"sector": "3"})
        cursor4 = await collection.find({"sector": "4"})
        cursor5 = await collection.find({"sector": "5"})
        cursor6 = await collection.find({"sector": "6"})
        cursor7 = await collection.find({"sector": "7"})
        cursor8 = await collection.find({"sector": "8"})
        cursor9 = await collection.find({"sector": "9"})
        // await cursor.forEach(console.dir);
        recommendations1 = await cursor1.toArray()
        recommendations2 = await cursor2.toArray()
        recommendations3 = await cursor3.toArray()
        recommendations4 = await cursor4.toArray()
        recommendations5 = await cursor5.toArray()
        recommendations6 = await cursor6.toArray()
        recommendations7 = await cursor7.toArray()
        recommendations8 = await cursor8.toArray()
        recommendations9 = await cursor9.toArray()

        console.log("Connected successfully to server");
    } finally {
            // Ensures that the client will close when you finish/error
            res.send({recommendations1, recommendations2, 
                recommendations3, recommendations4, recommendations5, 
                recommendations6, recommendations7, recommendations8,
                recommendations9
            })
            await client.close();
        }
    }
    run().catch(console.dir);

    
})