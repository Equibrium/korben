korbenRoutes.route('/backup', {
    name: 'korben.backup',
    title: 'Backup',
    action: function (params, queryParams) {
        Layout.main('Korben_backup');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Backup',
        parent: 'korben.welcome'
    }
});

korbenRoutes.route('/restore', {
    name: 'korben.restore',
    title: 'Restore',
    action: function (params, queryParams) {
        Layout.main('Korben_restore');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Restore',
        parent: 'korben.welcome'
    }
});
