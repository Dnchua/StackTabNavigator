__d(function(e,t,r,a){Object.defineProperty(a,"__esModule",{value:!0});var o=t(47),n=babelHelpers.interopRequireDefault(o),l=t(12),i=t(381),u=t(382),s=babelHelpers.interopRequireDefault(u),d=t(384),p=babelHelpers.interopRequireDefault(d),f=t(383),c=(0,i.px2dp)(380),b=function(e){function t(e){babelHelpers.classCallCheck(this,t);var r=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._gotoDetail=function(e){(0,i.saveBookCover)(e.cover.large),r.props.navigation.navigate("appBookDetail",{book:e})},r._renderItem=function(e){var t=e.item;return n.default.createElement(p.default,babelHelpers.extends({onPress:function(){return r._gotoDetail(t)},key:t.id},t))},r._getItemLayout=function(e,t){return{length:c,offset:c*t,index:t}},r}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){return n.default.createElement(s.default,{key:"home",getItemLayout:this._getItemLayout,navigate:this.props.navigation.navigate,renderItem:this._renderItem,fetchData:f.getAllBooks,keyExtractor:function(e){return e.id}})}}]),t}(n.default.Component);b.navigatorStyle={navBarHideOnScroll:!0,navBarBackgroundColor:"#3F51B5",navBarTextColor:"#fff",statusBarColor:"#3F51B5",navBarTitleTextCentered:!0,statusBarTextColorScheme:"light",statusBarHideWithNavBar:!0},a.default=b;l.StyleSheet.create({subtitleWrapper:{height:(0,i.px2dp)(90),backgroundColor:"#9E9E9E",justifyContent:"center",alignItems:"flex-start",paddingLeft:20},subtitle:{color:"#212121",fontSize:(0,i.px2dp)(38),fontWeight:"bold"},item:{padding:25,borderBottomColor:"#BDBDBD",borderBottomWidth:(0,i.px2dp)(1)}})},380);