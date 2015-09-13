Package.describe({
  name: 'fermuch:geolib',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Growing library to provide some basic geo functions',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/fermuch/meteor-geolib.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'geolib': "2.0.18"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use(['cosmos:browserify@0.2.0'], 'client');


  api.addFiles('geolib.browserify.js');
  api.export('geolib', ['client', 'server']);
});



Package.onTest(function(api) {
  api.use('tinytest');
  api.use('fermuch:geolib');
  api.addFiles('geolib-tests.js');
});