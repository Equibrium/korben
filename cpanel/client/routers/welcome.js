FlowRouter.route('/', {
    name: 'korben.welcome',
    title: 'Welcome',
    action: function (params, queryParams) {
        Layout.login('Korben_welcome');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Welcome',
        icon: 'dashboard'
        //parent: 'korben.welcome'
    }
});
