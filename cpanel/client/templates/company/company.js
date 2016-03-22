// Declare template
var indexTpl = Template.Cpanel_company,
    editTpl = Template.Cpanel_companyEdit;

// Index
indexTpl.onCreated(function () {
    // Create new  alertify
    createNewAlertify("company", {size: 'lg'});
});

indexTpl.helpers({
    data: function () {
        return Cpanel.Collection.Company.findOne();
    }
});

indexTpl.events({
    'click .js-update': function (e, t) {
        alertify.company(fa("pencil", "Company"), renderTemplate(editTpl, this));
    }
});

// Edit
editTpl.helpers({
    data: function () {
        let data = Cpanel.Collection.Company.findOne(this._id);
        return data;
    }
});

// Hook
AutoForm.hooks({
    Cpanel_companyEdit: {
        onSuccess: function (formType, result) {
            alertify.company().close();
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    }
});
