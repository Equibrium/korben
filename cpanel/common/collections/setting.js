/**
 * Collection
 */
Korben.Collection.Setting = new Mongo.Collection("korben_setting");

/**
 * Schema
 */
Korben.Schema.Setting = new SimpleSchema({
    headOffice: {
        type: String,
        autoform: {
            type: "select2",
            options: function () {
                return Korben.List.branch();
            }
        }
    },
    baseCurrency: {
        type: String,
        autoform: {
            type: "select2",
            options: function () {
                return Korben.List.currency();
            }
        }
    }
});

/**
 * Attach schema
 */
Korben.Collection.Setting.attachSchema(Korben.Schema.Setting);
