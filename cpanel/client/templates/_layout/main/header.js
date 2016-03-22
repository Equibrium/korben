/**
 * Header
 */
Template._headerLayout.helpers({
    moduleName: function () {
        var module = Session.get('currentModule');
        var branch = Session.get('currentBranch');
        if (Meteor.userId() && !_.isUndefined(module) && !_.isUndefined(branch)) {
            var moduleWord = s.words(module, ':');
            return Module[moduleWord[0]].name;
        }

        return 'Rabbit Tech';
    },
    headerMenu: function () {
        var currentModule = Session.get('currentModule');
        // var menu = s.decapitalize(currentModule);

        return `${currentModule}_headerMenu`;
    }
});
