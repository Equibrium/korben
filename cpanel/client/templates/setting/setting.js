// Declare template
var indexTpl = Template.Cpanel_setting;

// Index
indexTpl.onCreated(function () {
    let self = this;
    self.autorun(function () {
        self.subscribe('Cpanel.branch', {});
    });
});

indexTpl.helpers({
    data: function () {
        return Cpanel.Collection.Setting.findOne();
    }
});

// Hook
AutoForm.hooks({
    Cpanel_setting: {
        onSuccess: function (formType, result) {
            Bert.alert({
                message: 'Success',
                type: 'success'
            });
        },
        onError: function (formType, error) {
            Bert.alert({
                message: error.message,
                type: 'danger'
            });
        }
    }
});
