/**
 * Header User
 */
Template._headerUserLayout.helpers({
    user: function () {
        let data = Meteor.user();
        if (data) {
            data.emailsAddress = data.emails[0].address;
            return data;
        }
    }
});

Template._headerUserLayout.events({
    'click .js-sign-out': function (e, t) {
        SignOut();
    }
});
