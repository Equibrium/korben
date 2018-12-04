korbenRoutes.route('/setting', {
    name: 'korben.setting',
    title: 'Setting',
    action: function (params, queryParams) {
        Layout.main('Korben_setting');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Setting',
        icon: 'cogs',
        parent: 'korben.welcome'
    }
});
