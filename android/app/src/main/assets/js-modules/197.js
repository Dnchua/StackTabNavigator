__d(function(t,e,a,i){"use strict";var _=(e(182),e(184)),l=function(t){function e(t,a,i,_,l){babelHelpers.classCallCheck(this,e);var n=babelHelpers.possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n._value=t,n._parent=a,n._animationClass=i,n._animationConfig=_,n._callback=l,n.__attach(),n}return babelHelpers.inherits(e,t),babelHelpers.createClass(e,[{key:"__getValue",value:function(){return this._parent.__getValue()}},{key:"__attach",value:function(){this._parent.__addChild(this)}},{key:"__detach",value:function(){this._parent.__removeChild(this),babelHelpers.get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"__detach",this).call(this)}},{key:"update",value:function(){this._value.animate(new this._animationClass(babelHelpers.extends({},this._animationConfig,{toValue:this._animationConfig.toValue.__getValue()})),this._callback)}}]),e}(_);a.exports=l},197);