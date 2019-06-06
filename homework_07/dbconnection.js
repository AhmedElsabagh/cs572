const mongoClient = require('mongodb').MongoClient;
const client = new mongoClient('mongodb://localhost:27017', { useNewUrlParser: true });
//homework07
//lectures
let db;
module.exports = async function (req, res, next) {
    if (!db) {
        try {
            await client.connect();
            db = client.db('homework07');
            req.db = db;
            next();
        }
        catch (err) {
            next(err);
        }
    }
    else {
        req.db = db;
        next();
    }
}