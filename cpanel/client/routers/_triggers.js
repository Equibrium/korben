FlowRouter.triggers.enter([
    function (context, redirect) {
        let currentModule = Session.get('currentModule');
        let currentBranch = Session.get('currentBranch');

        if (!Meteor.userId() || !currentModule || !currentBranch) {
            FlowRouter.go('korben.welcome');
        }
    }
], {
    except: ["korben.welcome"]
});
