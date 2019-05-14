__d(function(e,t,n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=t(47),i=babelHelpers.interopRequireWildcard(r),o=t(332),u=babelHelpers.interopRequireDefault(o),d=t(12),s=t(359),l=void 0;switch(d.Platform.OS){case"android":l=t(360).default;break;case"ios":l=t(361).default;break;default:l=t(362).default}var p=function(e){function t(e){babelHelpers.classCallCheck(this,t);var n=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));f.call(n);var a=n.props.navigationState,r=babelHelpers.extends({},n.props.initialLayout,{measured:!1}),i=new d.Animated.Value(0),o=new d.Animated.Value(-a.index*r.width),u=new d.Animated.ValueXY({x:r.width||.001,y:r.height||.001}),s=d.Animated.multiply(d.Animated.divide(d.Animated.add(i,o),u.x),-1);return n.state={loaded:[a.index],layout:r,layoutXY:u,panX:i,offsetX:o,position:s},n}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentDidMount",value:function(){this._mounted=!0}},{key:"componentWillUnmount",value:function(){this._mounted=!1}},{key:"render",value:function(){var e=this,t=this.props,n=t.navigationState,a=(t.onIndexChange,t.initialLayout,t.renderScene,t.renderPager),r=t.renderHeader,o=t.renderFooter,u=babelHelpers.objectWithoutProperties(t,["navigationState","onIndexChange","initialLayout","renderScene","renderPager","renderHeader","renderFooter"]),s=this._buildSceneRendererProps();return i.createElement(d.View,{onLayout:this._handleLayout,loaded:this.state.loaded,style:[c.container,this.props.style]},r&&r(s),a(babelHelpers.extends({},s,u,{panX:this.state.panX,offsetX:this.state.offsetX,children:n.routes.map(function(t,a){var r=e._renderScene(babelHelpers.extends({},s,{route:t,index:a,focused:a===n.index}));return r?i.cloneElement(r,{key:t.key}):r})})),o&&o(s))}}]),t}(i.Component);p.propTypes={navigationState:s.NavigationStatePropType.isRequired,onIndexChange:u.default.func.isRequired,initialLayout:u.default.shape({height:u.default.number.isRequired,width:u.default.number.isRequired}),canJumpToTab:u.default.func.isRequired,renderPager:u.default.func.isRequired,renderScene:u.default.func.isRequired,renderHeader:u.default.func,renderFooter:u.default.func},p.defaultProps={canJumpToTab:function(){return!0},renderPager:function(e){return i.createElement(l,e)},initialLayout:{height:0,width:0},useNativeDriver:!1};var f=function(){var e=this;this._mounted=!1,this._renderScene=function(t){return e.props.renderScene(t)},this._handleLayout=function(t){var n=t.nativeEvent.layout,a=n.height,r=n.width;e.state.layout.width===r&&e.state.layout.height===a||(e.state.offsetX.setValue(-e.props.navigationState.index*r),e.state.layoutXY.setValue({x:r||.001,y:a||.001}),e.setState({layout:{measured:!0,height:a,width:r}}))},this._buildSceneRendererProps=function(){return{panX:e.state.panX,offsetX:e.state.offsetX,position:e.state.position,layout:e.state.layout,navigationState:e.props.navigationState,jumpToIndex:e._jumpToIndex,useNativeDriver:e.props.useNativeDriver===!0}},this._jumpToIndex=function(t){if(e._mounted){var n=e.props,a=n.canJumpToTab,r=n.navigationState;a(r.routes[t])&&t!==r.index&&e.props.onIndexChange(t)}}};a.default=p;var c=d.StyleSheet.create({container:{flex:1,overflow:"hidden"}})},358);