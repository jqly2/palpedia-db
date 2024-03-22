use("palpedia-db")

db.pals.createIndex({"ZukanIndex": 1}, { partialFilterExpression: { "ZukanIndex": { $gt: 0 } } })