__d(function(e,r,t,n){Object.defineProperty(n,"__esModule",{value:!0});var o=r(47),a=babelHelpers.interopRequireDefault(o),i=r(12),s=r(357),p=r(318),l=(babelHelpers.interopRequireDefault(p),r(367)),u=babelHelpers.interopRequireDefault(l),c=r(353),d=babelHelpers.interopRequireDefault(c),b=function(e){function r(){var e,t,n,o;babelHelpers.classCallCheck(this,r);for(var i=arguments.length,p=Array(i),l=0;l<i;l++)p[l]=arguments[l];return t=n=babelHelpers.possibleConstructorReturn(this,(e=r.__proto__||Object.getPrototypeOf(r)).call.apply(e,[this].concat(p))),n._handlePageChanged=function(e){var r=n.props.navigation;r.navigate(r.state.routes[e].routeName)},n._renderScene=function(e){var r=e.route,t=n.props,o=t.screenProps,i=t.navigation,s=i.state.index,p=i.state.routes[s].key,l=r.key,c=n.props.childNavigationProps[r.key],d=n.props.router.getComponentForRouteName(r.routeName);return a.default.createElement(u.default,{lazy:n.props.lazy,isFocused:p===l,removeClippedSubViews:n.props.removeClippedSubviews,animationEnabled:n.props.animationEnabled,swipeEnabled:n.props.swipeEnabled,screenProps:o,component:d,navigation:n.props.navigation,childNavigation:c})},n._getLabel=function(e){var r=e.route,t=e.tintColor,o=e.focused,a=n.props.router.getScreenOptions(n.props.childNavigationProps[r.key],n.props.screenProps||{});return a.tabBarLabel?"function"==typeof a.tabBarLabel?a.tabBarLabel({tintColor:t,focused:o}):a.tabBarLabel:"string"==typeof a.title?a.title:r.routeName},n._getOnPress=function(e,r){var t=r.route,o=n.props.router.getScreenOptions(n.props.childNavigationProps[t.key],n.props.screenProps||{});return o.tabBarOnPress},n._getTestIDProps=function(e){var r=e.route,t=e.focused,o=n.props.router.getScreenOptions(n.props.childNavigationProps[r.key],n.props.screenProps||{});return"function"==typeof o.tabBarTestIDProps?o.tabBarTestIDProps({focused:t}):o.tabBarTestIDProps},n._renderIcon=function(e){var r=e.focused,t=e.route,o=e.tintColor,a=n.props.router.getScreenOptions(n.props.childNavigationProps[t.key],n.props.screenProps||{});return a.tabBarIcon?"function"==typeof a.tabBarIcon?a.tabBarIcon({tintColor:o,focused:r}):a.tabBarIcon:null},n._renderTabBar=function(e){var r=n.props,t=r.tabBarOptions,o=r.tabBarComponent,i=r.animationEnabled;return"undefined"==typeof o?null:a.default.createElement(o,babelHelpers.extends({},e,t,{tabBarPosition:n.props.tabBarPosition,screenProps:n.props.screenProps,navigation:n.props.navigation,getLabel:n._getLabel,getTestIDProps:n._getTestIDProps,getOnPress:n._getOnPress,renderIcon:n._renderIcon,animationEnabled:i}))},n._renderPager=function(e){return a.default.createElement(s.TabViewPagerPan,e)},o=t,babelHelpers.possibleConstructorReturn(n,o)}return babelHelpers.inherits(r,e),babelHelpers.createClass(r,[{key:"render",value:function(){var e=this.props,r=e.router,t=e.tabBarComponent,n=e.tabBarPosition,o=e.animationEnabled,i=e.configureTransition,p=e.initialLayout,l=e.screenProps,u=void 0,c=void 0,d=void 0,b=this.props.navigation.state,g=r.getScreenOptions(this.props.childNavigationProps[b.routes[b.index].key],l||{}),P=null==g.tabBarVisible||g.tabBarVisible,v=null==g.swipeEnabled?this.props.swipeEnabled:g.swipeEnabled;"function"==typeof v&&(v=v(b)),void 0!==t&&P&&("bottom"===n?c=this._renderTabBar:u=this._renderTabBar),(o===!1&&v===!1||"function"==typeof i)&&(d=this._renderPager);var h={initialLayout:p,animationEnabled:o,configureTransition:i,swipeEnabled:v,renderPager:d,renderHeader:u,renderFooter:c,renderScene:this._renderScene,onIndexChange:this._handlePageChanged,navigationState:this.props.navigation.state,screenProps:this.props.screenProps,style:f.container};return a.default.createElement(s.TabViewAnimated,h)}}]),r}(a.default.PureComponent);b.defaultProps={lazy:!0,removedClippedSubviews:!0,initialLayout:i.Platform.select({android:{width:1,height:0}})},n.default=(0,d.default)(b);var f=i.StyleSheet.create({container:{flex:1}})},356);