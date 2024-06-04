const newman = require("newman")

newman.run({
    collection: require("./json-collection/oka.postman_collection.json"),
    environment: require("./json-env/oka-env.json"),
    reporters: ["cli", "htmlextra"]
})
