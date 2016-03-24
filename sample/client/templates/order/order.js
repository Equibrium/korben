/**
 * Declare template
 */
var indexTpl = Template.Sample_order,
    newTpl = Template.Sample_orderNew,
    editTpl = Template.Sample_orderEdit,
    showTpl = Template.Sample_orderShow,

    customerShowTpl = Template.Sample_customerShow;

/**
 * Index
 */
indexTpl.onCreated(function () {
    // Create new  alertify
    createNewAlertify('order', {size: 'lg'});

    // Subscription
    var customerId = FlowRouter.getParam('customerId');
    this.subscribe('Sample.customer', {_id: customerId});
});

indexTpl.helpers({
    tabularSelector: function () {
        return {customerId: FlowRouter.getParam('customerId')};
    },
    customer: function () {
        return getCurrentCustomer();
    }
});

indexTpl.events({
    'click .js-create': function (e, t) {
        alertify.order(fa('plus', 'Order'), renderTemplate(newTpl))
            .maximize();
    },
    'click .js-update': function (e, t) {
        alertify.order(fa('pencil', 'Order'), renderTemplate(editTpl, this));
    },
    'click .js-destroy': function (e, t) {
        destroyAction(
            Sample.Collection.Order,
            {_id: this._id},
            {title: 'Order', item: this._id}
        );
    },
    'click .js-display': function (e, t) {
        alertify.alert(fa('eye', 'Order'), renderTemplate(showTpl, this).html);
    },
    'click .js-customerInfo': function (e, t) {
        alertify.alert(fa('eye', 'Customer'), renderTemplate(customerShowTpl, this).html);
    }
});

/**
 * New
 */
newTpl.helpers({
    customer: function () {
        return getCurrentCustomer();
    }
});

/**
 * Edit
 */
editTpl.onCreated(function () {
    let data = Template.currentData();
    this.autorun(()=> {
        this.subscribe('Sample.order', {_id: data._id});
    });
});

editTpl.onRendered(function () {
});

editTpl.helpers({
    data: function () {
        var data = Sample.Collection.Order.findOne(this._id);
        return data;
    }
});

/**
 * Show
 */
showTpl.onCreated(function () {
    this.autorun(()=> {
        let data = Template.currentData();
        this.subscribe('Sample.order', {_id: data._id});
    });
});

showTpl.helpers({
    data: function () {
        var data = Sample.Collection.Order.findOne(this._id);
        data.desStr = Spacebars.SafeString(data.des);
        return data;
    }
});

/**
 * Hook
 */
let hooksObject = {
    before: {
        insert: function (doc) {
            doc.branchId = Session.get('currentBranch');
            return doc;
        }
    },
    onSuccess: function (formType, result) {
        if (formType == 'update') {
            alertify.order().close();
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
AutoForm.addHooks(['Sample_orderNew', 'Sample_orderEdit'], hooksObject);

// Get current customer
var getCurrentCustomer = function () {
    var id = FlowRouter.getParam('customerId');
    var data = Sample.Collection.Customer.findOne(id);
    if (data.photo) {
        data.photoUrl = Files.findOne(data.photo).url();
    } else {
        data.photoUrl = null;
    }

    return data;
};
