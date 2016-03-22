/**
 * Index
 */
class CpanelWelcome extends BlazeComponent {
    role() {
        let role = Roles.getGroupsForUser(Meteor.userId());
        if (role.length > 0) {
            return true;
        }

        return false;
    }
}

CpanelWelcome.register('CpanelWelcome');

/**
 * Login
 */
class CpanelWelcomeLogin extends BlazeComponent {
    onCreated() {
        // AutoForm hook
        AutoForm.hooks({
            CpanelWelcomeLogin: {
                onSubmit: function (insertDoc, updateDoc, currentDoc) {
                    this.event.preventDefault();
                    this.done(null, insertDoc);
                },
                onSuccess: function (formType, result) {
                    Meteor.loginWithPassword(result.username, result.password, (error)=> {
                        if (error) {
                            Bert.alert({
                                // title: 'Error',
                                message: error.message,
                                type: 'danger'
                            });
                        }else {
                            Bert.alert({
                                // title: 'Success',
                                message: 'You are sign in',
                                type: 'success'
                            });
                        }
                    });
                },
                onError: function (formType, error) {
                    Bert.alert({
                        // title: 'Error',
                        message: error.message,
                        type: 'danger'
                    });
                }
            }
        });
    }
}

CpanelWelcomeLogin.register('CpanelWelcomeLogin');

/**
 * Config
 */
class CpanelWelcomeConfig extends BlazeComponent {
    // On created
    onCreated() {
        let self = this;
        let rolesBranch = Meteor.user().rolesBranch;
        self.autorun(function () {
            self.subscribe('Cpanel.branch', {_id: {$in: rolesBranch}});
        });

        // AutoForm hook
        AutoForm.hooks({
            CpanelWelcomeConfig: {
                onSubmit: function (insertDoc, updateDoc, currentDoc) {
                    this.event.preventDefault();
                    this.done(null, insertDoc);
                },
                onSuccess: function (formType, result) {
                    // Set current session
                    Session.setAuth('currentModule', result.module);
                    Session.setAuth('currentBranch', result.branch);

                    FlowRouter.go(s.decapitalize(result.module) + '.home');
                }
            }
        });
    }
    
    // Event
    events() {
        return [
            {'click .js-sign-out': this.signOut}
        ]
    }

    signOut(event) {
        SignOut();
    }
}

CpanelWelcomeConfig.register('CpanelWelcomeConfig');