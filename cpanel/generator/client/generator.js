var loadingWaiting = new ReactiveVar(false);

Template.korben_generatorModule.helpers({
    loadingWaiting: function () {
        return loadingWaiting.get();
    }
});

/**
 * Hook
 */
AutoForm.hooks({
    // Customer
    korben_generatorModule: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {
            this.event.preventDefault();

            loadingWaiting.set(true);
            Meteor.call('korben_generatorModule', insertDoc.moduleName, function (error, result) {
                if (result == 'success') {
                    loadingWaiting.set(false);
                    alertify.success('Success');
                }
            });

            this.done();
        }
    }
});
