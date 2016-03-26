/**
 * Order
 */
SampleRoutes.route('/orderReport', {
    name: 'sample.orderReport',
    title: "Order Report",
    action: function (params, queryParams) {
        Layout.main('Sample_orderReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Order Report',
        parent: 'sample.home'
    }
});

SampleRoutes.route('/orderReportGen', {
    name: 'sample.orderReportGen',
    title: "Order Report",
    action: function (params, queryParams) {
        Layout.report('Sample_orderReportGen');
    }
});
