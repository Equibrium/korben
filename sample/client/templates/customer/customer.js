// /**
//  * Declare template
//  */
// var indexTpl = Template.Sample_customer,
//     insertTpl = Template.Sample_customerInsert,
//     updateTpl = Template.Sample_customerUpdate,
//     showTpl = Template.Sample_customerShow,
//
//     customerAddOnTpl = Template.Sample_customerAddOnCustomer;
//
// /**
//  * State
//  */
// var state = new ReactiveObj({
//     customer: {}
// });
//
// /**
//  * Index
//  */
// indexTpl.onCreated(function () {
//     // Create new  alertify
//     createNewAlertify(['customer'], {size: 'lg'});
//     createNewAlertify(['customerShow']);
//     createNewAlertify(['customerAddon'], {transition: 'zoom', size: 'lg'});
// });
//
// indexTpl.onRendered(function () {
//     //
// });
//
// indexTpl.helpers({
//     selector: function () {
//         return {branchId: Session.get('currentBranch')};
//     }
// });
//
// indexTpl.events({
//     'click .js-insert': function (e, t) {
//         alertify.customer(fa('plus', 'Customer'), renderTemplate(insertTpl));
//     },
//     'click .js-update': function (e, t) {
//         alertify.customer(fa('pencil', 'Customer'), renderTemplate(updateTpl, this));
//     },
//     'click .js-remove': function (e, t) {
//         var self = this;
//
//         alertify.confirm(
//             fa('remove', 'Customer'),
//             'Are you sure to delete [' + self._id + ']?',
//             function () {
//                 Sample.Collection.Customer.remove(self._id, function (error) {
//                     if (error) {
//                         alertify.error(error.message);
//                     } else {
//                         alertify.success('Success');
//                     }
//                 });
//             },
//             null
//         );
//     },
//     'click .js-show': function (e, t) {
//         alertify.customerShow(fa('eye', 'Customer'), renderTemplate(showTpl, this));
//     },
//     'dblclick tbody > tr': function (event) {
//         var dataTable = $(event.target)
//             .closest('table')
//             .DataTable();
//         var rowData = dataTable.row(event.currentTarget)
//             .data();
//
//         FlowRouter.go('sample.order', {customerId: rowData._id});
//     }
// });
//
// /**
//  * Insert
//  */
// insertTpl.onCreated(function () {
//
// });
// insertTpl.onRendered(function () {
//     configOnRender();
// });
//
// insertTpl.helpers({
//     customer: function () {
//         return state.get('customer');
//     }
// });
//
// insertTpl.events({
//     'click .js-customer-addon': function (e, t) {
//         alertify.customerAddon(fa('plus', 'Customer'), renderTemplate(customerAddOnTpl));
//     }
// });
//
// insertTpl.onDestroyed(function () {
//     state.set('customer', {});
// });
//
// /**
//  * Update
//  */
// updateTpl.onCreated(function () {
//     this.subscribe('Sample_customerById', this.data._id);
//     state.set('customer', {
//         _id: this.data.customerId,
//         name: this.data._customer.name
//     });
// });
//
// updateTpl.onRendered(function () {
//     configOnRender();
// });
//
// updateTpl.helpers({
//     customer: function () {
//         return state.get('customer');
//     },
//     data: function () {
//         let data;
//         data = Sample.Collection.Customer.findOne(this._id);
//
//         return data;
//     }
// });
//
// updateTpl.events({
//     'click .js-customer-addon': function (e, t) {
//         alertify.customerAddon(fa('plus', 'Customer'), renderTemplate(customerAddOnTpl));
//     }
// });
//
// updateTpl.onDestroyed(function () {
//     state.set('customer', {});
// });
//
// /**
//  * Show
//  */
// showTpl.onCreated(function () {
//     this.subscribe('Sample_customerById', this.data._id);
// });
//
// showTpl.helpers({
//     data: function () {
//         let data = Sample.Collection.Customer.findOne(this._id);
//         data.photoUrl = null;
//         if (data.photo) {
//             let photo = Files.findOne(data.photo);
//             data.photoUrl = photo.url();
//         }
//
//         return data;
//     }
// });
//
// /**
//  * Customer add on
//  */
// customerAddOnTpl.events({
//     'dblclick tbody > tr': function (event) {
//         var dataTable = $(event.target).closest('table').DataTable();
//         var rowData = dataTable.row(event.currentTarget).data();
//
//         //$('label [for='customerId']').val('Lcation: ' + rowData._id);
//         //$('[name='customerId']').val(rowData._id);
//         state.set('customer', rowData);
//         alertify.customerAddon().close();
//     }
// });
//
// /**
//  * Hook
//  */
// AutoForm.hooks({
//     // Customer
//     Sample_customerInsert: {
//         before: {
//             insert: function (doc) {
//                 doc.branchId = Session.get('currentBranch');
//                 return doc;
//             }
//         },
//         onSuccess: function (formType, result) {
//             alertify.success('Success');
//         },
//         onError: function (formType, error) {
//             alertify.error(error.message);
//         }
//     },
//     Sample_customerUpdate: {
//         onSuccess: function (formType, result) {
//             alertify.customer().close();
//             alertify.success('Success');
//         },
//         onError: function (formType, error) {
//             alertify.error(error.message);
//         }
//     }
// });
//
// // Config date picker
// var configOnRender = function () {
//     // Remote select2 (Meteor method)
//     //$('[name='customerId']')
//     //    .select2({
//     //        placeholder: 'Search customer',
//     //        allowClear: true,
//     //        minimumInputLength: 3,
//     //        ajax: {
//     //            data: function (params) {
//     //                return params;
//     //            },
//     //            transport: function (args) {
//     //                // Meteor method call
//     //                Meteor.call('school_listAddress', args.data, function (err, results) {
//     //                    if (err) {
//     //                        args.error(err);
//     //                        return;
//     //                    }
//     //
//     //                    args.success(results);
//     //                });
//     //            },
//     //            results: function (data) {
//     //                var results = [];
//     //                _.each(data, function (result) {
//     //                    results.push({
//     //                        id: result.value,
//     //                        text: result.label
//     //                    });
//     //                });
//     //
//     //                return {results: results};
//     //            }
//     //        }
//     //    });
// };

/**
 * Index
 */
class Sample_customer extends BlazeComponent {
    onCreated() {
        // Create new  alertify
        createNewAlertify('customer', {size: 'lg'});
    }

    // Helper
    selector() {
        return {branchId: Session.get('currentBranch')};
    }

    // Event
    events() {
        return [
            {'click .js-create': this._onCreate},
            {'click .js-update': this._onUpdate},
            {'click .js-destroy': this._onDestroy},
            {'click .js-display': this._onDisplay},
            {'dblclick tbody > tr': this._onTabularDblclick}
        ]
    }

    _onCreate(e) {
        alertify.customer(fa('plus', 'Customer'), renderTemplate(Sample_customerNew.renderComponent()));
    }

    _onUpdate(e) {
        let data = this.currentData();
        alertify.customer(fa('pencil', 'Customer'), renderTemplate(Sample_customerEdit.renderComponent(), data));
    }

    _onDestroy(e) {
        let data = this.currentData();
        destroyAction(
            Sample.Collection.Customer,
            {_id: data._id},
            {title: 'Customer', item: data._id}
        );
    }

    _onDisplay(e) {
        let data = this.currentData();
        alertify.alert(fa('eye', 'Customer'), renderTemplate(Sample_customerShow.renderComponent(), data).html);
    }

    _onTabularDblclick(e) {
        var dataTable = $(e.target)
            .closest('table')
            .DataTable();
        var rowData = dataTable.row(e.currentTarget)
            .data();

        FlowRouter.go('sample.order', {customerId: rowData._id});
    }

}
Sample_customer.register('Sample_customer');

/**
 * New
 */
var locationState = new ReactiveObj({
    id: null,
    name: null
});

class Sample_customerNew extends BlazeComponent {
    onCreated() {
        // Create new  alertify
        createNewAlertify('customerAddon', {size: 'lg'});
    }

    // Helper
    location() {
        return {id: locationState.get('id'), name: locationState.get('name')};
    }

    // Event
    events() {
        return [
            {'click .js-location-addon': this._onLocationAddonClick}
        ]
    }

    _onLocationAddonClick(e) {
        let data = this.currentData();
        alertify.customerAddon(fa('list', 'Location'), renderTemplate(Sample_locationAddonForCustomer.renderComponent(), data));
    }
}
Sample_customerNew.register('Sample_customerNew');

/**
 * Edit
 */
class Sample_customerEdit extends BlazeComponent {
    // On created
    onCreated() {
        // Create new  alertify
        createNewAlertify('customerAddon', {size: 'lg'});

        let data = this.currentData();

        locationState.set('id', data.locationId);
        locationState.set('name', data._location.name);
        this.autorun(()=> {
            this.subscribe('Sample.customer', {_id: data._id});
        });
    }

    // Helper
    location() {
        return {id: locationState.get('id'), name: locationState.get('name')};
    }

    data() {
        let data, getCustomer;
        data = this.currentData();
        getCustomer = Sample.Collection.Customer.findOne(data._id);

        return getCustomer;
    }

    // Event
    events() {
        return [
            {'click .js-location-addon': this._onLocationAddonClick}
        ]
    }

    _onLocationAddonClick(e) {
        let data = this.currentData();
        alertify.customerAddon(fa('list', 'Location'), renderTemplate(Sample_locationAddonForCustomer.renderComponent(), data));
    }
}
Sample_customerEdit.register('Sample_customerEdit');

/**
 * Show
 */
class Sample_customerShow extends BlazeComponent {
    // On created
    onCreated() {
        let data = this.currentData();
        this.autorun(()=> {
            this.subscribe('Sample_customer', {_id: data._id});
        });
    }

    // Helper
    data() {
        let data, getCustomer;
        data = this.currentData();
        getCustomer = Sample.Collection.Customer.findOne(data._id);
        getCustomer.photoUrl = null;
        if (getCustomer.photo) {
            getCustomer.photoUrl = Files.findOne(getCustomer.photo).url();
        }

        return getCustomer;
    }
}
Sample_customerShow.register('Sample_customerShow');

/**
 * Location Addon
 */
class Sample_locationAddonForCustomer extends Sample_customerNew {
    // Event
    events() {
        return [
            {'dblclick tbody > tr': this._onTabularDblclick}
        ]
    }

    _onTabularDblclick(event) {
        var dataTable = $(event.target)
            .closest('table')
            .DataTable();
        var rowData = dataTable.row(event.currentTarget)
            .data();

        locationState.set('id', rowData._id);
        locationState.set('name', rowData.name);
        alertify.customerAddon().close();
    }
}
Sample_locationAddonForCustomer.register('Sample_locationAddonForCustomer');

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
