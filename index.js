'use strict';

module.exports = {
  name: 'ember-cli-facebook-conversion-tracker',

  contentFor: function(type, config) {
    var fbScript;

    if (type === 'head') {
      fbScript = [
        "<script>",
        "  var _fbq = window._fbq || (window._fbq = []);",
        "  if (!_fbq.loaded) {",
        "    var fbds = document.createElement('script');",
        "    fbds.async = true;",
        "    fbds.src = '//connect.facebook.net/en_US/fbds.js';",
        "    var s = document.getElementsByTagName('script')[0];",
        "    s.parentNode.insertBefore(fbds, s);",
        "    _fbq.loaded = true;",
        "  }",
        "  window._fbq = window._fbq || [];",
        "</script>"
      ];

      return fbScript.join("\n");
    }
  }
};
