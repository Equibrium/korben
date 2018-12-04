FlowRouter.subscriptions = function () {
    // User
    this.register('Korben.currentUser', Meteor.subscribe('Korben.currentUser'));
    // Currency
    this.register('korben_currency', Meteor.subscribe('korben_currency'));
    // Setting
    this.register('Korben.setting', Meteor.subscribe('Korben.setting'));
    // Company
    this.register('Korben.company', Meteor.subscribe('Korben.company'));
    // Branch
    // this.register('korben_branch', Meteor.subscribe('korben_branch'));

    // Files upload
    this.register('files', Meteor.subscribe('files'));
    Meteor.subscribe('files');
};