/*
 Branch
 */
Meteor.publish('Cpanel.branch', function (selector = {}, options = {}) {
    this.unblock();
    if (this.userId) {
        check(selector, Object);
        check(options, Object);

        let data = Cpanel.Collection.Branch.find(selector, options);

        return data;
    }

    this.ready();
});
