/**
 * Declare template
 */
var itemsTpl = Template.Sample_orderItems;

/**
 * Items
 */
itemsTpl.onCreated(function () {
    this.itemsCollection = new Mongo.Collection(null);

    this.state = new ReactiveDict();
    this.state.setDefault({
        qty: 0,
        price: 0,
        total: 0
    });
    this.autorun(()=> {
        let tmpAmount = math.round(this.state.get('qty') * this.state.get('price'), 2);
        this.state.set('tmpAmount', tmpAmount);
    });

    // Check exist doc for update
    let data = Template.currentData();
    if (data && data.items) {
        data.items.forEach((obj)=> {
            this.itemsCollection.insert(obj);
        });
    }
});

itemsTpl.onRendered(function () {
    itemsInputmask();
});

itemsTpl.helpers({
    tmpAmount: function () {
        const instance = Template.instance();
        return instance.state.get('tmpAmount');
    },
    disabledAddItemBtn: function () {
        const instance = Template.instance();
        let tmpAmount = instance.state.get('tmpAmount');
        if (tmpAmount <= 0) {
            return {disabled: true};
        }

        return '';
    },
    itemsList: function () {
        const instance = Template.instance();
        let getItems = instance.itemsCollection.find();
        
        return getItems;
    },
    total: function () {
        const instance = Template.instance();
        let getItems = instance.itemsCollection.find();
        let total = 0;
        getItems.forEach((obj)=> {
            total += obj.amount;
        });
        instance.state.set('total', total);

        return total;
    },
    keyArgs(index, name){
        return `items.${index}.${name}`;
    }
});

itemsTpl.events({
    'keyup [name="tmpQty"]': function (e, t) {
        var qty = t.$('[name="tmpQty"]').val();
        qty = _.isEmpty(qty) ? 0 : parseInt(qty);

        t.state.set('qty', qty);
    },
    'keyup [name="tmpPrice"]': function (e, t) {
        var price = t.$('[name="tmpPrice"]').val();
        price = _.isEmpty(price) ? 0 : parseFloat(price);

        t.state.set('price', price);
    },
    'click .js-add-item': function (e, t) {
        let name = t.$('[name="tmpName"]').val();
        let qty = parseInt(t.$('[name="tmpQty"]').val());
        let price = math.round(parseFloat(t.$('[name="tmpPrice"]').val()), 2);
        let amount = math.round(qty * price, 2);

        // Check exist
        let exist = t.itemsCollection.findOne({name: name});
        if (exist) {
            qty += parseInt(exist.qty);
            amount = math.round(qty * price, 2);

            t.itemsCollection.update(
                {name: name},
                {$set: {qty: qty, price: price, amount: amount}}
            );
        } else {
            t.itemsCollection.insert({
                name: name,
                qty: qty,
                price: price,
                amount: amount
            });
        }
    },
    'click .js-remove-item': function (e, t) {
        let thisObj = $(e.currentTarget);
        let name = thisObj.parents('div.row.item').find('.js-name').val();

        t.itemsCollection.remove({name: name});
    },
    'keyup .js-qty,.js-price': function (e, t) {
        let thisObj = $(e.currentTarget);
        let name = thisObj.parents('div.row.item').find('.js-name').val();
        let qty = thisObj.parents('div.row.item').find('.js-qty').val();
        let price = thisObj.parents('div.row.item').find('.js-price').val();
        let amount = qty * price;

        t.itemsCollection.update(
            {name: name},
            {$set: {qty: qty, price: price, amount: amount}}
        );
    }
});

/**
 * Input mask
 */
var itemsInputmask = function () {
    let tmpQty = $('[name="tmpQty"]');
    let tmpPrice = $('[name="tmpPrice"]');
    let tmpAmount = $('[name="tmpAmount"]');

    Inputmask.currency([tmpPrice, tmpAmount]);
    Inputmask.integer([tmpQty]);
};
