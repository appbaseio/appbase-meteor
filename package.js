Package.describe({
  name: 'appbaseio:appbase-js',
  version: '0.10.4',
  // Brief, one-line summary of the package.
  summary: 'A hosted data streams library for meteor',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'appbase-js':'0.10.4'
});

Package.onUse(function(api) {
 api.versionsFrom('1.2.1');
 api.use('ecmascript');
 api.addFiles([
   '.npm/package/node_modules/appbase-js/browser/appbase.min.js'
 ], 'client');
 api.export("appbase", "client");
 api.addFiles([
   '.npm/package/node_modules/appbase-js/dist/appbase.js'
 ], 'server');
 api.export("appbase", "server");
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('appbaseio:appbase-js');
  api.addFiles('appbase-js-tests.js');
});
