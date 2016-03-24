// Order
Sample.Collection.Order.permit(['insert'])
    .Sample_ifDataNew()
    .apply();
Sample.Collection.Order.permit(['update'])
    .Sample_ifDataEdit()
    .apply();
Sample.Collection.Order.permit(['remove'])
    .Sample_ifDataDelete()
    .apply();
