/**
 * Branch
 */
// var module = 'Korben';
//
// Korben.Collection.Branch.after.insert(function (userId, doc) {
//     Events.trackInsert({
//         description: doc,
//         module: module
//     });
// });
//
// Korben.Collection.Branch.after.update(function (userId, doc, fieldNames, modifier, options) {
//     Events.trackUpdate({
//         description: modifier,
//         module: module
//     });
// });
//
// Korben.Collection.Branch.after.remove(function (userId, doc) {
//     Events.trackRemove({
//         description: doc,
//         module: module
//     });
// });

Korben.Collection.Branch.before.insert(function (userId, doc) {
    doc._id = idGenerator.gen(Korben.Collection.Branch, 3);
});
