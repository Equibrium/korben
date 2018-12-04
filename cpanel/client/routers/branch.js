korbenRoutes.route('/branch', {
    name: 'korben.branch',
    title: 'Branch',
    action: function (params, queryParams) {
        Layout.main('Korben_branch');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Branch',
        icon: 'sitemap',
        parent: 'korben.welcome'
    }
});
