korbenRoutes.route('/user-profile', {
    name: 'korben.userProfile',
    title: 'User Profile',
    action: function (params, queryParams) {
        Layout.main('Korben_userProfile');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'User Profile',
        icon: 'user',
        parent: 'korben.welcome'
    }
});
