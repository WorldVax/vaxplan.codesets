declare var require: any;

let codesets:any = require("./ScheduleSupportingData");
let antigens:any = require("./AntigenSeries");

export interface IRefData {
    get(key:any) : any;
    keys() : any[];
}

function make(data:any, getName: (item:any) => string) : any
{
    let lut = Object.create(data);
    if(data instanceof Array){
        data.forEach((item) => {
            let name = getName(item);
            Object.defineProperty(lut, name, {"value":item, "enumerable":true});
        });
    }
    return lut;
} 

function makelists(data:any, name :string) : any
{
    let lut = Object.create(data);
    let keys = data.map((item)=>{return item[name];})
    keys = keys.filter((val, i, arr) => {return (i <= arr.indexOf(val));});
    keys.forEach((key) =>{
        let items = data.filter((item)=> {return item[name] == key;});
        Object.defineProperty(lut, key, {"value":items, "enumerable":true});
    });
    return lut;
}

export let Antigens = make(antigens, null);
//export let LiveVirusConflicts = makelists(codesets.scheduleSupportingData.liveVirusConflicts[0].liveVirusConflict, (item) => {return item["current"][0]["vaccineType"];});
export let Contraindications = makelists(codesets.scheduleSupportingData.contraindications[0].contraindication, "antigen");
export let VaccineGroups = make(codesets.scheduleSupportingData.vaccineGroups[0].vaccineGroup, (item) => {return item["name"];});
export let VaccineGroupToAntigenMap = make(codesets.scheduleSupportingData.vaccineGroupToAntigenMap[0].vaccineGroupMap, (item) => {return item["name"];});
export let CvxToAntigenMap = make(codesets.scheduleSupportingData.cvxToAntigenMap[0].cvxMap, (item) =>{ return "_" + item["cvx"];});
