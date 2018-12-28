Split MongoDB collections based on field values. For use with MongoDB package.

### mongo-split.splitCollection()

splitCollection( url , dbName, collectionName, key)

Usage:
```javascript
var split = require('mongo-split');

split.splitCollection('mongodb://localhost:27017', 'regions', '10000002', 'is_buy_order')
```