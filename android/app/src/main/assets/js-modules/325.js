__d(function(e,t,n,i){Object.defineProperty(i,"__esModule",{value:!0});var a=t(47),r=babelHelpers.interopRequireDefault(a),l=t(12),o=t(323),s=babelHelpers.interopRequireDefault(o),c=function(e){function t(){var e,n,i,a;babelHelpers.classCallCheck(this,t);for(var r=arguments.length,l=Array(r),o=0;o<r;o++)l[o]=arguments[o];return n=i=babelHelpers.possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),i.state={},i._onTextLayout=function(e){i.state.initialTextWidth||i.setState({initialTextWidth:e.nativeEvent.layout.x+e.nativeEvent.layout.width})},a=n,babelHelpers.possibleConstructorReturn(i,a)}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){var e=this.props,t=e.buttonImage,n=e.onPress,i=e.width,a=e.title,o=e.titleStyle,c=e.tintColor,b=e.truncatedTitle,d=!(!this.state.initialTextWidth||!i)&&this.state.initialTextWidth>i,p=d?b:a;p&&p.length>8&&(p=b);var f=this.props,h=f.ButtonContainerComponent,y=f.LabelContainerComponent;return r.default.createElement(s.default,{accessibilityComponentType:"button",accessibilityLabel:p,accessibilityTraits:"button",testID:"header-back",delayPressIn:0,onPress:n,style:u.container,borderless:!0},r.default.createElement(l.View,{style:u.container},r.default.createElement(h,null,r.default.createElement(l.Image,{style:[u.icon,!!a&&u.iconWithTitle,!!c&&{tintColor:c}],source:t})),"string"==typeof p&&r.default.createElement(y,null,r.default.createElement(l.Text,{onLayout:this._onTextLayout,style:[u.title,!!c&&{color:c},o],numberOfLines:1},p))))}}]),t}(r.default.PureComponent);c.defaultProps={tintColor:"#037aff",truncatedTitle:"Back",buttonImage:t(324)};var u=l.StyleSheet.create({container:{alignItems:"center",flexDirection:"row",backgroundColor:"transparent"},title:{fontSize:17,paddingRight:10},icon:{height:21,width:12,marginLeft:9,marginRight:22,marginVertical:12,resizeMode:"contain",transform:[{scaleX:l.I18nManager.isRTL?-1:1}]},iconWithTitle:{marginRight:3}});i.default=c},325);