korbenRoutes.route('/exchange', {
    name: 'korben.exchange',
    title: 'Exchange',
    action: function (params, queryParams) {
        Layout.main('Korben_exchange');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Exchange',
        icon: 'exchange',
        parent: 'korben.welcome'
    }
});
