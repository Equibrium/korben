/**
 * Exchange
 */
Meteor.publish('Korben.exchange', function (selector = {}, options = {}) {
    this.unblock();
    if (this.userId) {
        check(selector, Object);
        check(options, Object);

        let data = Korben.Collection.Exchange.find(selector, options);

        return data;
    }

    this.ready();
});

