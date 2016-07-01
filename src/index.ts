import * as codesets from "./codesets"

export class LookupTable {
    private items: any[];
    private callback: (item: any) => string;
    public constructor(items: any[], getKeyValue: (item: any) => string) {
        this.items = items;
        this.callback = getKeyValue;
    }
    public get(key: string) {
        return this.items.filter((item: any) => {
            return this.callback(item) === key;
        })
    }
}

module RefData {
    var Antigens = new LookupTable(codesets.antigenSeries, (item: any) => item.Name);
    var Contraindications = new LookupTable(codesets.contraindications, (item: any) => item.Antigen);
    var CvxToAntigens = new LookupTable(codesets.cvxToAntigenMap, (item: any) => item.CvxCode);
    var LiveVirusConflicts = new LookupTable(codesets.liveVirusConflicts, (item: any) => item.CurrentVaccineType.Name);
    var VaccineGroup = new LookupTable(codesets.vaccineGroup, (item: any) => item.Name);
    var VaccineGroupToAntigens = new LookupTable(codesets.vaccineGroupToAntigenMap, (item: any) => item.VaccineGroup);
}

