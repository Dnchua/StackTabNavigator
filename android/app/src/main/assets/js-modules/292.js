__d(function(e,n,t,o){"use strict";function i(e){return"none"!==e.type&&"unknown"!==e.type}var r=n(62),c=n(80),f=n(15),u=(n(23),f.NetInfo),v=new c(u),s="networkStatusDidChange",a=new r,d=void 0;d=function(e){return"NONE"!==e&&"UNKNOWN"!==e};var C=new r,g={addEventListener:function(e,n){var t=void 0;if("connectionChange"===e)t=v.addListener(s,function(e){n({type:e.connectionType,effectiveType:e.effectiveConnectionType})});else{if("change"!==e)return console.warn('Trying to subscribe to unknown event: "'+e+'"'),{remove:function(){}};console.warn('NetInfo\'s "change" event is deprecated. Listen to the "connectionChange" event instead.'),t=v.addListener(s,function(e){n(e.network_info)})}return a.set(n,t),{remove:function(){return g.removeEventListener(e,n)}}},removeEventListener:function(e,n){var t=a.get(n);t&&(t.remove(),a.delete(n))},fetch:function(){return console.warn("NetInfo.fetch() is deprecated. Use NetInfo.getConnectionInfo() instead."),u.getCurrentConnectivity().then(function(e){return e.network_info})},getConnectionInfo:function(){return u.getCurrentConnectivity().then(function(e){return{type:e.connectionType,effectiveType:e.effectiveConnectionType}})},isConnected:{addEventListener:function(e,n){var t=function(t){"change"===e?n(d(t)):"connectionChange"===e&&n(i(t))};return C.set(n,t),g.addEventListener(e,t),{remove:function(){return g.isConnected.removeEventListener(e,n)}}},removeEventListener:function(e,n){var t=C.get(n);g.removeEventListener(e,t),C.delete(n)},fetch:function(){return g.getConnectionInfo().then(i)}},isConnectionExpensive:function(){return u.isConnectionMetered()}};t.exports=g},292);