const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoClient = require('mongodb').MongoClient

const client = new mongoClient('mongodb://localhost:27017', { useNewUrlParser: true });

app.use(bodyParser.json())
let db;
let collection;

app.use('/', (req, res, next) => {
    if (!db) {
        client.connect((err) => {
            db = client.db('USRestaurants')
            collection = db.collection('restaurants')
            next()
        })
    }
    else {
        collection = db.collection('restaurants')
        next()
    }
})

// Find all documents
router.get('/1', function (req, res, next) {
    collection.find({}).each(function (err, data) {
        if (!data) next();
        // else console.log(data);
    });

});

// Find selected fields restaurant_id, name, district and cuisine for all documents
router.get('/2', function (req, res, next) {
    collection.find({}, {
        'name': 1,
        'district': 1,
        'cuisine': 1,
        'restaurant_id': 1
    }).each(function (err, data) {
        if (!data) next();
        // else console.log(data);
    });

});

// Find selected fields restaurant_id, name, district and cuisine excluding _id for all documents
router.get('/3', function (req, res, next) {
    collection.find({}, {
        'name': 1,
        'district': 1,
        'cuisine': 1,
        'restaurant_id': 1,
        _id: 0
    }).each(function (err, data) {
        if (!data) next();
        // else console.log(data);
    });

});

// Find selected fields restaurant_id, name, district and zipcode excluding _id for all documents
router.get('/4', function (req, res, next) {
    collection.find({}, {
        'restaurant_id': 1,
        'name': 1,
        'district': 1,
        'address.zipcode': 1,
        _id: 0
    }).each(function (err, data) {
        if (!data) next();
        // else console.log(data);
    });
});

// Find all restaurants which is in the district Bronx
router.get('/5', function (req, res, next) {
    collection.find({'district': 'Bronx'})
        .each(function (err, data) {
            if (!data) next();
            // else console.log(data);
        });
});

// Find first 5 restaurants which is in the district Bronx
router.get('/6', function (req, res, next) {
    collection.find({'district': 'Bronx'}).limit(5)
        .each(function (err, data) {
            if (!data) next();
            // else console.log(data);
        });
});

// Find next 5 restaurants after skipping 5 restaurants in the district Bronx
router.get('/7', function (req, res, next) {
    collection.find({'district': 'Bronx'}).skip(5).limit(5)
        .each(function (err, data) {
            if (!data) next();
            // else console.log(data);
        });
});

// Find restaurants which locates in latitude value less than -95.754168
router.get('/8', function (req, res, next) {
    collection.find({'address.coord.0': {$lt: -95.754168}})
        .each(function (err, data) {
            if (!data) next();
            // else console.log(data);
        });
});

// Find restaurants that does not prepare any cuisine of 'American' and their grade score more than 70 and latitude less than -65.754168
router.get('/9', function (req, res, next) {
    collection.find({$and: [{'cuisine': {$ne: 'American'}}, {'address.coord.0': {$lt: -65.754168}}, {'grades.score': {$gt: 70}}]})
        .each(function (err, data) {
            if (!data) next();
            // else console.log(data);
        });
});

// Find the restaurant_id, name, district and cuisine for those restaurants which contains 'Wil' as first three letters for its name
router.get('/10', function (req, res, next) {
    collection.find({'name': {$regex: '^Wil'}}, {
        'restaurant_id': true,
        'name': true,
        'district': true,
        'cuisine': true
    }).each(function (err, data) {
        if (!data) next();
        // else console.log(data);
    });
});

// Find the restaurant_id, name, district and cuisine for those restaurants which contains 'ces' as last three letters for its name
router.get('/11', function (req, res, next) {
    collection.find({'name': {$regex: 'ces$'}}, {
        'address': 0,
        'grades': 0
    }).each(function (err, data) {
        if (!data) next();
        // else console.log(data);
    });
});

// Find the restaurant_id, name, district and cuisine for those restaurants which contains 'Reg' as three letters somewhere in its name
router.get('/12', function (req, res, next) {
    collection.find({'name': {$regex: 'Reg'}}, {
        'address': false,
        'grades': false
    }).each(function (err, data) {
        if (!data) next();
        // else console.log(data);
    });
});

// Find the restaurants which belongs to the district Bronx and prepared either American or Chinese dish
router.get('/13', function (req, res, next) {
    collection.find({$and: [{'district': 'Bronx'}, {'cuisine': {$in: ['American', 'Chinese']}}]})
        .each(function (err, data) {
            if (!data) next();
            // else console.log(data);
        });
});

// Find the restaurant_id, name, district and cuisine for those restaurants which belongs to the district Staten Island or Queens or Bronx or Brooklyn
router.get('/14', function (req, res, next) {
    collection.find({'district': {$in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {
        'restaurant_id': 1,
        'name': 1,
        'district': 1,
        'cuisine': 1
    }).each(function (err, data) {
        if (!data) next();
        // else console.log(data);
    });
});

// Find the restaurant_id, name, district and cuisine for those restaurants which are not belonging to the district Staten Island or Queens or Bronx or Brooklyn
router.get('/15', function (req, res, next) {
    collection.find({'district': {$nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {
        'address': 0,
        'grades': 0
    }).each(function (err, data) {
        if (!data) next();
        // else console.log(data);
    });
});

// Find the restaurant_id, name, district and cuisine for those restaurants which achieved a score which is not more than 10
router.get('/16', function (req, res, next) {
    collection.find({'grades.score': {$lte: 10}}, {'address': 0, 'grades': 0})
        .each(function (err, data) {
            if (!data) next();
            // else console.log(data);
        });
});

// Find the restaurant_id, name, address and geographical location for those restaurants where 2nd element of coord array contains a value which is more than 42 and upto 52.
router.get('/17', function (req, res, next) {
    collection.find({'address.coord.1': {$gt: 42, $lte: 52}}, {
        'restaurant_id': 1,
        'name': 1,
        'address': 1
    }).each(function (err, data) {
        if (!data) next();
        // else console.log(data);
    });
});

// Arrange the name of the restaurants in ascending order along with all the columns
router.get('/18', function (req, res, next) {
    collection.find({}).sort({'name': 1})
        .each(function (err, data) {
            if (!data) next();
            // else console.log(data);
        });
});

// Arrange the name of the restaurants in descending order along with all the columns
router.get('/19', function (req, res, next) {
    collection.find({}).sort({'name': -1})
        .each(function (err, data) {
            if (!data) next();
            // else console.log(data);
        });
});

// Arrange the name of the cuisine in ascending order and for those same cuisine district should be in descending order
router.get('/20', function (req, res, next) {
    collection.find({}).sort({'cuisine': 1, 'district': -1})
        .each(function (err, data) {
            if (!data) next();
            // else console.log(data);
        });
});

// Select all the documents in the restaurants collection where the coord filed value is Double
router.get('/21', function (req, res, next) {
    collection.find({'address.coord': {$type: 'double'}})
        .each(function (err, data) {
            if (!data) next();
            // else console.log(data);
        });
});

// Find the restaurant name, district, longitude and latitude and cuisine for those restaurants which contains 'Mad' as the first three letters of its name
router.get('/22', function (req, res, next) {
    collection.find({'name': {$regex: '^Mad'}}, {
        'name': true,
        'district': true,
        'address.coord': true,
        'cuisine': true
    }).each(function (err, data) {
        if (!data) next();
        // else console.log(data);
    });
});

app.listen(4000, () => console.log('app now listen on port 4000'));