SampleRoutes.route('/location', {
    name: 'sample.location',
    title: 'Location',
    action: function (params, queryParams) {
        Layout.main('Sample_location');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Location',
        icon: ' map-marker',
        parent: 'sample.home'
    }
});
