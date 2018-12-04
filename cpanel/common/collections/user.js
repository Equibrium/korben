/**
 * Schema
 */
Korben.Schema.User = new SimpleSchema({
    username: {
        type: String,
        label: 'Username',
        unique: true,
        min: 3
    },
    email: {
        type: String,
        label: 'Email',
        unique: true,
        regEx: SimpleSchema.RegEx.Email,
        optional: true
    },
    password: {
        type: String,
        label: "Password",
        min: 6
    },
    confirmPassword: {
        type: String,
        label: "Confirm Password",
        min: 6,
        custom: function () {
            if (this.value !== this.field('password').value) {
                return "passwordMismatch";
            }
        }
    },
    profile: {
        type: Object
    },
    'profile.name': {
        type: String
    },
    roles: {
        type: [String],
        autoform: {
            type: "select-multiple",
            //multiple: true,
            options: function () {
                return Korben.List.role();
            }
        }
    },
    rolesBranch: {
        type: [String],
        autoform: {
            type: "select-multiple",
            //multiple: true,
            options: function () {
                return Korben.List.branch(false);
            }
        }
    }
});

Korben.Schema.UserProfile = new SimpleSchema({
    username: {
        type: String,
        label: 'Username',
        unique: true,
        min: 3
    },
    email: {
        type: String,
        label: 'Email',
        unique: true,
        regEx: SimpleSchema.RegEx.Email,
        optional: true
    },
    profile: {
        type: Object
    },
    'profile.name': {
        type: String
    }
});

Korben.Schema.UserPassword = new SimpleSchema({
    oldPassword: {
        type: String,
        label: "Old password",
        min: 6
    },
    newPassword: {
        type: String,
        label: "New password",
        min: 6
    },
    newConfirmPassword: {
        type: String,
        label: "New confirm password",
        min: 6,
        custom: function () {
            if (this.value !== this.field('newPassword').value) {
                return "passwordMismatch";
            }
        }
    }
});

/**
 * Errors message
 */
SimpleSchema.messages({
    "passwordMismatch": "[label] don't match."
});
