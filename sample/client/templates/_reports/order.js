/**
 * Declare template
 */
let formTpl = Template.Sample_orderReport,
    genTpl = Template.Sample_orderReportGen;

/**
 * Form
 */
formTpl.onCreated(function () {
    this.autorun(()=> {
        // let currentUser = Meteor.user();
        // if (currentUser && currentUser.rolesBranch) {
        this.subscribe('Sample.branch', {});
        // }
    });
});

AutoForm.hooks({
    Sample_orderReport: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            this.event.preventDefault();

            // You must call this.done()!
            //this.done(); // submitted successfully, call onSuccess
            //this.done(new Error('foo')); // failed to submit, call onError with the provided error
            this.done(null, insertDoc); // submitted successfully, call onSuccess with `result` arg set to "foo"
            //return false;
        },
        onSuccess: function (formType, result) {
            let params = {};
            let queryParams = result;
            let path = FlowRouter.path("sample.orderReportGen", params, queryParams);

            window.open(path, '_blank');
        },
        onError: function (formType, error) {
            Bert.alert({
                message: error.message,
                type: 'danger'
            });
        }
    }
});


/**
 * Generate
 */
genTpl.onCreated(function () {
    this.reportCollection = new Mongo.Collection(null);
});

genTpl.helpers({
    data(){
        const instance = Template.instance();
        let collection = instance.reportCollection;
        let q = FlowRouter.current().queryParams;

        // Call the Method
        // Sample.Method.orderReport.call({
        //     branch: q.branch,
        //     date: q.date
        // }, (err, res) => {
        //     if (err) {
        //         console.log(err)
        //     } else {
        //         // Remove before insert
        //         collection.remove({});
        //
        //         res.forEach((doc)=> {
        //             collection.insert(doc);
        //         });
        //     }
        // });
        Sample.Method.orderReport.callPromise({
            branch: q.branch,
            date: q.date
        }).then(function (result) {
            collection.remove({});

            // Remove before insert
            result.forEach((doc)=> {
                collection.insert(doc);
            });

        }).catch(function (err) {
            console.log(err);
        });
        let getData = collection.find();

        console.log('run...');

        return getData;
    }
    // options: function () {
    //     // font size = null (default), bg
    //     // paper = a4, a5, mini
    //     // orientation = portrait, landscape
    //     return {
    //         //fontSize: 'bg',
    //         paper: 'a4',
    //         orientation: 'portrait'
    //     };
    // },
    // data: function () {
    //     // Get query params
    //     //FlowRouter.watchPathChange();
    //     let q = FlowRouter.current().queryParams;
    //
    //     // Use Fetcher
    //     Fetcher.setDefault("data", false);
    //     Fetcher.retrieve('data', 'Sample_orderReport', q);
    //
    //     return Fetcher.get('data');
    // }
});