/**
 * Collection
 */
Korben.Collection.Exchange = new Mongo.Collection("korben_exchange");

/**
 * Schema
 */
var Rates = new SimpleSchema({
    KHR: {
        type: Number,
        decimal: true,
        label: "KHR",
        autoform: {
            type: 'inputmask',
            inputmaskOptions: function () {
                return inputmaskOptions.currency();
            }
        }
    },
    USD: {
        type: Number,
        decimal: true,
        label: "USD",
        autoform: {
            type: 'inputmask',
            inputmaskOptions: function () {
                return inputmaskOptions.currency();
            }
        }
    },
    THB: {
        type: Number,
        decimal: true,
        label: "THB",
        autoform: {
            type: 'inputmask',
            inputmaskOptions: function () {
                return inputmaskOptions.currency();
            }
        }
    }
});

Korben.Schema.Exchange = new SimpleSchema({
    exDate: {
        type: Date,
        label: "Date",
        unique: true,
        defaultValue: moment().toDate(),
        autoform: {
            afFieldInput: {
                type: "bootstrap-datetimepicker",
                dateTimePickerOptions: {
                    format: 'DD/MM/YYYY',
                    pickTime: false
                }
            }
        }
    },
    base: {
        type: String,
        label: "Base currency"
    },
    rates: {
        type: Rates
    }
});

/**
 * Attach schema
 */
Korben.Collection.Exchange.attachSchema(Korben.Schema.Exchange);
