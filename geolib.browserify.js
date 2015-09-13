if(Meteor.isClient)
  geolib = require('geolib');

if(Meteor.isServer)
  geolib = Npm.require('geolib');
