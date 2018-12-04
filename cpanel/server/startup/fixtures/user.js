Meteor.startup(function () {
    if (Meteor.users.find().count() == 0) {
        // Insert super
        var superId = Accounts.createUser(
            {
                username: 'super',
                email: 'super@korben.com',
                password: 'super123',
                profile: {
                    name: 'Super'
                }
            }
        );
        Roles.addUsersToRoles(superId, ['super'], 'Korben');
        Meteor.users.update({_id: superId}, {$set: {rolesBranch: ['001']}});

        // Insert admin
        var adminId = Accounts.createUser(
            {
                username: 'admin',
                email: 'admin@korben.com',
                password: 'admin123',
                profile: {
                    name: 'Admin'
                }
            }
        );
    }
});