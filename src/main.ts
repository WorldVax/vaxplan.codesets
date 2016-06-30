import items from "./data/antigen-series";


/**
 * A table consists of an array of data and functions to access that data.
 * The keyFunc selects the data out of an item that is used to identify that
 * item, it's signature is f(item). findfunc is a function used to select
 * an item from the array and it's signature is f(item, key), the item
 * is selected if f() == true
*/
// function table(data, keyFunc, findFunc) {
//     return {   
//         "keys" : function(){
//             var items = data.map(keyFunc); 
//             return items.filter(function(val, i, arr){
//                 return (i <= arr.indexOf(val));
//             });
//         },
//         "find" : function(key){
//             if(key == undefined) {
//                 return data;
//             }
//             else {
//                 var predicate = function(i){ // currying!
//                     return findFunc(i, key);
//                 };
//                 var items = data.filter(predicate);
//                 if (items.length==0)
//                     return undefined;
//                 else if(items.length==1)
//                     return items[0];
//                 else
//                     return items;
//             }
//         }
//     };
// };

// module.exports = {
//     'AntigenSeries': new table(require('./data/antigen-series'), function(i) {return i.Name;}, function(i,k){return i.Name == k}),
//     'Contraindications': new table(require('./data/contraindications'),function(i) {return i.Antigen;}, function(i,k){return i.Antigen == k}),
//     'Cvx2Antigen': new table(require('./data/cvx-to-antigen-map'),function(i) {return i.CvxCode;}, function(i,k){return i.CvxCode == k}),
//     'LiveVirusConflicts': new table(require('./data/live-virus-conflicts'),function(i){return i.PreviousVaccineType.Name;}, function(i,k){return i.PreviousVaccineType.Name == k}),
//     'Testcases': new table(require('./data/test-cases'),function(i){return i.CdcTestId;}, function(i,k){return i.CdcTestId == k}),
//     'VaccineGroup2Antigen': new table(require('./data/vaccine-group-to-antigen-map'), function(i) {return i.VaccineGroup;}, function(i,k){return i.VaccineGroup == k}),
//     'VaccineGroups': new table(require('./data/vaccine-group'), function(i) {return i.Name;}, function(i,k){return i.Name == k})
// };