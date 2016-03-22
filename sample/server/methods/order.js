Meteor.methods({
    Sample_orderById: function (id) {
        var data = Sample.Collection.Order.findOne(id);
        return data;
    }
});