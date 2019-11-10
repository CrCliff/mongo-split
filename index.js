// Chris Clifford
// 12/2018
//
// Entry for mongo_split module
// Pass the module a collection and a key, the module creates a bunch of seperate collections.

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

exports.splitCollection = function(url, dbName, collectionName, key) { 

  MongoClient.connect(url, (connectErr, client) => {
    assert.equal(connectErr, null);

    var db = client.db(dbName);
    var collection = db.collection(collectionName);

    collection.countDocuments( (countErr, count) => {
      assert.equal(countErr, null);
      assert.notEqual(count, 0, 'Collection is empty.');
    });

    var cursor = collection.find();
    cursor.forEach( (doc) => {
      assert.notEqual(doc, null);

      var subCollection = db.collection(String(doc[key]));

      subCollection.insertOne(doc, (insertErr, res) => {
        if (insertErr) {
          console.log("Inserting duplicate order attempted...");
        }
      })

    });

  });
}
