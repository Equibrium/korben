SampleRoutes.route('/customer', {
    name: 'sample.customer',
    title: "Customer",
    action: function (params, queryParams) {
        Layout.main('Sample_customer');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Customer',
        icon: 'users',
        parent: 'sample.home'
    }
});
