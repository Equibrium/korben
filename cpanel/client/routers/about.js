korbenRoutes.route('/about', {
    name: 'korben.about',
    title: 'About',
    action: function (params, queryParams) {
        Layout.main('Korben_about');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'About',
        parent: 'korben.welcome'
    }
});
