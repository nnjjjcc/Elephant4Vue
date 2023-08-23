(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@elephant4vue/button')) :
  typeof define === 'function' && define.amd ? define(['@elephant4vue/button'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["web-see"] = factory(global.button));
})(this, (function (button) { 'use strict';

  function input() {
    button.button();
    console.log("I am input");
  }

  return input;

}));
//# sourceMappingURL=index.js.map
