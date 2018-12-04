/**
 * Declare template
 */
var indexTpl = Template.Korben_branch,
    newTpl = Template.Korben_branchNew,
    editTpl = Template.Korben_branchEdit,
    showTpl = Template.Korben_branchShow;

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
            Korben.Collection.Branch,
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
        self.subscribe('Korben.branch', {_id: self.data._id});
    });
});

editTpl.helpers({
    data () {
        let data = Korben.Collection.Branch.findOne(this._id);
        return data;
    }
});

/**
 * Show
 */
showTpl.onCreated(function () {
    let self = this;
    self.autorun(function () {
        self.subscribe('Korben.branch', {_id: self.data._id});
    });
});

showTpl.helpers({
    data () {
        let data = Korben.Collection.Branch.findOne(this._id);
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
