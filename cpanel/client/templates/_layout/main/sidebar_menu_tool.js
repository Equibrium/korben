Template.Korben_sidebarMenuTool.helpers({
    restore () {
        let currentModule = Session.get('currentModule');
        if (currentModule == 'Korben') {
            return true
        }
        
        return false;
    }
});
