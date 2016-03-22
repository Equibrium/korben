Template.Cpanel_sidebarMenuTool.helpers({
    restore () {
        let currentModule = Session.get('currentModule');
        if (currentModule == 'Cpanel') {
            return true
        }
        
        return false;
    }
});
