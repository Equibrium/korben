/**
 * Branch
 */
// var module = 'Cpanel';
//
// Cpanel.Collection.Branch.after.insert(function (userId, doc) {
//     Events.trackInsert({
//         description: doc,
//         module: module
//     });
// });
//
// Cpanel.Collection.Branch.after.update(function (userId, doc, fieldNames, modifier, options) {
//     Events.trackUpdate({
//         description: modifier,
//         module: module
//     });
// });
//
// Cpanel.Collection.Branch.after.remove(function (userId, doc) {
//     Events.trackRemove({
//         description: doc,
//         module: module
//     });
// });

Cpanel.Collection.Branch.before.insert(function (userId, doc) {
    doc._id = idGenerator.gen(Cpanel.Collection.Branch, 3);
});
