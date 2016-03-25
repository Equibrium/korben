/**
 * Declare template
 */
var indexTpl = Template.Cpanel_branch,
    newTpl = Template.Cpanel_branchNew,
    editTpl = Template.Cpanel_branchEdit,
    showTpl = Template.Cpanel_branchShow;

/**
 * Index
 */
indexTpl.onCreated(function () {
    // Create new  alertify
    createNewAlertify("branch", {size: 'lg'});
});

indexTpl.events({
    'click .js-create' (e, t) {
        alertify.branch(fa("plus", "Branch"), renderTemplate(newTpl));
    },
    'click .js-update' (e, t) {
        alertify.branch(fa("pencil", "Branch"), renderTemplate(editTpl, this));
    },
    'click .js-destroy' (e, t) {
        destroyAction(
            Cpanel.Collection.Branch,
            {_id: this._id},
            {title: 'Branch', item: this._id}
        );
    },
    'click .js-display' (e, t) {
        alertify.alert(fa("eye", "Branch"), renderTemplate(showTpl, this).html);
    }
});

/**
 * Edit
 */
editTpl.onCreated(function () {
    let self = this;
    self.autorun(function () {
        self.subscribe('Cpanel.branch', {_id: self.data._id});
    });
});

editTpl.helpers({
    data () {
        let data = Cpanel.Collection.Branch.findOne(this._id);
        return data;
    }
});

/**
 * Show
 */
showTpl.onCreated(function () {
    let self = this;
    self.autorun(function () {
        self.subscribe('Cpanel.branch', {_id: self.data._id});
    });
});

showTpl.helpers({
    data () {
        let data = Cpanel.Collection.Branch.findOne(this._id);
        return data;
    }
});

/**
 * Hook
 */
let hooksObject = {
    onSuccess (formType, result) {
        if (formType == 'update') {
            alertify.branch().close();
        }
        Bert.alert({
            message: 'Success',
            type: 'success'
        });
    },
    onError (formType, error) {
        Bert.alert({
            message: error.message,
            type: 'danger'
        });
    }
};

AutoForm.addHooks([
    'Sample_branchNew',
    'Sample_branchEdit'
], hooksObject);
