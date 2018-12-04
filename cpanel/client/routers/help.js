korbenRoutes.route('/help', {
    name: 'korben.help',
    title: 'Help',
    action: function (params, queryParams) {
        var currentModule = Session.get('currentModule');
        var preModule = s.decapitalize(currentModule);
        var helpTemplate = preModule + '_help';

        Layout.help(helpTemplate);
    }
});
