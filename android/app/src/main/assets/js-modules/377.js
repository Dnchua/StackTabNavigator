__d(function(e,t,r,a){Object.defineProperty(a,"__esModule",{value:!0});var n=t(47),l=babelHelpers.interopRequireDefault(n),i=t(12),o=t(318),c=babelHelpers.interopRequireDefault(o),u=t(323),d=babelHelpers.interopRequireDefault(u),s=function(e){var t=e.navigation,r=(t.state,t.navigate,e.items),a=e.activeItemKey,n=e.activeTintColor,o=e.activeBackgroundColor,u=e.inactiveTintColor,s=e.inactiveBackgroundColor,y=e.getLabel,b=e.renderIcon,v=e.onItemPress,p=e.itemsContainerStyle,g=e.itemStyle,m=e.labelStyle,C=e.activeLabelStyle,I=e.inactiveLabelStyle,P=e.iconContainerStyle,k=e.drawerPosition;return l.default.createElement(i.View,{style:[f.container,p]},r.map(function(e,t){var r,p=a===e.key,S=p?n:u,w=p?o:s,H={route:e,index:t,focused:p,tintColor:S},E=b(H),T=y(H),h=p?C:I;return l.default.createElement(d.default,{key:e.key,onPress:function(){v({route:e,focused:p})},delayPressIn:0},l.default.createElement(c.default,{style:{backgroundColor:w},forceInset:(r={},babelHelpers.defineProperty(r,k,"always"),babelHelpers.defineProperty(r,"left"===k?"right":"left","never"),babelHelpers.defineProperty(r,"vertical","never"),r)},l.default.createElement(i.View,{style:[f.item,g]},E?l.default.createElement(i.View,{style:[f.icon,p?null:f.inactiveIcon,P]},E):null,"string"==typeof T?l.default.createElement(i.Text,{style:[f.label,{color:S},m,h]},T):T)))}))};s.defaultProps={activeTintColor:"#2196f3",activeBackgroundColor:"rgba(0, 0, 0, .04)",inactiveTintColor:"rgba(0, 0, 0, .87)",inactiveBackgroundColor:"transparent"};var f=i.StyleSheet.create({container:{paddingVertical:4},item:{flexDirection:"row",alignItems:"center"},icon:{marginHorizontal:16,width:24,alignItems:"center"},inactiveIcon:{opacity:.62},label:{margin:16,fontWeight:"bold"}});a.default=s},377);