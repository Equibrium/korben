FlowRouter.route('/', {
    name: 'cpanel.welcome',
    title: 'Welcome',
    action: function (params, queryParams) {
        Layout.login('CpanelWelcome');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Welcome',
        icon: 'dashboard'
        //parent: 'cpanel.welcome'
    }
});
