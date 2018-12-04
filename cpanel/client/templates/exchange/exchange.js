// Declare template
let indexTpl = Template.Korben_exchange,
    newTpl = Template.Korben_exchangeNew,
    editTpl = Template.Korben_exchangeEdit,
    showTpl = Template.Korben_exchangeShow;

// Index
indexTpl.onCreated(function () {
    // Create new  alertify
    createNewAlertify("exchange", {size: 'lg'});
});

indexTpl.events({
    'click .js-create' (e, t) {
        alertify.exchange(fa("plus", "Exchange"), renderTemplate(newTpl));
    },
    'click .js-update' (e, t) {
        alertify.exchange(fa("pencil", "Exchange"), renderTemplate(editTpl, this));
    },
    'click .js-destroy' (e, t) {
        destroyAction(
            Korben.Collection.Exchange,
            {_id: this._id},
            {title: 'Exchange', item: moment(self.exDate).format('DD/MM/YYYY')}
        );
    },
    'click .js-display' (e, t) {
        alertify.alert(fa("eye", "Exchange"), renderTemplate(showTpl, this).html);
    }
});

// New
newTpl.helpers({
    doc () {
        let khr = 0, usd = 0, thb = 0;
        let baseCurrency = Korben.Collection.Setting.findOne().baseCurrency;

        if (baseCurrency == 'KHR') {
            khr = 1;
        } else if (baseCurrency == 'USD') {
            usd = 1;
        } else {
            thb = 1;
        }

        return {base: baseCurrency, khr: khr, usd: usd, thb: thb};
    }
});

// Edit
editTpl.onCreated(function () {
    let self = this;
    self.autorun(function () {
        self.subscribe('Korben.exchange', {_id: self.data._id});
    });
});

editTpl.helpers({
    data () {
        let data = Korben.Collection.Exchange.findOne(this._id);
        return data;
    }
});

// Show
showTpl.onCreated(function () {
    let self = this;
    self.autorun(function () {
        self.subscribe('Korben.exchange', {_id: self.data._id});
    });
});

showTpl.helpers({
    data () {
        let data = Korben.Collection.Exchange.findOne(this._id);
        data.ratesVal = JSON.stringify(data.rates);
        return data;
    }
});

// Hook
AutoForm.hooks({
    Korben_exchangeNew: {
        onSuccess: function (formType, result) {
            alertify.exchange().close();
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
    },
    Korben_exchangeEdit: {
        onSuccess: function (formType, error) {
            alertify.exchange().close();
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
    }
});
