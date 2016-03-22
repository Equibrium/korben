cpanelRoutes.route('/setting', {
    name: 'cpanel.setting',
    title: 'Setting',
    action: function (params, queryParams) {
        Layout.main('Cpanel_setting');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Setting',
        icon: 'cogs',
        parent: 'cpanel.welcome'
    }
});
