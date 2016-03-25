/**
 * Declare template
 */
var indexTpl = Template.Sample_location,
    newTpl = Template.Sample_locationNew,
    editTpl = Template.Sample_locationEdit,
    showTpl = Template.Sample_locationShow;

/**
 * Index
 */
indexTpl.onCreated(function () {
    // Create new  alertify
    createNewAlertify("location");
});

indexTpl.events({
    'click .js-create' (e, t) {
        alertify.location(fa("plus", "Location"), renderTemplate(newTpl));
    },
    'click .js-update' (e, t) {
        alertify.location(fa("pencil", "Location"), renderTemplate(editTpl, this));
    },
    'click .js-destroy' (e, t) {
        destroyAction(
            Sample.Collection.Location,
            {_id: this._id},
            {title: 'Location', item: this._id}
        );
    },
    'click .js-display' (e, t) {
        alertify.alert(fa("eye", "Location"), renderTemplate(showTpl, this).html);
    }
});

/**
 * Edit
 */
editTpl.onCreated(function () {
    this.autorun(()=> {
        let data = Template.currentData();
        this.subscribe('Sample.location', {_id: data._id});
    });
});

editTpl.helpers({
    data() {
        let getLocation = Sample.Collection.Location.findOne(this._id);
        return getLocation;
    }
});

/**
 * Show
 */
showTpl.onCreated(function () {
    this.autorun(()=> {
        let data = Template.currentData();
        this.subscribe('Sample.location', {_id: data._id});
    });
});

showTpl.helpers({
    data() {
        let data, getLocation;
        data = this.currentData();
        getLocation = Sample.Collection.Location.findOne(data._id);

        return getLocation;
    }
});

/**
 * Hook
 */
let hooksObject = {
    onSuccess: function (formType, result) {
        if (formType == 'update') {
            alertify.location().close();
        }
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
};

AutoForm.addHooks([
    'Sample_locationNew',
    'Sample_locationEdit'
], hooksObject);
