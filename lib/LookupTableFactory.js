/**
 * Given an array of objects and a property name, return an object
 * with properties for each of the items where the property name is the
 * value of the item.name property and the value is the item.
 *
 * Huh?
 */
"use strict";
function New(data, name) {
    var lut = Object.create(data);
    data.forEach(function (item) {
        var key = item[name];
        Object.defineProperty(lut, key, { "value": item, "enumerable": true });
    });
    return lut;
}
exports.New = New;
/**
 * Return a a list made up of the properties of the item.
 */
function ToList(item) {
    var list = new Array();
    for (var prop in item) {
        list.push(item[prop]);
    }
    return list;
}
exports.ToList = ToList;
/**
 * Group a list of items by the property name.
 */
function GroupBy(data, name) {
    var grouped = {};
    var keys = data.map(function (item) { return item[name]; });
    keys = keys.filter(function (val, i, arr) { return (i <= arr.indexOf(val)); });
    keys.forEach(function (key) {
        var items = data.filter(function (item) { return item[name] == key; });
        grouped[key] = items;
        items[name] = key;
    });
    return grouped;
}
exports.GroupBy = GroupBy;
