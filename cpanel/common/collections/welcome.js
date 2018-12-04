/**
 * Schema
 */
// Login
Korben.Schema.WelcomeLogin = new SimpleSchema({
    username: {
        type: String
    },
    password: {
        type: String
    }
});

// Config
Korben.Schema.WelcomeConfig = new SimpleSchema({
    module: {
        type: String,
        label: 'Module',
        autoform: {
            type: "select2",
            options: function () {
                return Meteor.isClient && Korben.List.roleForUser();
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
                return Meteor.isClient && Korben.List.branchForUser();
            },
            afFieldInput: {
                value: function () {
                    return Meteor.isClient && Session.get('currentBranch');
                }
            }
        }
    }
});

Korben.Schema.SidebarBranch = new SimpleSchema({
    branch: {
        type: String,
        label: "Branch",
        autoform: {
            type: "select2",
            options: function () {
                return Meteor.isClient && Korben.List.branchForUserOnSidebar();
            },
            afFieldInput: {
                value: function () {
                    return Meteor.isClient && Session.get('currentBranch');
                }
            }
        }
    }
});
