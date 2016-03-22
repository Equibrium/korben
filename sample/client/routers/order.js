SampleRoutes.route('/order/:customerId', {
    name: 'sample.order',
    title: 'Order',
    action: function (params, queryParams) {
        Layout.main('Sample_order');
    },
    breadcrumb: {
        params: ['customerId'],
        //queryParams: ['show', 'color'],
        title: 'Order',
        icon: 'shopping-cart',
        parent: 'sample.customer'
    }
});
