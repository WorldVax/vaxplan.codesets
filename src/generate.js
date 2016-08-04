/**
 * Transform the xml files to json.
 */

var fs = require('fs'),
    xml = require('xml2js'),
    path = require('path'),
    glob = require('glob');

var cruft = 'AntigenSupportingData- ';
var outdir = __dirname + "/../dist/";
var datasrc = __dirname + "/data/*.xml";

function main() {
    glob(datasrc, function (err, files) {
        files.forEach(function (file) {
            convert(file);
        });

        glob(outdir + cruft + '*.json', function (err, files) {
            var series = {};
            files.forEach(function (file) {
                var basename = path.basename(file, '.json');
                basename = basename.replace(cruft, '');
                var obj = require(file);
                var adjusted = adjust(obj);
                series[basename] = adjusted['antigenSupportingData'];
                fs.unlinkSync(file);
            });
            fs.writeFileSync(outdir + 'AntigenSeries.json', JSON.stringify(series, '', 4));
        });

        var fname = outdir + 'ScheduleSupportingData.json';
        var obj = require(fname);
        obj = adjust(obj);
        fs.writeFileSync(fname, JSON.stringify(obj, '', 4));
    });
};

/**
 * Convert the xml to json.
 */
function convert(filename) {
    var basename = path.basename(filename, '.xml');
    var data = fs.readFileSync(filename);
    var parser = new xml.Parser();
    parser.parseString(data, function (err, result) {
        fs.writeFileSync(outdir + basename + '.json', JSON.stringify(result, '', 4));
    });
};

/**
 * Take the json and adjust the properties for simplicity.
 */
function adjust(obj) {
    if (Array.isArray(obj)) {
        if (obj.length == 1 && typeof obj[0] == 'string') {
            return obj[0];
        } else {
            for (var i = 0; i < obj.length; i++) {
                obj[i] = adjust(obj[i]);
            }
        }
    } else if (typeof obj == 'object') {
        var keys = Object.keys(obj);
        keys.forEach(function (key) {
            obj[key] = adjust(obj[key]);
        });
    }
    return obj;
};

main();
