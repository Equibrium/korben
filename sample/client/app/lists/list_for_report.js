// List for report
Sample.ListForReport = {
    branch: function () {
        let list = [];
        // list.push({label: "(Select All)", value: ""});

        // let currentUser = Meteor.user();
        // if (currentUser && currentUser.rolesBranch) {
            Cpanel.Collection.Branch.find()
                .forEach(function (obj) {
                    list.push({label: obj.enName, value: obj._id});
                });
        // }
        
        return list;
    }
};
