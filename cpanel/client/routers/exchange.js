cpanelRoutes.route('/exchange', {
    name: 'cpanel.exchange',
    title: 'Exchange',
    action: function (params, queryParams) {
        Layout.main('Cpanel_exchange');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Exchange',
        icon: 'exchange',
        parent: 'cpanel.welcome'
    }
});
