'use strict';

var loadScript = require('@adobe/reactor-load-script');

module.exports = function(settings) {
  var extensionSettings = turbine.getExtensionSettings();
  loadScript('https://cdn.lr-ingest.io/LogRocket.min.js').then(function() {
    window.LogRocket && window.LogRocket.init(extensionSettings.appID);
  });
};
