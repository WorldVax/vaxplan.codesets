
declare var require: any;

import * as lutFactory from './LookupTableFactory';
let codesets: any = require('./ScheduleSupportingData');
let antigens: any = require('./AntigenSeries');

function collapseLv(data: any[]) {
    var items = data.map((item) => {
        return {
            'previous': item['previous'][0],
            'current': item['current'][0],
            'conflictBeginInterval': item['conflictBeginInterval'],
            'minConflictEndInterval': item['minConflictEndInterval'],
            'conflictEndInterval': item['conflictEndInterval']
        };
    });
    items.forEach((item) => {
        item['cvx'] = '_' + item.current.cvx;
        item.previous.cvx = '_' + item.previous.cvx;
        item.current.cvx = '_' + item.current.cvx;
    });
    return items;
}

function groupLiveVirus(data: any[]) {
    let grouped = {};
    let keys = data.map((item) => { return item.cvx; })
    keys = keys.filter((val, i, arr) => { return (i <= arr.indexOf(val)); });
    keys.forEach((key) => {
        let items = data.filter((item) => { return item.previous.cvx == key; });
        grouped[key] = items;
        items['cvx'] = key;
    });
    return grouped;
}

function nameAntigens(data: any) {
    for (var prop in data) {
        data[prop]['antigen'] = prop;
    }
    return data;
}

let antigenList: any = nameAntigens(antigens);
antigenList = lutFactory.ToList(antigenList);
export let AntigenSeriesByAntigen = lutFactory.New(antigenList, 'antigen');

let lvc: any = collapseLv(codesets.scheduleSupportingData.liveVirusConflicts[0].liveVirusConflict);
lvc = groupLiveVirus(lvc);
lvc = lutFactory.ToList(lvc);
export let ConflictsByCvx = lutFactory.New(lvc, 'cvx');

let ci: any = lutFactory.GroupBy(codesets.scheduleSupportingData.contraindications[0].contraindication, 'antigen');
ci = lutFactory.ToList(ci);
export let ContraindicationsByAntigen = lutFactory.New(ci, 'antigen');

export let VaccineGroups = lutFactory.New(codesets.scheduleSupportingData.vaccineGroups[0].vaccineGroup, 'name');
export let AntigenSeriesByVaccineGroup = lutFactory.New(codesets.scheduleSupportingData.vaccineGroupToAntigenMap[0].vaccineGroupMap, 'name');
export let AntigenSeriesByCvx = lutFactory.New(codesets.scheduleSupportingData.cvxToAntigenMap[0].cvxMap, 'cvx');
