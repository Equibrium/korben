korbenRoutes.route('/user', {
    name: 'korben.user',
    title: 'User',
    action: function (params, queryParams) {
        Layout.main('Korben_user');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'User',
        icon: 'user',
        parent: 'korben.welcome'
    }
});
