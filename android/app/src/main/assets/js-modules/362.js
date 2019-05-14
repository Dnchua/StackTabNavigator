__d(function(e,t,n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=t(47),o=babelHelpers.interopRequireWildcard(r),i=t(332),s=babelHelpers.interopRequireDefault(i),p=t(12),l=t(359),u=12,d={timing:p.Animated.spring,tension:300,friction:35},h=function(e){function t(){var e,n,a,r;babelHelpers.classCallCheck(this,t);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return n=a=babelHelpers.possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a._isMovingHorizontally=function(e,t){return Math.abs(t.dx)>Math.abs(2*t.dy)&&Math.abs(t.vx)>Math.abs(2*t.vy)},a._canMoveScreen=function(e,t){if(a.props.swipeEnabled===!1)return!1;var n=a.props.navigationState,r=n.routes,o=n.index;return a._isMovingHorizontally(e,t)&&(t.dx>=u&&o>=0||t.dx<=-u&&o<=r.length-1)},a._startGesture=function(e,t){"function"==typeof a.props.onSwipeStart&&a.props.onSwipeStart(e,t),a.props.panX.stopAnimation()},a._respondToGesture=function(e,t){var n=a.props.navigationState,r=n.routes,o=n.index;t.dx>0&&o<=0||t.dx<0&&o>=r.length-1||a.props.panX.setValue(t.dx)},a._finishGesture=function(e,t){var n=a.props,r=n.navigationState,o=n.layout,i=n.swipeDistanceThreshold,s=void 0===i?o.width/1.75:i,l=a.props.swipeVelocityThreshold,u=void 0===l?.15:l;"android"===p.Platform.OS&&(u/=1e6);var d="number"==typeof a._pendingIndex?a._pendingIndex:r.index,h=d;Math.abs(t.dx)>Math.abs(t.dy)&&Math.abs(t.vx)>Math.abs(t.vy)&&(Math.abs(t.dx)>s||Math.abs(t.vx)>u)&&(h=Math.round(Math.min(Math.max(0,d-t.dx/Math.abs(t.dx)),r.routes.length-1))),isFinite(h)&&a.props.canJumpToTab(a.props.navigationState.routes[h])||(h=d),a._transitionTo(h)},a._transitionTo=function(e){var t=-e*a.props.layout.width;if(a.props.animationEnabled===!1)return a.props.panX.setValue(0),void a.props.offsetX.setValue(t);var n=d.timing,r=babelHelpers.objectWithoutProperties(d,["timing"]);p.Animated.parallel([n(a.props.panX,babelHelpers.extends({},r,{toValue:0})),n(a.props.offsetX,babelHelpers.extends({},r,{toValue:t}))]).start(function(t){var n=t.finished;n&&(a.props.jumpToIndex(e),a._pendingIndex=null)}),a._pendingIndex=e},r=n,babelHelpers.possibleConstructorReturn(a,r)}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentWillMount",value:function(){this._panResponder=p.PanResponder.create({onMoveShouldSetPanResponder:this._canMoveScreen,onMoveShouldSetPanResponderCapture:this._canMoveScreen,onPanResponderGrant:this._startGesture,onPanResponderMove:this._respondToGesture,onPanResponderTerminate:this._finishGesture,onPanResponderRelease:this._finishGesture,onPanResponderTerminationRequest:function(){return!0}})}},{key:"componentDidUpdate",value:function(e){e.navigationState.index!==this.props.navigationState.index&&this._transitionTo(this.props.navigationState.index)}},{key:"render",value:function(){var e=this.props,t=e.panX,n=e.offsetX,a=e.navigationState,r=e.layout,i=e.children,s=r.width,l=a.routes,u=s*(l.length-1),d=p.Animated.add(t,n).interpolate({inputRange:[-u,0],outputRange:[-u,0],extrapolate:"clamp"});return o.createElement(p.Animated.View,babelHelpers.extends({style:[c.sheet,s?{width:l.length*s,transform:[{translateX:d}]}:null]},this._panResponder.panHandlers),o.Children.map(i,function(e,t){return o.createElement(p.View,{key:a.routes[t].key,testID:a.routes[t].testID,style:s?{width:s}:t===a.index?p.StyleSheet.absoluteFill:null},t===a.index||s?e:null)}))}}]),t}(o.Component);h.propTypes=babelHelpers.extends({},l.PagerRendererPropType,{configureTransition:s.default.func.isRequired,swipeDistanceThreshold:s.default.number,swipeVelocityThreshold:s.default.number,onSwipeStart:s.default.func,onSwipeEnd:s.default.func}),h.defaultProps={canJumpToTab:function(){return!0},configureTransition:function(){return d},initialLayout:{height:0,width:0}},a.default=h;var c=p.StyleSheet.create({sheet:{flex:1,flexDirection:"row",alignItems:"stretch"}})},362);