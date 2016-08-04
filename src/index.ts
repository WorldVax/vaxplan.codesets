declare var require: any;

var codesets:any = require("./ScheduleSupportingData");
var antigens:any = require("./AntigenSeries");

export class LookupTable {
    private items: any[];
    private selectorCallback: (item: any) => string;
    public constructor(items: any[], selector: (key: string) => any, keys: () => string[]) {
        this.items = items;
        this.selectorCallback = selector;
        this.keysCallback = keys;
    }
    public get(key: string) {
        return this.selectorCallback.call(this.items, key);
    }
    public keys() {
        return this.keysCallback.call(this.items);
    }
}

module RefData {
    var Antigens = new LookupTable(antigens, (key: string) => this[key], () => Object.keys(this);
    var Contraindications = new LookupTable(codesets.ScheduleSupportingData.contraindications, (key: string) => item.Antigen);
    var CvxToAntigens = new LookupTable(codesets.cvxToAntigenMap, (item: any) => item.CvxCode);
    var LiveVirusConflicts = new LookupTable(codesets.liveVirusConflicts, (item: any) => item.CurrentVaccineType.Name);
    var VaccineGroup = new LookupTable(codesets.vaccineGroup, (item: any) => item.Name);
    var VaccineGroupToAntigens = new LookupTable(codesets.vaccineGroupToAntigenMap, (item: any) => item.VaccineGroup);
}

