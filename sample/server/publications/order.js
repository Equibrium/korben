// Publication
Meteor.publish('Sample_orderByCustomer', function (customerId) {
    this.unblock();
    if (this.userId) {
        check(customerId, String);
        return Sample.Collection.Order.find({customerId: customerId}, {removed: true});
    }

    this.ready();
});

Meteor.publish('Sample_orderById', function (id) {
    this.unblock();
    if (this.userId) {
        check(id, String);
        return Sample.Collection.Order.find({_id: id}, {removed: true});
    }

    this.ready();
});
