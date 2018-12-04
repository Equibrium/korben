if (Meteor.isClient) {
    korbenRoutes.route('/generator', {
        name: 'korben.generator',
        action: function (params, queryParams) {
            Layout.generator('korben_generator');
        }
    });
}
