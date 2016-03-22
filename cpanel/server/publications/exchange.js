/**
 * Exchange
 */
Meteor.publish('Cpanel.exchange', function (selector = {}, options = {}) {
    this.unblock();
    if (this.userId) {
        check(selector, Object);
        check(options, Object);

        let data = Cpanel.Collection.Exchange.find(selector, options);

        return data;
    }

    this.ready();
});

