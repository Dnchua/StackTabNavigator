__d(function(e,t,n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=t(47),o=babelHelpers.interopRequireDefault(r),i=t(12),l=function(e){function t(e){babelHelpers.classCallCheck(this,t);var n=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={source:{}},n}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"componentDidMount",value:function(){var e=this;i.InteractionManager.runAfterInteractions(function(){e.props.navigation.setParams({title:"\u52a0\u8f7d\u4e2d"}),e.setState({source:{uri:e.props.navigation.state.params.url}})})}},{key:"render",value:function(){var e=this;return o.default.createElement(i.View,{style:s.container},o.default.createElement(i.WebView,{automaticallyAdjustContentInsets:!1,style:s.webView,source:this.state.source,onLoadEnd:function(t){return e.onLoadEnd(t)},scalesPageToFit:!0}))}},{key:"onLoadEnd",value:function(e){e.nativeEvent.title.length>0&&this.props.navigation.setParams({title:e.nativeEvent.title})}}]),t}(r.PureComponent);l.navigationOptions=function(e){var t=e.navigation;return{headerStyle:{backgroundColor:"white"},title:t.state.params.title}};var s=i.StyleSheet.create({container:{flex:1,backgroundColor:"#2c3e50"},webView:{flex:1,backgroundColor:"white"}});a.default=l},406);