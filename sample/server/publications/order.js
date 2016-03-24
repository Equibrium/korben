// Publication
Meteor.publish('Sample.order', function (selector = {}, options = {}) {
    this.unblock();
    if (this.userId) {
        check(selector, Object);
        check(options, Object);

        let data = Sample.Collection.Order.find(selector, options);

        return data;
    }

    this.ready();
});
