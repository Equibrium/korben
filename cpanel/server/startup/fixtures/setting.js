Meteor.startup(function () {
    if (Korben.Collection.Setting.find().count() == 0) {
        Korben.Collection.Setting.insert(
            {
                headOffice: '001',
                baseCurrency: 'USD'
            }
        )
    }
});