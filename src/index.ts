declare var require: any;

var codesets:any = require("./ScheduleSupportingData");
var antigens:any = require("./AntigenSeries");

export class LookupTable {
    private items: any[];
    private selectorCallback: (table: any, key: string) => any;
    private keysCallback: (table: any) => string[];
    public constructor(items: any[], selector: (table: any, key: string) => any, keys: (table: any) => string[]) {
        this.items = items;
        this.selectorCallback = selector;
        this.keysCallback = keys;
    }
    public get(key: string) {
        return this.selectorCallback(this.items, key);
    }
    public keys() {
        return this.keysCallback(this.items);
    }
}

module RefData {
    var Antigens = new LookupTable(antigens, (table: any, key: string) => table[key], (table) => Object.keys(table));
}

