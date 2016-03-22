cpanelRoutes.route('/about', {
    name: 'cpanel.about',
    title: 'About',
    action: function (params, queryParams) {
        Layout.main('Cpanel_about');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'About',
        parent: 'cpanel.welcome'
    }
});
