"use strict";
var codesets = require("./ScheduleSupportingData");
var antigens = require("./AntigenSeries");
function make(data, getName) {
    var lut = Object.create(data);
    if (data instanceof Array) {
        data.forEach(function (item) {
            var name = getName(item);
            Object.defineProperty(lut, name, { "value": item, "enumerable": true });
        });
    }
    return lut;
}
function makelists(data, name) {
    var lut = Object.create(data);
    var keys = data.map(function (item) { return item[name]; });
    keys = keys.filter(function (val, i, arr) { return (i <= arr.indexOf(val)); });
    keys.forEach(function (key) {
        var items = data.filter(function (item) { return item[name] == key; });
        Object.defineProperty(lut, key, { "value": items, "enumerable": true });
    });
    return lut;
}
exports.Antigens = make(antigens, null);
//export let LiveVirusConflicts = makelists(codesets.scheduleSupportingData.liveVirusConflicts[0].liveVirusConflict, (item) => {return item["current"][0]["vaccineType"];});
exports.Contraindications = makelists(codesets.scheduleSupportingData.contraindications[0].contraindication, "antigen");
exports.VaccineGroups = make(codesets.scheduleSupportingData.vaccineGroups[0].vaccineGroup, function (item) { return item["name"]; });
exports.VaccineGroupToAntigenMap = make(codesets.scheduleSupportingData.vaccineGroupToAntigenMap[0].vaccineGroupMap, function (item) { return item["name"]; });
exports.CvxToAntigenMap = make(codesets.scheduleSupportingData.cvxToAntigenMap[0].cvxMap, function (item) { return "_" + item["cvx"]; });
