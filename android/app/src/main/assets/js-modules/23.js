__d(function(t,n,r,e){"use strict";var o=n(15),i={OS:"android",get Version(){var t=o.PlatformConstants;return t&&t.Version},get isTesting(){var t=o.PlatformConstants;return t&&t.isTesting},select:function(t){return"android"in t?t.android:t.default}};r.exports=i},23);