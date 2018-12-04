/*
 Company
 */
Meteor.publish('Korben.company', function () {
    this.unblock();
    if (this.userId) {
        let data = Korben.Collection.Company.find();
        return data;
    }

    this.ready();
});

