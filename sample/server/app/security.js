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
Security.defineMethod("Sample_ifDataInsert", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['data-insert'], 'Sample');
    }
});

Security.defineMethod("Sample_ifDataUpdate", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['data-update'], 'Sample');
    }
});

Security.defineMethod("Sample_ifDataRemove", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['data-remove'], 'Sample');
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
