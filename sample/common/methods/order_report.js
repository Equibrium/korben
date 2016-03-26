Sample.Method.orderReport = new ValidatedMethod({
    name: 'Sample.orderReport',
    mixins: [LoggedInMixin, CallPromiseMixin],
    // checkRoles: {
    //     roles: ['admin'],
    //     group: 'group1', // Optional
    //     rolesError: {
    //         error: 'not-allowed',
    //         message: 'You are not allowed to call this method',//Optional
    //         reason: 'You are not allowed to call this method' //Optional
    //     }
    // },
    checkLoggedInError: {
        error: 'notLogged',
        message: 'You need to be logged in to call this method',//Optional
        reason: 'You need to login' //Optional
    },
    validate: new SimpleSchema({
        branch: {type: [String]},
        date: {type: [String]}
    }).validator(),
    run({branch, date}) {
        if (!this.isSimulation) {
            console.log('server run');

            const selector = {
                branchId: {$in: branch},
                // orderDate: {$gte: moment(date[0]).toDate(), $lte: moment(data[1]).toDate()}
            };
            let data = [{_id: 'No'}];
            let dataTmp = Sample.Collection.Order.find(selector);

            if (dataTmp && dataTmp.count() > 0) {
                data = dataTmp.fetch();
            }

            return data;
        }
    }
});