/**
 * Setting
 */
Security.defineMethod("Sample_ifSetting", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['setting'], 'Sample');
    }
});

/**
 * Data Entry
 */
Security.defineMethod("Sample_ifDataNew", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['data-new'], 'Sample');
    }
});

Security.defineMethod("Sample_ifDataEdit", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['data-edit'], 'Sample');
    }
});

Security.defineMethod("Sample_ifDataDelete", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['data-delete'], 'Sample');
    }
});

/**
 * Report
 */
Security.defineMethod("Sample_ifReport", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['report'], 'Sample');
    }
});
