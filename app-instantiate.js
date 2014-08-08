System.register(["amd_module"], function($__export) {
  "use strict";
  var amd_module;
  return {
    setters: [function(m) {
      amd_module = m.default;
    }],
    execute: function() {
      console.log(amd_module.message);
    }
  };
});
