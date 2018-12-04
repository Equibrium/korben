/*
 Branch
 */
Meteor.publish('Korben.branch', function (selector = {}, options = {}) {
    this.unblock();
    if (this.userId) {
        check(selector, Object);
        check(options, Object);

        let data = Korben.Collection.Branch.find(selector, options);

        return data;
    }

    this.ready();
});
