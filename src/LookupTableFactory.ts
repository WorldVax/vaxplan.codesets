
/**
 * Given an array of objects and a property name, return an object
 * with properties for each of the items where the property name is the 
 * value of the item.name property and the value is the item.
 * 
 * Huh?
 */

export function New(data: any[], name: string) {
    let lut = Object.create(data);
    data.forEach((item) => {
        let key = item[name];
        Object.defineProperty(lut, key, { "value": item, "enumerable": true });
    });
    return lut;
}

/**
 * Return a a list made up of the properties of the item.
 */
export function ToList(item: any) {
    let list = new Array();
    for (var prop in item) {
        list.push(item[prop]);
    }
    return list;
}

/**
 * Group a list of items by the property name.
 */
export function GroupBy(data: any[], name: string) {
    let grouped = {};
    let keys = data.map((item) => { return item[name]; })
    keys = keys.filter((val, i, arr) => { return (i <= arr.indexOf(val)); });
    keys.forEach((key) => {
        let items = data.filter((item) => { return item[name] == key; });
        grouped[key] = items;
        items[name] = key;
    });
    return grouped;
}
