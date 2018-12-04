/**
 * Sidebar Layout
 */
Template._sidebarLayout.helpers({
    sidebarMenu: function () {
        var currentModule = Session.get('currentModule');
        // var menu = s.decapitalize(currentModule);

        return `${currentModule}_sidebarMenu`;
    }
});

/**
 * Sidebar form for branch office
 */
Template._sidebarForm.onCreated(function () {
    let self = this;
    self.autorun(function () {
        let currentUser = Meteor.user();
        if (currentUser && currentUser.rolesBranch) {
            self.subscribe('Korben.branch', {_id: {$in: currentUser.rolesBranch}});
        }
    });
});

Template._sidebarForm.events({
    'change [name="branch"]': function (e, t) {
        let branch = e.target.value;

        // Change current branch office
        Session.setAuth('currentBranch', branch);
    }
});
