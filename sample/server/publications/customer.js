// Publication
Meteor.publish('Sample.customer', function (selector = {}, options = {}) {
    this.unblock();
    if (this.userId) {
        check(selector, Object);
        check(options, Object);

        let data = Sample.Collection.Customer.find(selector, options);

        return data;
    }

    this.ready();
});
