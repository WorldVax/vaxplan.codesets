# vaxplan.refdata
The Centers for Disease Control in Atlanta, GA publish supporting data for the CDSi Logic Spec. 
This project makes that data available as an npm package. 

To use the package, install it into your project with npm.

npm install worldvax/vaxplan.refdata --save

Then, in your code, you can

var refdata = require('vaxplan.refdata');

You will have access to the following collections:

- refdata.AntigenSeriesByName
- refdata.ConflictsByCvx
- refdata.ContraindicationsByAntigen
- refdata.VaccineGroups
- refdata.AntigenSeriesByVaccineGroup
- refdata.AntigenSeriesByCvx

Each of these collections are indexed by string keys. To discover the keys to a collection, 
use the Object.keys() function:

> Object.keys(refdata)
[ 'AntigenSeriesByName',
  'ConflictsByCvx',
  'ContraindicationsByAntigen',
  'VaccineGroups',
  'AntigenSeriesByVaccineGroup',
  'AntigenSeriesByCvx' ]

You can then use Object.keys() on one of the collections:

  > Object.keys(refdata.AntigenSeriesByName)
[ 'Diphtheria', 'HepA', 'HepB', 'Hib', 'HPV', 'Influenza', 'MCV',
  'Measles', 'Mumps', 'Pertussis', 'Pneumococcal', 'Polio', 'Rotavirus',
  'Rubella', 'Tetanus', 'Varicella', 'Zoster' ]

Use the keys to index into the various collections:

> refdata.AntigenSeriesByName['Diphtheria']
{ immunity: '',
  series:
   [ { seriesName: 'Diphtheria Standard Series',
       targetDisease: 'Diphtheria',
       vaccineGroup: 'DTaP/Tdap/Td',
       selectBest: [Object],
       seriesDose: [Object] } ],
  antigen: 'Diphtheria' }

> refdata.AntigenSeriesByVaccineGroup['DTaP/Tdap/Td']
{ name: 'DTaP/Tdap/Td',
  antigen: [ 'Diphtheria', 'Tetanus', 'Pertussis' ] }

Some collections such as AntigenSeriesByName return an object while some
collections like ConflictsByCvx return lists of objects. Also, all keys are 
strings which means you need to use the CVX identifier and not simply its
numerical value.

> refdata['AntigenSeriesByCvx']['07']
{ cvx: '07',
  shortDescription: 'mumps',
  association:
   [ { antigen: 'Mumps',
       associationBeginAge: '',
       associationEndAge: '' } ] }

