const { getCollection } = require('./connection');

async function findOne(collectionName, query, options = {}) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.findOne(query, options);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction findOne avec les parametres suivants: ${query}`);
		console.log(e);
		throw e;
	}
}


async function find(collectionName, query, options = {}) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.find(query, options).toArray();
		return result;
	} catch (e) {
		console.log('Erreur lors de l execution de la fonction find');
		console.log(e);
		throw e;
	}
}


async function insertOne(collectionName, doc, options = {}) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.insertOne(doc, options);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction insertOne avec les parametres suivants: ${doc}`);
		console.log(e);
		throw e;
	}
}


async function insertMany(collectionName, docs, options = {}) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.insertMany(docs, options);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction insertMany avec les parametres suivants: ${docs}`);
		console.log(e);
		throw e;
	}
}


async function updateOne(collectionName, query, update, options = {}) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.updateOne(query, update, options);
		return result
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction updateOne avec les parametres suivants: ${query}`);
		console.log(e);
		throw e;
	}
}


async function updateMany(collectionName, query, update, options = {}) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.updateMany(query, update, options);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction updateMany avec les parametres suivants: ${query}`);
		console.log(e);
		throw e;
	}
}


async function replace(collectionName, query, replacement, options = {}) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.replaceOne(query, replacement, options);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction replace avec les parametres suivants: ${query}`)
		console.log(e);
		throw e;
	}
}


async function deleteOne(collectionName, query, options = {}) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.deleteOne(query, options);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction deleteOne avec les parametres suivants: ${query}`);
		console.log(e);
		throw e;
	}
}


async function deleteMany(collectionName, query, options = {}) {
	try {
		const collection = getCollection(collectionName);
		const result = await collection.deleteMany(query, options);
		return result;
	} catch (e) {
		console.log(`Erreur lors de l execution de la fonction deleteMany avec les parametres suivants: ${query}`);
		console.log(e);
		throw e;
	}
}


module.exports = {
    findOne,
    find,
    insertOne,
    insertMany,
    updateOne,
    updateMany,
    replace,
    deleteOne,
    deleteMany
}