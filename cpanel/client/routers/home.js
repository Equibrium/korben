cpanelRoutes.route('/home', {
    name: 'cpanel.home',
    title: 'Home',
    action: function (params, queryParams) {
        Layout.main('Cpanel_home');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Home',
        icon: 'home',
        parent: 'cpanel.welcome'
    }
});
