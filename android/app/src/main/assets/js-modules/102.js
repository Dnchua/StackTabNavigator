__d(function(o,r,l,e){"use strict";var n={poke:function(l){var e=null,n=null;try{n=o.pokeSamplingProfiler(),null===n?console.log("The JSC Sampling Profiler has started"):console.log("The JSC Sampling Profiler has stopped")}catch(o){console.log("Error occured when restarting Sampling Profiler: "+o.toString()),e=o.toString()}var t=r(15),i=t.JSCSamplingProfiler;i.operationComplete(l,n,e)}};l.exports=n},102);