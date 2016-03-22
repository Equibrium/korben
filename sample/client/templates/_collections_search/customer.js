///**
// * Declare template
// */
//var indexTpl = Template.Sample_customerSearch,
//    listTpl = Template.Sample_customerSearchList,
//
//    customerAddonTpl = Template.Sample_addressInsert;
//
///**
// * Index
// */
//indexTpl.onCreated(function () {
//    createNewAlertify("customer");
//});
//
//indexTpl.events({
//    'click .insert': function (e, t) {
//        alertify.customer(fa("plus", "Customer"), renderTemplate(customerAddonTpl))
//            .maximize();
//    },
//    'change .filter-select': function (e) {
//        var instance = EasySearch.getComponentInstance({
//            index: 'Sample_customerSearch'
//        });
//
//        EasySearch.changeProperty('Sample_customerSearch', 'filteredGender', $(e.target).val());
//        EasySearch.changeLimit('Sample_customerSearch', 10);
//
//        instance.paginate(1);
//        instance.triggerSearch();
//    },
//    'change .sort-select': function (e) {
//        var instance = EasySearch.getComponentInstance({
//            index: 'Sample_customerSearch'
//        });
//
//        EasySearch.changeProperty('Sample_customerSearch', 'sortBy', $(e.target).val());
//        EasySearch.changeLimit('Sample_customerSearch', 10);
//
//        instance.paginate(1);
//        instance.triggerSearch();
//    }
//});
//
///**
// * List
// */
//listTpl.helpers({
//    data: function () {
//        var self = this;
//
//        self.photoUrl = null;
//
//        if (!_.isUndefined(self.photo)) {
//            self.photoUrl = Files.findOne(self.photo).url();
//        }
//
//        self.dobVal = moment(self.dob).format('DD-MM-YYYY');
//
//        return self;
//    }
//});
