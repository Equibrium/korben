// Declare template
var indexTpl = Template.Korben_company,
    editTpl = Template.Korben_companyEdit;

// Index
indexTpl.onCreated(function () {
    // Create new  alertify
    createNewAlertify("company", {size: 'lg'});
});

indexTpl.helpers({
    data () {
        return Korben.Collection.Company.findOne();
    }
});

indexTpl.events({
    'click .js-update' (e, t) {
        alertify.company(fa("pencil", "Company"), renderTemplate(editTpl, this));
    }
});

// Edit
editTpl.helpers({
    data () {
        let data = Korben.Collection.Company.findOne(this._id);
        return data;
    }
});

// Hook
AutoForm.hooks({
    Korben_companyEdit: {
        onSuccess: function (formType, result) {
            alertify.company().close();
            alertify.success('Success');
        },
        onError: function (formType, error) {
            alertify.error(error.message);
        }
    }
});
