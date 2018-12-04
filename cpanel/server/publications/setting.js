/* Setting */
Meteor.publish('Korben.setting', function () {
    this.unblock();
    if (this.userId) {
        let data = Korben.Collection.Setting.find();
        return data;
    }

    this.ready();
});

