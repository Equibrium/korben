// Publication
//Meteor.publish('Sample_customer', function (branchId) {
//    this.unblock();
//    if (this.userId) {
//        var selector = {};
//        if (!_.isUndefined(branchId)) {
//            selector.branchId = branchId;
//        }
//
//        return Sample.Collection.Customer.find(selector, {removed: true});
//    }
//
//    this.ready();
//});

Meteor.publish('Sample_customerById', function (id) {
    this.unblock();
    if (this.userId) {
        check(id, String);

        return Sample.Collection.Customer.find({_id: id});
    }

    this.ready();
});
