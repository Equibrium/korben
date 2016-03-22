/*
 Company
 */
Meteor.publish('Cpanel.company', function () {
    this.unblock();
    if (this.userId) {
        let data = Cpanel.Collection.Company.find();
        return data;
    }

    this.ready();
});

