Meteor.startup(function () {
    if (Korben.Collection.Currency.find().count() == 0) {
        var doc = [
            {_id: 'KHR', name: 'Cambodian Riel', symbol: 'R', num: '1'},
            {_id: 'USD', name: 'United States Dollar', symbol: '$', num: '2'},
            {_id: 'THB', name: 'Thai Baht', symbol: 'B', num: '5'}
        ];

        _.each(doc, function (obj) {
            Korben.Collection.Currency.insert(obj);
        });
    }
});