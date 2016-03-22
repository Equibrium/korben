SignOut = function () {
    Meteor.logout((error)=> {
        if (!error) {
            // Clear Session
            Session.clearPersistent();
            
            FlowRouter.go('cpanel.welcome');
            Bert.alert({
                // title: 'Success',
                message: 'You are sign out',
                type: 'success'
            });
        }
    });
};
