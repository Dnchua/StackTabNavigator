__d(function(e,t,n,o){"use strict";var r=t(36),s=t(38),i=(t(23),t(116)),a=t(111),l=t(145),p=t(132),h=t(141),u=t(143),c=h({displayName:"Switch",propTypes:babelHelpers.extends({},p,{value:a.bool,disabled:a.bool,onValueChange:a.func,testID:a.string,tintColor:r,onTintColor:r,thumbTintColor:r}),getDefaultProps:function(){return{value:!1,disabled:!1}},mixins:[s],_rctSwitch:{},_onChange:function(e){this._rctSwitch.setNativeProps({on:this.props.value}),this.props.onChange&&this.props.onChange(e),this.props.onValueChange&&this.props.onValueChange(e.nativeEvent.value)},render:function(){var e=this,t=babelHelpers.extends({},this.props);return t.onStartShouldSetResponder=function(){return!0},t.onResponderTerminationRequest=function(){return!1},t.enabled=!this.props.disabled,t.on=this.props.value,t.style=this.props.style,t.trackTintColor=this.props.value?this.props.onTintColor:this.props.tintColor,i.createElement(d,babelHelpers.extends({},t,{ref:function(t){e._rctSwitch=t},onChange:this._onChange}))}}),d=(l.create({rctSwitchIOS:{height:31,width:51}}),u("AndroidSwitch",c,{nativeOnly:{onChange:!0,on:!0,enabled:!0,trackTintColor:!0}}));n.exports=c},258);