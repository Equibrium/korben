SampleRoutes.route('/home', {
    name: 'sample.home',
    title: 'Home',
    action: function (params, queryParams) {
        Layout.main('Sample_home');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Home',
        icon: 'home',
        parent: 'cpanel.welcome'
    }
});
