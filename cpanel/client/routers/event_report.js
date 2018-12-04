korbenRoutes.route('/eventReport', {
    name: 'korben.eventReport',
    title: 'Event Report',
    action: function (params, queryParams) {
        Layout.main('Korben_eventReport');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Event Report',
        parent: 'korben.welcome'
    }
});

korbenRoutes.route('/eventReportGen', {
    name: 'korben.eventReportGen',
    title: 'Event Report',
    action: function (params, queryParams) {
        Layout.report('Korben_eventReportGen');
    }
});
