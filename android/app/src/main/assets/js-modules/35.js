__d(function(e,t,i,r){"use strict";var s=t(36),n=t(38),a=(t(23),t(116)),o=t(111),l=t(145),d=t(110),c=t(132),p=t(141),h=t(143),m=p({displayName:"ActivityIndicator",mixins:[n],propTypes:babelHelpers.extends({},c,{animating:o.bool,color:s,size:o.oneOfType([o.oneOf(["small","large"]),o.number]),hidesWhenStopped:o.bool}),getDefaultProps:function(){return{animating:!0,color:void 0,hidesWhenStopped:!0,size:"small"}},render:function(){var e=this.props,t=e.onLayout,i=e.style,r=babelHelpers.objectWithoutProperties(e,["onLayout","style"]),s=void 0;switch(r.size){case"small":s=y.sizeSmall;break;case"large":s=y.sizeLarge;break;default:s={height:r.size,width:r.size}}return a.createElement(d,{onLayout:t,style:[y.container,i]},a.createElement(u,babelHelpers.extends({},r,{style:s,styleAttr:"Normal",indeterminate:!0})))}}),y=l.create({container:{alignItems:"center",justifyContent:"center"},sizeSmall:{width:20,height:20},sizeLarge:{width:36,height:36}}),u=h("AndroidProgressBar",m,{nativeOnly:{indeterminate:!0,progress:!0,styleAttr:!0}});i.exports=m},35);