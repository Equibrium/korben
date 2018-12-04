// Declare template
var indexTpl = Template.Korben_setting;

// Index
indexTpl.onCreated(function () {
    let self = this;
    self.autorun(function () {
        self.subscribe('Korben.branch', {});
    });
});

indexTpl.helpers({
    data: function () {
        return Korben.Collection.Setting.findOne();
    }
});

// Hook
AutoForm.hooks({
    Korben_setting: {
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
