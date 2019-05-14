__d(function(e,t,r,a){function n(e){return[p.default.SET_PARAMS,p.default.COMPLETE_TRANSITION].includes(e)}Object.defineProperty(a,"__esModule",{value:!0});var i=t(307),o=babelHelpers.interopRequireDefault(i),u=t(345),s=babelHelpers.interopRequireDefault(u),l=t(344),d=babelHelpers.interopRequireDefault(l),f=t(305),p=babelHelpers.interopRequireDefault(f),b=t(347),c=babelHelpers.interopRequireDefault(b),m=t(348),x=babelHelpers.interopRequireDefault(m);a.default=function(e){function t(e){var t=e===l?u:void 0,r=g[e];if(r){var a=p.default.init();return babelHelpers.extends({},r.getStateForAction(a),{key:e,routeName:e,params:t})}return{key:e,routeName:e,params:t}}var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,c.default)(e);var a=r.order||Object.keys(e),i=r.paths||{},u=r.initialRouteParams,l=r.initialRouteName||a[0],f=r.backBehavior||"none",b="initialRoute"===f,m=!r.hasOwnProperty("resetOnBlur")||r.resetOnBlur,v=a.indexOf(l),g={};if(a.forEach(function(t){var r=e[t];i[t]="string"==typeof r.path?r.path:t,g[t]=null;var a=(0,s.default)(e,t);a.router&&(g[t]=a.router)}),v===-1)throw new Error("Invalid initialRouteName '"+l+"'.Should be one of "+a.map(function(e){return'"'+e+'"'}).join(", "));return{getInitialState:function(){var e=a.map(t);return{routes:e,index:v,isTransitioning:!1}},getNextState:function(e,r){if(!e)return r;var a=void 0;if(e.index!==r.index&&m){var n=e.routes[e.index].routeName,i=[].concat(babelHelpers.toConsumableArray(r.routes));return i[e.index]=t(n),babelHelpers.extends({},r,{routes:i})}return a=r},getStateForAction:function(e,t){var r=t?babelHelpers.extends({},t):t,i=t||this.getInitialState(),o=i.index;if(e.type===p.default.INIT){var s=e.params;s&&(i.routes=i.routes.map(function(e){return babelHelpers.extends({},e,{params:babelHelpers.extends({},e.params,s,e.routeName===l?u:null)})}))}var d=i.routes[i.index],c=g[a[i.index]];if(c){var m=c.getStateForAction(e,d);if(!m&&t)return null;if(m&&m!==d){var x=[].concat(babelHelpers.toConsumableArray(i.routes));return x[i.index]=m,this.getNextState(r,babelHelpers.extends({},i,{routes:x}))}}if("none"!==f){var h=null==e.key||e.key===d.key;if(e.type===p.default.BACK){if(!h||!b)return i;o=v}}var A=!1;if(e.type===p.default.NAVIGATE){var H=e;if(A=!!a.find(function(e,t){return e===H.routeName&&(o=t,!0)})){var S=i.routes[o],y=void 0,N=g[e.routeName];if(e.action?y=N?N.getStateForAction(e.action,S):null:!N&&e.params&&(y=babelHelpers.extends({},S,{params:babelHelpers.extends({},S.params||{},e.params)})),y&&y!==S){var P=[].concat(babelHelpers.toConsumableArray(i.routes));return P[o]=y,this.getNextState(r,babelHelpers.extends({},i,{routes:P,index:o}))}}}if(e.type===p.default.SET_PARAMS){var F=e.key,R=i.routes.find(function(e){return e.key===F});if(R){var C=babelHelpers.extends({},R.params,e.params),O=[].concat(babelHelpers.toConsumableArray(i.routes));return O[i.routes.indexOf(R)]=babelHelpers.extends({},R,{params:C}),this.getNextState(r,babelHelpers.extends({},i,{routes:O}))}}if(o!==i.index)return this.getNextState(r,babelHelpers.extends({},i,{index:o}));if(A&&!t)return i;if(A)return null;var k=i.index,T=i.routes;return a.find(function(t,r){var a=g[t];if(r===k)return!1;var n=T[r];return a&&(n=a.getStateForAction(e,n)),n?n!==T[r]&&(T=[].concat(babelHelpers.toConsumableArray(T)),T[r]=n,k=r,!0):(k=r,!0)}),n(e.type)&&(k=i.index),k!==i.index||T!==i.routes?this.getNextState(r,babelHelpers.extends({},i,{index:k,routes:T})):i},getComponentForState:function(t){var r=t.routes[t.index].routeName;(0,o.default)(r,"There is no route defined for index "+t.index+". Check that\n        that you passed in a navigation state with a valid tab/screen index.");var a=g[r];return a?a.getComponentForState(t.routes[t.index]):(0,s.default)(e,r)},getComponentForRouteName:function(t){return(0,s.default)(e,t)},getPathAndParamsForState:function(t){var r=t.routes[t.index],n=a[t.index],o=i[n],u=(0,s.default)(e,n),l=o,d=r.params;if(u&&u.router){var f=r,p=u.router.getPathAndParamsForState(f);l=o?o+"/"+p.path:p.path,d=p.params?babelHelpers.extends({},d,p.params):d}return{path:l,params:d}},getActionForPathAndParams:function(e,t){return a.map(function(r){var a=e.split("/"),n=i[r];if(a[0]===n){var o=g[r],u=p.default.navigate({routeName:r});return o&&o.getActionForPathAndParams?u.action=o.getActionForPathAndParams(a.slice(1).join("/"),t):t&&(u.params=t),u}return null}).find(function(e){return!!e})||a.map(function(r){var a=g[r];return a&&a.getActionForPathAndParams(e,t)}).find(function(e){return!!e})||null},getScreenOptions:(0,d.default)(e,r.navigationOptions),getScreenConfig:x.default}}},351);