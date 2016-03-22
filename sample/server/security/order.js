// Order
Sample.Collection.Order.permit(['insert'])
    .Sample_ifDataInsert()
    .apply();
Sample.Collection.Order.permit(['update'])
    .Sample_ifDataUpdate()
    .apply();
Sample.Collection.Order.permit(['remove'])
    .Sample_ifDataRemove()
    .apply();
