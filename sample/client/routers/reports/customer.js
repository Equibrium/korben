/**
 * Browser view
 */
SampleRoutes.route('/customerReport', {
    name: 'sample.customerReport',
    title: "Customer Report",
    action: function (params, queryParams) {
        Layout.main('Sample_customerReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Customer Report',
        parent: 'sample.home'
    }
});

SampleRoutes.route('/customerReportGen', {
    name: 'sample.customerReportGen',
    title: "Customer Report",
    action: function (params, queryParams) {
        Layout.report('Sample_customerReportGen');
    }
});

/**
 * Excel
 */
SampleRoutes.route('/customerExcelReport', {
    name: 'sample.customerExcelReport',
    action: function (params, queryParams) {
        Layout.main('Sample_customerExcelReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Customer Excel Report',
        parent: 'sample.home'
    }
});
