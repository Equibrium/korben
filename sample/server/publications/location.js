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

Meteor.publish('Sample_locationById', function (id) {
    this.unblock();
    if (this.userId) {
        check(id, String);

        return Sample.Collection.Location.find({_id: id});
        //return Sample.Collection.Location.find({}, {removed: true}); // for soft remove
    }

    this.ready();
});
