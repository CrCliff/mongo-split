Split MongoDB collections based on field values. For use with MongoDB package.

### mongo-split.splitCollection()

splitCollection( url , dbName, collectionName, key)

Usage:

I have a collection of order objects. Each object has a 'is_buy_order' which is either true or false. The following will create two collections in the same database named 'true' and 'false'.
```javascript
var split = require('mongo-split');

// First parameter is url of mongoDB host
// Second parameter is name of db that contains collection to be split
// Third parameter is name of collection to be split
// Fourth parameter is key to split collection upon
split.splitCollection('mongodb://localhost:27017', 'regions', '10000002', 'is_buy_order')
```