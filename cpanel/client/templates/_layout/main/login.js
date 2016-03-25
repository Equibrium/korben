/**
 * Login Layout
 */
Template.LoginLayout.onCreated(function () {
    // Get current date time from server
    this.state = new ReactiveDict();
    this.state.setDefault({
        cssColor: 'blue',
        value: ''
    });

    Meteor.setInterval(()=> {
        Meteor.call('currentDate', (error, result)=> {
            let dateTime = moment(result, 'YYYY-MM-DD H:mm:ss');
            if (dateTime.day() == 0 || dateTime.day() == 6) {
                this.state.set('cssColor', 'red');
            }
            this.state.set('value', dateTime.format('dddd D, MMMM YYYY H:mm:ss'));
        });
    }, 1000);
});

Template.LoginLayout.onRendered(function () {
    /* ---- particles.js config ---- */
    particlesJS('particles-js', pJSConfig);
});

Template.LoginLayout.helpers({
    currentDate(){
        let instance = Template.instance();
        return {
            cssColor: instance.state.get('cssColor'),
            value: instance.state.get('value')
        }
    },
    headerInfo(){
        // Check use login
        if (Meteor.user()) {
            return Spacebars.SafeString(`Hi, <b>${Meteor.user().profile.name} !</b>`);
        }
        return 'Please sign in to start . . .';
    }
});
