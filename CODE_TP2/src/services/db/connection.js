const { MongoClient } = require('mongodb');
const conf = require("../../../conf.json")

const url = conf.databaseUrl;
const dbName = conf.databaseName;


const client = new MongoClient(url);

async function connectTodB() {
    try {
        console.log('Trying to access the db...');
        
        await client.connect();

        
        await client.db('admin').command({ ping: 1 });
        console.log('Connected successfully to server');
    } catch (e) {
        
        console.log(JSON.stringify(err));
        await client.close();
        throw e;
    }
}

function getCollection(collectionName) {
    return client.db(dbName).collection(collectionName);
}

module.exports = {
    connectTodB,
    getCollection,
};