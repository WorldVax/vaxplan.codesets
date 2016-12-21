var lutFactory = require('./LookupTableFactory');
var codesets = require('./ScheduleSupportingData');
var antigens = require('./AntigenSeries');
function collapseLv(data) {
    var items = data.map(function (item) {
        return {
            'previous': item['previous'][0],
            'current': item['current'][0],
            'conflictBeginInterval': item['conflictBeginInterval'],
            'minConflictEndInterval': item['minConflictEndInterval'],
            'conflictEndInterval': item['conflictEndInterval']
        };
    });
    items.forEach(function (item) {
        item['cvx'] = item.current.cvx;
        item.previous.cvx = item.previous.cvx;
        item.current.cvx = item.current.cvx;
    });
    return items;
}
function groupLiveVirus(data) {
    var grouped = {};
    var keys = data.map(function (item) { return item.cvx; });
    keys = keys.filter(function (val, i, arr) { return (i <= arr.indexOf(val)); });
    keys.forEach(function (key) {
        var items = data.filter(function (item) { return item.previous.cvx == key; });
        grouped[key] = items;
        items['cvx'] = key;
    });
    return grouped;
}
function nameAntigens(data) {
    for (var prop in data) {
        data[prop]['antigen'] = prop;
    }
    return data;
}
var antigenList = nameAntigens(antigens);
antigenList = lutFactory.ToList(antigenList);
exports.AntigenSeriesByName = lutFactory.New(antigenList, 'antigen');
var lvc = collapseLv(codesets.scheduleSupportingData.liveVirusConflicts[0].liveVirusConflict);
lvc = groupLiveVirus(lvc);
lvc = lutFactory.ToList(lvc);
exports.ConflictsByCvx = lutFactory.New(lvc, 'cvx');
var ci = lutFactory.GroupBy(codesets.scheduleSupportingData.contraindications[0].contraindication, 'antigen');
ci = lutFactory.ToList(ci);
exports.ContraindicationsByAntigen = lutFactory.New(ci, 'antigen');
exports.VaccineGroups = lutFactory.New(codesets.scheduleSupportingData.vaccineGroups[0].vaccineGroup, 'name');
exports.AntigenSeriesByVaccineGroup = lutFactory.New(codesets.scheduleSupportingData.vaccineGroupToAntigenMap[0].vaccineGroupMap, 'name');
exports.AntigenSeriesByCvx = lutFactory.New(codesets.scheduleSupportingData.cvxToAntigenMap[0].cvxMap, 'cvx');
