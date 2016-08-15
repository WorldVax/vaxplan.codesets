declare var require: any;

let codesets:any = require("./ScheduleSupportingData");
let antigens:any = require("./AntigenSeries");
 
 export interface IRefData {
     get(key:any) : any;
     keys() : any[];
 }

export class ObjectLookupTable implements IRefData {
    private items: any[];
    public get(key : any) { return this.items[key]; }
    public keys() { return Object.keys(this); }
    public constructor(items: any[]) {
        this.items = items;
    }
}

export class ArrayLookupTable implements IRefData {
    private key: string;
    private items: any[];
    public get(key : any) { return this.items.filter(function(x) {return x[this.key] == key;}) }
    public keys() {return this.items.map(function(x) {return x[this.key];}) }
    public constructor(items: any[], key: string) {
        this.items = items;
        this.key = key;
    }
}

export let Antigens = new ObjectLookupTable(antigens);
export let LiveVirusConflicts = new ArrayLookupTable(codesets.scheduleSupportingData.liveVirusConflicts[0].liveVirusConflict, "name");
export let Contraindications = new ArrayLookupTable(codesets.scheduleSupportingData.contraindications[0].contraindication, "antigen");
export let VaccineGroups = new ArrayLookupTable(codesets.scheduleSupportingData.vaccineGroups[0].vaccineGroup, "name");
export let VaccineGroupToAntigenMap = new ArrayLookupTable(codesets.scheduleSupportingData.vaccineGroupToAntigenMap[0].vaccineGroupMap, "name");
export let CvxToAntigenMap = new ArrayLookupTable(codesets.scheduleSupportingData.cvxToAntigenMap[0].cvxMap, "cvx");
