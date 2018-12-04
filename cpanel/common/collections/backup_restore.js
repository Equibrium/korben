/**
 * Schema
 */
Korben.Schema.Backup = new SimpleSchema({
    token: {
        type: String,
        optional: true,
        defaultValue: function () {
            return userToken();
        }
    },
    module: {
        type: String,
        label: 'Module',
        autoform: {
            type: 'select2',
            options: function () {
                return Korben.List.moduleForBackupRestore();
            }
        }
    },
    type: {
        type: String,
        label: 'Type',
        autoform: {
            type: 'select2'
        }
    },
    branch: {
        type: String,
        label: 'Branch',
        autoform: {
            type: 'select2'
        }
    }
});

Korben.Schema.Restore = new SimpleSchema({
    token: {
        type: String,
        optional: true,
        defaultValue: function () {
            return userToken();
        }
    },
    module: {
        type: String,
        label: 'Module',
        autoform: {
            type: 'select2',
            options: function () {
                return Korben.List.moduleForBackupRestore();
            }
        }
    },
    type: {
        type: String,
        label: 'Type',
        autoform: {
            type: 'select2'
        }
    },
    branch: {
        type: String,
        label: 'Branch',
        autoform: {
            type: 'select2'
        }
    },
    restoreFile: {
        type: String,
        label: 'Restore file',
        autoform: {
            type: 'file'
        }
    },
    dropCollections: {
        type: String,
        optional: true
    },
    dropQuery: {
        type: String,
        optional: true
    }
});
