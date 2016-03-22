/**
 * Schema
 */
// Login
Cpanel.Schema.WelcomeLogin = new SimpleSchema({
    username: {
        type: String
    },
    password: {
        type: String
    }
});

// Config
Cpanel.Schema.WelcomeConfig = new SimpleSchema({
    module: {
        type: String,
        label: 'Module',
        autoform: {
            type: "select2",
            options: function () {
                return Meteor.isClient && Cpanel.List.roleForUser();
            },
            afFieldInput: {
                value: function () {
                    return Meteor.isClient && Session.get('currentModule');
                }
            }
        }
    },
    branch: {
        type: String,
        label: "Branch",
        autoform: {
            type: "select2",
            options: function () {
                return Meteor.isClient && Cpanel.List.branchForUser();
            },
            afFieldInput: {
                value: function () {
                    return Meteor.isClient && Session.get('currentBranch');
                }
            }
        }
    }
});

Cpanel.Schema.SidebarBranch = new SimpleSchema({
    branch: {
        type: String,
        label: "Branch",
        autoform: {
            type: "select2",
            options: function () {
                return Meteor.isClient && Cpanel.List.branchForUserOnSidebar();
            },
            afFieldInput: {
                value: function () {
                    return Meteor.isClient && Session.get('currentBranch');
                }
            }
        }
    }
});
