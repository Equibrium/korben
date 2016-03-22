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
        let rolesBranch = Meteor.user().rolesBranch;
        self.subscribe('Cpanel.branch', {_id: {$in: rolesBranch}});
    });
});

Template._sidebarForm.events({
    'change [name="branch"]': function (e, t) {
        let branch = e.target.value;

        // Change current branch office
        Session.setAuth('currentBranch', branch);
    }
});
