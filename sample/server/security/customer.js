// Customer
Sample.Collection.Customer.permit(['insert'])
    .Sample_ifDataInsert()
    .apply();
Sample.Collection.Customer.permit(['update'])
    .Sample_ifDataUpdate()
    .apply();
Sample.Collection.Customer.permit(['remove'])
    .Sample_ifDataRemove()
    .apply();
