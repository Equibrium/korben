/**
 * Super
 */
Security.defineMethod("korben_ifSuper", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['super'], 'Korben');
    }
});

/**
 * Admin
 */
Security.defineMethod("korben_ifAdmin", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['admin'], 'Korben');
    }
});

/**
 * Super or admin
 */
Security.defineMethod("korben_ifSuperOrAdmin", {
    fetch: [],
    transform: null,
    deny: function (type, arg, userId) {
        return !Roles.userIsInRole(userId, ['super', 'admin'], 'Korben');
    }
});
