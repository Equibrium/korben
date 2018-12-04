/*
 Currency
 */
Meteor.publish('korben_currency', function () {
    if (this.userId) {
        return Korben.Collection.Currency.find();
    }
});
