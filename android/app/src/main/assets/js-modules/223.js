__d(function(e,t,n,a){"use strict";function r(e,t){return e.reduce(function(e,t){for(var n in t)null!=t[n]&&(e[n]=t[n]);return e},babelHelpers.extends({},t))}function o(e){return{backgroundColor:null!=e.backgroundColor?{value:e.backgroundColor,animated:e.animated}:null,barStyle:null!=e.barStyle?{value:e.barStyle,animated:e.animated}:null,translucent:e.translucent,hidden:null!=e.hidden?{value:e.hidden,animated:e.animated,transition:e.showHideTransition}:null,networkActivityIndicatorVisible:e.networkActivityIndicatorVisible}}var l=t(116),i=t(111),u=t(36),s=(t(23),t(127)),c=t(15).StatusBarManager,d=function(e){function t(){var e,n,a,o;babelHelpers.classCallCheck(this,t);for(var l=arguments.length,i=Array(l),u=0;u<l;u++)i[u]=arguments[u];return n=a=babelHelpers.possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a._stackEntry=null,a._updatePropsStack=function(){clearImmediate(t._updateImmediate),t._updateImmediate=setImmediate(function(){var e=t._currentValues,n=r(t._propsStack,t._defaultProps);e&&e.barStyle.value===n.barStyle.value||c.setStyle(n.barStyle.value),e&&e.backgroundColor.value===n.backgroundColor.value||c.setColor(s(n.backgroundColor.value),n.backgroundColor.animated),e&&e.hidden.value===n.hidden.value||c.setHidden(n.hidden.value),e&&e.translucent===n.translucent||c.setTranslucent(n.translucent),t._currentValues=n})},o=n,babelHelpers.possibleConstructorReturn(a,o)}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentDidMount",value:function(){this._stackEntry=o(this.props),t._propsStack.push(this._stackEntry),this._updatePropsStack()}},{key:"componentWillUnmount",value:function(){var e=t._propsStack.indexOf(this._stackEntry);t._propsStack.splice(e,1),this._updatePropsStack()}},{key:"componentDidUpdate",value:function(){var e=t._propsStack.indexOf(this._stackEntry);this._stackEntry=o(this.props),t._propsStack[e]=this._stackEntry,this._updatePropsStack()}},{key:"render",value:function(){return null}}],[{key:"setHidden",value:function(e,n){n=n||"none",t._defaultProps.hidden.value=e,c.setHidden(e)}},{key:"setBarStyle",value:function(e,n){n=n||!1,t._defaultProps.barStyle.value=e,c.setStyle(e)}},{key:"setNetworkActivityIndicatorVisible",value:function(e){return void console.warn("`setNetworkActivityIndicatorVisible` is only available on iOS")}},{key:"setBackgroundColor",value:function(e,n){n=n||!1,t._defaultProps.backgroundColor.value=e,c.setColor(s(e),n)}},{key:"setTranslucent",value:function(e){t._defaultProps.translucent=e,c.setTranslucent(e)}}]),t}(l.Component);d._propsStack=[],d._defaultProps=o({animated:!1,showHideTransition:"fade",backgroundColor:"black",barStyle:"default",translucent:!1,hidden:!1,networkActivityIndicatorVisible:!1}),d._updateImmediate=null,d._currentValues=null,d.currentHeight=c.HEIGHT,d.propTypes={hidden:i.bool,animated:i.bool,backgroundColor:u,translucent:i.bool,barStyle:i.oneOf(["default","light-content","dark-content"]),networkActivityIndicatorVisible:i.bool,showHideTransition:i.oneOf(["fade","slide"])},d.defaultProps={animated:!1,showHideTransition:"fade"},n.exports=d},223);