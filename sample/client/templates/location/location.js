/**
 * Index
 */
class Sample_location extends BlazeComponent {
    onCreated() {
        // Create new  alertify
        createNewAlertify("location");
    }

    // Helper
    tabularClass() {
        let self = this;
        let cssClass = 'table table-striped table-bordered table-condensed table-hover';
        if (self.cssClass) {
            cssClass += '-' + this.cssClass;
        }

        return cssClass;
    }

    // Event
    events() {
        return [
            {'click .js-create': this._onCreate},
            {'click .js-update': this._onUpdate},
            {'click .js-destroy': this._onDestroy},
            {'click .js-display': this._onDisplay}
        ]
    }

    _onCreate(e) {
        alertify.location(fa("plus", "Location"), renderTemplate(Sample_locationNew.renderComponent()));
    }

    _onUpdate(e) {
        let data = this.currentData();
        alertify.location(fa("pencil", "Location"), renderTemplate(Sample_locationEdit.renderComponent(), data));
    }

    _onDestroy(e) {
        let data = this.currentData();
        destroyAction(
            Sample.Collection.Location,
            {_id: data._id},
            {title: 'Location', item: data._id}
        );
    }

    _onDisplay(e) {
        let data = this.currentData();
        alertify.alert(fa("eye", "Location"), renderTemplate(Sample_locationShow.renderComponent(), data).html);
    }
}
Sample_location.register('Sample_location');

/**
 * New
 */
class Sample_locationNew extends BlazeComponent {

}
Sample_locationNew.register('Sample_locationNew');

/**
 * Edit
 */
class Sample_locationEdit extends BlazeComponent {
    // On created
    onCreated() {
        let data = this.currentData();
        this.autorun(()=> {
            this.subscribe('Sample.location', {_id: data._id});
        });
    }

    // Helper
    data() {
        let data, getLocation;
        data = this.currentData();
        getLocation = Sample.Collection.Location.findOne(data._id);

        return getLocation;
    }
}
Sample_locationEdit.register('Sample_locationEdit');

/**
 * Show
 */
class Sample_locationShow extends BlazeComponent {
    // On created
    onCreated() {
        let data = this.currentData();
        this.autorun(()=> {
            this.subscribe('Sample_location', {_id: data._id});
        });
    }

    // Helper
    data() {
        let data, getLocation;
        data = this.currentData();
        getLocation = Sample.Collection.Location.findOne(data._id);

        return getLocation;
    }
}
Sample_locationShow.register('Sample_locationShow');

/**
 * Hook
 */
let hooksObject = {
    onSuccess: function (formType, result) {
        if (formType == 'update') {
            alertify.location().close();
        }
        Bert.alert({
            message: 'Success',
            type: 'success'
        });
    },
    onError: function (formType, error) {
        Bert.alert({
            message: error.message,
            type: 'danger'
        });
    }
};

AutoForm.addHooks([
    'Sample_locationNew',
    'Sample_locationEdit'
], hooksObject);
