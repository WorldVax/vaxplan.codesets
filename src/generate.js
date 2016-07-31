// Transform the xml files to json.
var fs = require('fs'),
    xml = require('xml2js'),
    path = require('path'),
    glob = require('glob');

glob(__dirname + '\\data\\xml\\*.xml', function (err, files) {
    files.forEach(function (file) {
        var basename = path.basename(file, '.xml');
        console.log(basename);
        fs.readFile(file, 'utf8', function (err, data) {
            var parser = new xml.Parser();
            parser.parseString(data, function (err, result) {
                fs.writeFile(__dirname + '\\data\\json\\' + basename + '.json', JSON.stringify(result,'',4));
            });
        });
    });
});
