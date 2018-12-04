/**
 * Collection
 */
Korben.Collection.Currency = new Mongo.Collection("korben_currency");

/**
 * Schema
 */
Korben.Schema.Currency = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        unique: true
    },
    symbol: {
        type: String,
        label: "Symbol",
        unique: true
    },
    num: {
        type: String,
        label: "Num",
        unique: true
    }
});

/**
 * Attach schema
 */
Korben.Collection.Currency.attachSchema(Korben.Schema.Currency);
