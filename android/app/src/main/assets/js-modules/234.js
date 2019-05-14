__d(function(t,e,a,n){"use strict";var s=e(24),i=e(27),l=function t(){babelHelpers.classCallCheck(this,t),this.any_blank_count=0,this.any_blank_ms=0,this.any_blank_speed_sum=0,this.mostly_blank_count=0,this.mostly_blank_ms=0,this.pixels_blank=0,this.pixels_sampled=0,this.pixels_scrolled=0,this.total_time_spent=0,this.sample_count=0},_=!1,o=[],r=10,h=_?1:null,u=function(){function t(e){babelHelpers.classCallCheck(this,t),this._anyBlankStartTime=null,this._enabled=!1,this._info=new l,this._mostlyBlankStartTime=null,this._samplesStartTime=null,this._getFrameMetrics=e,this._enabled=(h||0)>Math.random(),this._resetData()}return babelHelpers.createClass(t,null,[{key:"addListener",value:function(t){return i(null!==h,"Call `FillRateHelper.setSampleRate` before `addListener`."),o.push(t),{remove:function(){o=o.filter(function(e){return t!==e})}}}},{key:"setSampleRate",value:function(t){h=t}},{key:"setMinSampleCount",value:function(t){r=t}}]),babelHelpers.createClass(t,[{key:"activate",value:function(){this._enabled&&null==this._samplesStartTime&&(_&&console.debug("FillRateHelper: activate"),this._samplesStartTime=s())}},{key:"deactivateAndFlush",value:function(){if(this._enabled){var t=this._samplesStartTime;if(null==t)return void(_&&console.debug("FillRateHelper: bail on deactivate with no start time"));if(this._info.sample_count<r)return void this._resetData();var e=s()-t,a=babelHelpers.extends({},this._info,{total_time_spent:e});if(_){var n={avg_blankness:this._info.pixels_blank/this._info.pixels_sampled,avg_speed:this._info.pixels_scrolled/(e/1e3),avg_speed_when_any_blank:this._info.any_blank_speed_sum/this._info.any_blank_count,any_blank_per_min:this._info.any_blank_count/(e/1e3/60),any_blank_time_frac:this._info.any_blank_ms/e,mostly_blank_per_min:this._info.mostly_blank_count/(e/1e3/60),mostly_blank_time_frac:this._info.mostly_blank_ms/e};for(var i in n)n[i]=Math.round(1e3*n[i])/1e3;console.debug("FillRateHelper deactivateAndFlush: ",{derived:n,info:a})}o.forEach(function(t){return t(a)}),this._resetData()}}},{key:"computeBlankness",value:function(t,e,a){if(!this._enabled||0===t.getItemCount(t.data)||null==this._samplesStartTime)return 0;var n=a.dOffset,i=a.offset,l=a.velocity,_=a.visibleLength;this._info.sample_count++,this._info.pixels_sampled+=Math.round(_),this._info.pixels_scrolled+=Math.round(Math.abs(n));var o=Math.round(1e3*Math.abs(l)),r=s();null!=this._anyBlankStartTime&&(this._info.any_blank_ms+=r-this._anyBlankStartTime),this._anyBlankStartTime=null,null!=this._mostlyBlankStartTime&&(this._info.mostly_blank_ms+=r-this._mostlyBlankStartTime),this._mostlyBlankStartTime=null;for(var h=0,u=e.first,m=this._getFrameMetrics(u);u<=e.last&&(!m||!m.inLayout);)m=this._getFrameMetrics(u),u++;m&&u>0&&(h=Math.min(_,Math.max(0,m.offset-i)));for(var f=0,c=e.last,b=this._getFrameMetrics(c);c>=e.first&&(!b||!b.inLayout);)b=this._getFrameMetrics(c),c--;if(b&&c<t.getItemCount(t.data)-1){var k=b.offset+b.length;f=Math.min(_,Math.max(0,i+_-k))}var d=Math.round(h+f),p=d/_;return p>0?(this._anyBlankStartTime=r,this._info.any_blank_speed_sum+=o,this._info.any_blank_count++,this._info.pixels_blank+=d,p>.5&&(this._mostlyBlankStartTime=r,this._info.mostly_blank_count++)):(o<.01||Math.abs(n)<1)&&this.deactivateAndFlush(),p}},{key:"enabled",value:function(){return this._enabled}},{key:"_resetData",value:function(){this._anyBlankStartTime=null,this._info=new l,this._mostlyBlankStartTime=null,this._samplesStartTime=null}}]),t}();a.exports=u},234);