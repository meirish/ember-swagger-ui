/* jshint node: true */
'use strict';

module.exports = {
  normalizeEntityName: function() {},

  beforeInstall: function(/*options*/) {
    return this.addPackageToProject('swagger-ui-dist', '^3.9.2');
  }
};
