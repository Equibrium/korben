/* Setting */
Meteor.publish('Cpanel.setting', function () {
    this.unblock();
    if (this.userId) {
        let data = Cpanel.Collection.Setting.find();
        return data;
    }

    this.ready();
});

