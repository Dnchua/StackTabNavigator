__d(function(t,e,i,a){"use strict";var s=e(200),n=e(185),o=n.shouldUseNativeDriver,r=function(e){function i(t){babelHelpers.classCallCheck(this,i);var e=babelHelpers.possibleConstructorReturn(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return e._deceleration=void 0!==t.deceleration?t.deceleration:.998,e._velocity=t.velocity,e._useNativeDriver=o(t),e.__isInteraction=void 0===t.isInteraction||t.isInteraction,e.__iterations=void 0!==t.iterations?t.iterations:1,e}return babelHelpers.inherits(i,e),babelHelpers.createClass(i,[{key:"__getNativeAnimationConfig",value:function(){return{type:"decay",deceleration:this._deceleration,velocity:this._velocity,iterations:this.__iterations}}},{key:"start",value:function(t,e,i,a,s){this.__active=!0,this._lastValue=t,this._fromValue=t,this._onUpdate=e,this.__onEnd=i,this._startTime=Date.now(),this._useNativeDriver?this.__startNativeAnimation(s):this._animationFrame=requestAnimationFrame(this.onUpdate.bind(this))}},{key:"onUpdate",value:function(){var t=Date.now(),e=this._fromValue+this._velocity/(1-this._deceleration)*(1-Math.exp(-(1-this._deceleration)*(t-this._startTime)));return this._onUpdate(e),Math.abs(this._lastValue-e)<.1?void this.__debouncedOnEnd({finished:!0}):(this._lastValue=e,void(this.__active&&(this._animationFrame=requestAnimationFrame(this.onUpdate.bind(this)))))}},{key:"stop",value:function(){babelHelpers.get(i.prototype.__proto__||Object.getPrototypeOf(i.prototype),"stop",this).call(this),this.__active=!1,t.cancelAnimationFrame(this._animationFrame),this.__debouncedOnEnd({finished:!1})}}]),i}(s);i.exports=r},199);