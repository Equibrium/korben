// Publication
Meteor.publish('Sample.location', function (selector = {}, options = {}) {
    this.unblock();
    if (this.userId) {
        check(selector, Object);
        check(options, Object);

        let data = Sample.Collection.Location.find(selector, options);

        return data;
    }

    this.ready();
});
