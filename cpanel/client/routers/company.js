cpanelRoutes.route('/company', {
    name: 'cpanel.company',
    title: 'Company',
    action: function (params, queryParams) {
        Layout.main('Cpanel_company');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Company',
        icon: 'building',
        parent: 'cpanel.welcome'
    }
});
