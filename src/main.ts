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

export class RefData {
    static Antigens = new LookupTable(codesets.antigenSeries, (item: any) => item.Name);
    static Contraindications = new LookupTable(codesets.contraindications, (item: any) => item.Antigen);
    static CvxToAntigens = new LookupTable(codesets.cvxToAntigenMap, (item: any) => item.CvxCode);
    static LiveVirusConflicts = new LookupTable(codesets.liveVirusConflicts, (item: any) => item.CurrentVaccineType.Name);
    static VaccineGroup = new LookupTable(codesets.vaccineGroup, (item: any) => item.Name);
    static VaccineGroupToAntigens = new LookupTable(codesets.vaccineGroupToAntigenMap, (item: any) => item.VaccineGroup);
}

