/**
 * Transform the xml files to json.
 */

var cruft = 'AntigenSupportingData- ';

var fs = require('fs'),
    xml = require('xml2js'),
    path = require('path'),
    glob = require('glob');


function main() {
    glob(__dirname + '\\data\\xml\\*.xml', function (err, files) {
        files.forEach(function (file) {
            convert(file);
        });

        glob(__dirname + '\\data\\json\\' + cruft + '*.json', function (err, files) {
            files.forEach(function (file) {
                var obj = require(file);
                var adjusted = adjust(obj);
                fs.writeFileSync(file.replace(cruft, ''), JSON.stringify(adjusted, '', 4));
                fs.unlinkSync(file);
            });
        });
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
        fs.writeFileSync(__dirname + '\\data\\json\\' + basename + '.json', JSON.stringify(result, '', 4));
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
