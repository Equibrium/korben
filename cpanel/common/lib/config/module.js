/**
 * Module
 */
Module = typeof Module === 'undefined' ? {} : Module;
Meteor.isClient && Template.registerHelper('Module', Module);

Module.Korben = {
    name: 'Korben System',
    version: '2.0.0',
    summary: 'Korben Management System is ...',
    roles: [
        'super',
        'admin'
    ],
    dump: {
        data: [
            'roles',
            'users',
            'korben_setting',
            'korben_currency',
            'korben_company',
            'korben_branch',
            'korben_exchange'
        ]
    }
};

