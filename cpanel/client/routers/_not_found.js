FlowRouter.notFound = {
    name: 'korben.notFound',
    title: '404: Page not found',
    action: function () {
        Layout.main('notFound');
    },
    breadcrumb: {
        //params: ['id'],
        //queryParams: ['show', 'color'],
        title: 'Not Found',
        parent: 'korben.welcome'
    }
};
