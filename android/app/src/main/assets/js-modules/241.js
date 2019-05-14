__d(function(e,t,o,i){"use strict";var n=t(141),r=t(213),a=t(242),s=(t(23),t(111)),h=t(116),l=t(176),u=t(110),d=t(132),b="VIEW",c=n({displayName:"KeyboardAvoidingView",mixins:[l],propTypes:babelHelpers.extends({},d,{behavior:s.oneOf(["height","position","padding"]),contentContainerStyle:d.style,keyboardVerticalOffset:s.number.isRequired}),getDefaultProps:function(){return{keyboardVerticalOffset:0}},getInitialState:function(){return{bottom:0}},subscriptions:[],frame:null,relativeKeyboardHeight:function(e){var t=this.frame;if(!t||!e)return 0;var o=e.screenY-this.props.keyboardVerticalOffset;return Math.max(t.y+t.height-o,0)},onKeyboardChange:function(e){if(!e)return void this.setState({bottom:0});var t=e.duration,o=e.easing,i=e.endCoordinates,n=this.relativeKeyboardHeight(i);t&&o&&a.configureNext({duration:t,update:{duration:t,type:a.Types[o]||"keyboard"}}),this.setState({bottom:n})},onLayout:function(e){this.frame=e.nativeEvent.layout},componentWillUpdate:function(e,t,o){t.bottom===this.state.bottom&&"height"===this.props.behavior&&"height"===e.behavior&&(t.bottom=0)},componentWillMount:function(){this.subscriptions=[r.addListener("keyboardDidHide",this.onKeyboardChange),r.addListener("keyboardDidShow",this.onKeyboardChange)]},componentWillUnmount:function(){this.subscriptions.forEach(function(e){return e.remove()})},render:function(){var e=this.props,t=e.behavior,o=e.children,i=e.style,n=babelHelpers.objectWithoutProperties(e,["behavior","children","style"]);switch(t){case"height":var r=void 0;return this.frame&&(r={height:this.frame.height-this.state.bottom,flex:0}),h.createElement(u,babelHelpers.extends({ref:b,style:[i,r],onLayout:this.onLayout},n),o);case"position":var a={bottom:this.state.bottom},s=this.props.contentContainerStyle;return h.createElement(u,babelHelpers.extends({ref:b,style:i,onLayout:this.onLayout},n),h.createElement(u,{style:[s,a]},o));case"padding":var l={paddingBottom:this.state.bottom};return h.createElement(u,babelHelpers.extends({ref:b,style:[i,l],onLayout:this.onLayout},n),o);default:return h.createElement(u,babelHelpers.extends({ref:b,onLayout:this.onLayout,style:i},n),o)}}});o.exports=c},241);