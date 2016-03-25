/**
 * Declare template
 */
var indexTpl = Template.Sample_customer,
    newTpl = Template.Sample_customerNew,
    editTpl = Template.Sample_customerEdit,
    showTpl = Template.Sample_customerShow,

    locationAddOnTpl = Template.Sample_locationAddonForCustomer;

/**
 * State
 */
var locationState = new ReactiveObj({
    id: null,
    name: null
});

/**
 * Index
 */
indexTpl.onCreated(function () {
    // Create new  alertify
    createNewAlertify('customer', {size: 'lg'});
    createNewAlertify('customerAddon', {size: 'lg'});
});

indexTpl.helpers({
    selector() {
        return {branchId: Session.get('currentBranch')};
    }
});

indexTpl.events({
    'click .js-create': function (e, t) {
        alertify.customer(fa('plus', 'Customer'), renderTemplate(newTpl));
    },
    'click .js-update': function (e, t) {
        alertify.customer(fa('pencil', 'Customer'), renderTemplate(editTpl, this));
    },
    'click .js-destroy': function (e, t) {
        destroyAction(
            Sample.Collection.Customer,
            {_id: this._id},
            {title: 'Customer', item: this._id}
        );
    },
    'click .js-dispaly': function (e, t) {
        alertify.alert(fa('eye', 'Customer'), renderTemplate(showTpl, this).html);
    },
    'dblclick tbody > tr': function (e) {
        var dataTable = $(e.target)
            .closest('table')
            .DataTable();
        var rowData = dataTable.row(e.currentTarget)
            .data();

        FlowRouter.go('sample.order', {customerId: rowData._id});
    }
});

/**
 * Insert
 */
newTpl.onCreated(function () {
    // Create new  alertify
    createNewAlertify('customerAddon', {size: 'lg'});
});

newTpl.helpers({
    location() {
        return {id: locationState.get('id'), name: locationState.get('name')};
    }
});

newTpl.events({
    'click .js-location-addon': function (e, t) {
        alertify.customerAddon(fa('list', 'Location'), renderTemplate(locationAddOnTpl));
    }
});

newTpl.onDestroyed(function () {
    locationState.set('id', null);
    locationState.set('name', null);
});

/**
 * Update
 */
editTpl.onCreated(function () {
    this.autorun(()=> {
        let data = Template.currentData();
        locationState.set('id', data.locationId);
        locationState.set('name', data._location.name);

        this.subscribe('Sample.customer', {_id: data._id});
    });
});

editTpl.helpers({
    location() {
        return {id: locationState.get('id'), name: locationState.get('name')};
    },
    data() {
        let getCustomer = Sample.Collection.Customer.findOne(this._id);
        return getCustomer;
    }

});

editTpl.events({
    'click .js-location-addon': function (e, t) {
        alertify.customerAddon(fa('list', 'Location'), renderTemplate(locationAddOnTpl));
    }
});

editTpl.onDestroyed(function () {
    locationState.set('id', null);
    locationState.set('name', null);
});

/**
 * Show
 */
showTpl.onCreated(function () {
    this.autorun(()=> {
        let data = Template.currentData();
        this.subscribe('Sample_customer', {_id: data._id});
    });
});

showTpl.helpers({
    data() {
        let getCustomer = Sample.Collection.Customer.findOne(this._id);
        getCustomer.photoUrl = null;
        if (getCustomer.photo) {
            getCustomer.photoUrl = Files.findOne(getCustomer.photo).url();
        }

        return getCustomer;
    }
});

/**
 * Customer add on
 */
locationAddOnTpl.events({
    'dblclick tbody > tr': function (e) {
        var dataTable = $(e.target)
            .closest('table')
            .DataTable();
        var rowData = dataTable.row(e.currentTarget)
            .data();

        locationState.set('id', rowData._id);
        locationState.set('name', rowData.name);
        alertify.customerAddon().close();
    }
});

/**
 * Hook
 */
let hooksObject = {
    onSuccess: function (formType, result) {
        if (formType == 'update') {
            alertify.customer().close();
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
    'Sample_customerNew',
    'Sample_customerEdit'
], hooksObject);
