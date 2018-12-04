korbenRoutes.route('/company', {
    name: 'korben.company',
    title: 'Company',
    action: function (params, queryParams) {
        Layout.main('Korben_company');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Company',
        icon: 'building',
        parent: 'korben.welcome'
    }
});
