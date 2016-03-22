/**
 * Declare template
 */
var formTpl = Template.Sample_customerExcelReport;

/**
 * Form
 */
formTpl.onRendered(function () {
    var name = $('[name="date"]');
    DateTimePicker.dateRange(name);
});

/**
 * Hook
 */
AutoForm.hooks({
    Sample_customerExcelReport: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {

            console.log(insertDoc);

            Meteor.call('Sample_customerExcel', insertDoc, function (err, fileUrl) {

                console.log(fileUrl);

                var link = document.createElement("a");
                link.download = 'Customer.xlsx';
                link.href = fileUrl;
                link.click();
            });

            return false;

        }
    }
});
