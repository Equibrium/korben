// Customer
Sample.Collection.Customer.permit(['insert'])
    .Sample_ifDataNew()
    .apply();
Sample.Collection.Customer.permit(['update'])
    .Sample_ifDataEdit()
    .apply();
Sample.Collection.Customer.permit(['remove'])
    .Sample_ifDataDelete()
    .apply();
