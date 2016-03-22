FlowRouter.subscriptions = function () {
    // User
    this.register('Cpanel.currentUser', Meteor.subscribe('Cpanel.currentUser'));
    // Currency
    this.register('cpanel_currency', Meteor.subscribe('cpanel_currency'));
    // Setting
    this.register('Cpanel.setting', Meteor.subscribe('Cpanel.setting'));
    // Company
    this.register('Cpanel.company', Meteor.subscribe('Cpanel.company'));
    // Branch
    // this.register('cpanel_branch', Meteor.subscribe('cpanel_branch'));

    // Files upload
    this.register('files', Meteor.subscribe('files'));
    Meteor.subscribe('files');
};