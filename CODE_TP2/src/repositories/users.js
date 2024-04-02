async function findUserInDB() {
    
    try {
        const collection = db.collection('users');
        const user = await collection.find();
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


async function createUserInDB(userData) {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('users');
        const result = await collection.insertOne(userData);
        return result.ops[0];
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        await client.close();
    }
}


async function updateUserInDB(userId, updatedUserData) {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('users');
        const result = await collection.findOneAndUpdate(
            { _id: userId },
            { $set: updatedUserData },
            { returnOriginal: false }
        );
        return result.value;
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        await client.close();
    }
}


async function deleteUserInDB(userId) {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('users');
        await collection.deleteOne({ _id: userId });
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        await client.close();
    }
}

module.exports = {
    findUserInDB,
    createUserInDB,
    updateUserInDB,
    deleteUserInDB
};
