__d(function(e,t,r,n){"use strict";function o(e){e.prototype.constructor!==e&&Object.defineProperty(e.prototype,"constructor",{value:e,configurable:!0,writable:!0})}function i(e,t,r){var n=e._realm;if(!n.isInTransaction)throw Error("'findOrCreate' can only be called inside a write transaction.");var o=t.filtered("role.name = '"+r+"'")[0];if(void 0===o){var i=n.objects("__Role").filtered("name = '"+r+"'")[0];void 0===i&&(i=n.create("__Role",{name:r})),o=n.create("__Permission",{role:i}),t.push(o)}return o}function s(e,t){var r=t.schema.name;void 0===e.find(function(e){return e&&(e.name===r||e.schema&&e.schema.name===r)})&&e.push(t)}function a(e,t,r,n){var o=new Promise(function(r,n){t.call(e,function(e){void 0===e?setTimeout(function(){return r()},1):setTimeout(function(){return n(e)},1)})});return void 0===r?o:Promise.race([o,new Promise(function(e,t){setTimeout(function(){t(n)},r)})])}var c=t(446),u=Object.getOwnPropertyDescriptors||function(e){return Object.getOwnPropertyNames(e).reduce(function(t,r){return t[r]=Object.getOwnPropertyDescriptor(e,r),t},{})},l=/^(class_)?(.*?)(_matches)?$/gm;r.exports=function(e,r){Object.defineProperties(e.Collection.prototype,t(452)),o(e.Collection),o(e.List),o(e.Results),o(e.Object),Object.defineProperties(e,u({open:function(t){if(void 0===t&&(t={}),!("sync"in t)){var r=Promise.resolve(new e(t));return r.progress=function(e){},r}var n=void 0,o=new Promise(function(r,o){n=e._asyncOpen(t,function(e,t){t?setTimeout(function(){o(t)},1):setTimeout(function(){r(e)},1)})});return o.progress=function(e){return n&&n.addProgressNotification("download","forCurrentlyOutstandingWork",e),o},o},openAsync:function(e,t,r){var n="Realm.openAsync is now deprecated in favor of Realm.open. This function will be removed in future versions.";(console.warn||console.log).call(console,n);var o=this.open(e);r&&o.progress(r),o.then(function(e){t(null,e)}).catch(function(e){t(e)})},createTemplateObject:function(e){var t={};for(var r in e.properties){var n=void 0;if("string"==typeof e.properties[r]||e.properties[r]instanceof String)n=e.properties[r];else{var o=e.properties[r];if(o.optional===!0)continue;if(void 0!==o.default){t[r]=o.default;continue}n=o.type}switch(n){case"bool":t[r]=!1;break;case"int":t[r]=0;break;case"float":t[r]=0;break;case"double":t[r]=0;break;case"string":t[r]="";break;case"data":t[r]=new ArrayBuffer(0);break;case"date":t[r]=new Date(0)}}return t}}));var n={All:"all",Modified:"modified",Never:"never"};if(e.UpdateMode||Object.defineProperty(e,"UpdateMode",{value:n,configurable:!1}),e.Sync){var p=t(443);Object.defineProperties(e.Sync.User,u(p.static)),Object.defineProperties(e.Sync.User.prototype,u(p.instance)),Object.defineProperty(e.Sync.User,"_realmConstructor",{value:e}),e.Sync.Credentials={},Object.defineProperties(e.Sync.Credentials,u(p.credentials)),e.Sync.AuthError=t(444).AuthError,e.Sync.removeAllListeners&&(process.on("exit",e.Sync.removeAllListeners),process.on("SIGINT",function(){e.Sync.removeAllListeners(),process.exit(2)}),process.on("uncaughtException",function(t){e.Sync.removeAllListeners(),console.log(t.stack),process.exit(99)})),e.Sync.setSyncLogger||(e.Sync.setSyncLogger=function(t,r){e.Sync.setLogger(t,r)}),o(e.Sync.User),o(e.Sync.Session),e.automaticSyncConfiguration=function(){var e=void 0;if(0===arguments.length){var t=this.Sync.User.all,r=Object.keys(t);1===r.length?e=t[r[0]]:new Error("One and only one user should be logged in but found "+t.length+" users.")}else 1===arguments.length?e=arguments[0]:new Error("Zero or one argument expected.");var n=new c(e.server),o="https:"===n.protocol?"s":"",i=void 0===n.port?"9080":n.port,s="realm"+o+"://"+n.hostname+":"+i+"/default",a={sync:{user:e,url:s}};return a},e.Sync.setFeatureToken=function(){console.log("Realm.Sync.setFeatureToken() is deprecated and you can remove any calls to it.")},e.Sync.Session.prototype.uploadAllLocalChanges=function(e){return a(this,this._waitForUploadCompletion,e,"Uploading changes did not complete in "+e+" ms.")},e.Sync.Session.prototype.downloadAllServerChanges=function(e){return a(this,this._waitForDownloadCompletion,e,"Downloading changes did not complete in "+e+" ms.")},e.Sync.SubscriptionState={Error:-1,Creating:2,Pending:0,Complete:1,Invalidated:3},e.Sync.ConnectionState={Disconnected:"disconnected",Connecting:"connecting",Connected:"connected"};var d=function(){};d.schema=Object.freeze({name:"__Permission",properties:{role:"__Role",canRead:{type:"bool",default:!1},canUpdate:{type:"bool",default:!1},canDelete:{type:"bool",default:!1},canSetPermissions:{type:"bool",default:!1},canQuery:{type:"bool",default:!1},canCreate:{type:"bool",default:!1},canModifySchema:{type:"bool",default:!1}}});var f=function(){};f.schema=Object.freeze({name:"__User",primaryKey:"id",properties:{id:"string",role:"__Role"}});var m=function(){};m.schema=Object.freeze({name:"__Role",primaryKey:"name",properties:{name:"string",members:"__User[]"}});var y=function(){};y.schema=Object.freeze({name:"__Class",primaryKey:"name",properties:{name:"string",permissions:"__Permission[]"}}),y.prototype.findOrCreate=function(e){return i(this,this.permissions,e)};var b=function(){};b.schema=Object.freeze({name:"__Realm",primaryKey:"id",properties:{id:"int",permissions:"__Permission[]"}}),b.prototype.findOrCreate=function(e){return i(this,this.permissions,e)};var h={Class:y,Permission:d,Realm:b,Role:m,User:f};e.Permissions||Object.defineProperty(e,"Permissions",{value:h,configurable:!1});var g=function(){};g.schema=Object.freeze({name:"__ResultSets",properties:{_name:{type:"string",indexed:!0,mapTo:"name"},_query:{type:"string",mapTo:"query"},_matchesProperty:{type:"string",mapTo:"matches_property"},_queryParseCounter:{type:"int",mapTo:"query_parse_counter"},_state:{type:"int",mapTo:"status"},_errorMessage:{type:"string",mapTo:"error_message"},_createdAt:{type:"date",mapTo:"created_at"},_updatedAt:{type:"date",mapTo:"updated_at"},_expiresAt:{type:"date",optional:!0,mapTo:"expires_at"},_timeToLive:{type:"int",optional:!0,mapTo:"time_to_live"}}}),g.prototype._subscriptionUpdated=function(e){this._updatedAt=new Date,this._expiresAt=new Date(e._updatedAt.getTime()+e._timeToLive)},Object.defineProperties(g.prototype,{objectType:{enumerable:!0,get:function(){return this._matchesProperty.replace(l,"$2")}},name:{enumerable:!0,get:function(){return this._name}},query:{enumerable:!0,set:function(e){if("string"==typeof e||e instanceof String)this._query=e;else{var t=e.description();if(void 0===t)throw new Error("Updating a query must be done either using a String or a Results object.");this._query=t}this._errorMessage="",this._state=0,this._subscriptionUpdated(this)},get:function(){return this._query}},state:{enumerable:!0,get:function(){return this._state}},error:{enumerable:!0,get:function(){return""===this._errorMessage?void 0:this._errorMessage}},createdAt:{enumerable:!0,get:function(){return this._createdAt}},updatedAt:{enumerable:!0,get:function(){return this._updatedAt}},expiresAt:{enumerable:!0,get:function(){return this._expiresAt}},timeToLive:{enumerable:!0,set:function(e){this._timeToLive=e,this._subscriptionUpdated(this)},get:function(){return this._timeToLive}}});var _={ResultSets:g};e.Subscription||Object.defineProperty(e,"Subscription",{value:_,configurable:!1}),Object.defineProperties(e.prototype,u({permissions:function(e){if(!this._isPartialRealm)throw new Error("Wrong Realm type. 'permissions()' is only available for Query-based Realms.");if(void 0===e)return this.objects("__Realm").filtered("id = 0")[0];var t=this._schemaName(e),r=this.objects("__Class").filtered("name = '"+t+"'");if(0===r.length)throw Error("Could not find Class-level permissions for '"+t+"'");return r[0]},subscriptions:function(e){if(!this._isPartialRealm)throw new Error("Wrong Realm type. 'subscriptions()' is only available for Query-based Realms.");var t=this.objects("__ResultSets");if(e){if("string"!=typeof e)throw new Error("string expected - got "+typeof e+".");t=e.includes("*")||e.includes("?")?t.filtered("name LIKE '"+e+"'"):t.filtered("name == '"+e+"'")}return t},unsubscribe:function(e){if(!this._isPartialRealm)throw new Error("Wrong Realm type. 'unsubscribe()' is only available for Query-based Realms.");if("string"!=typeof e)throw new Error("string expected - got "+typeof e+".");if(""===e)throw new Error("Non-empty string expected.");var t=this.objects("__ResultSets").filtered("name == '"+e+"'");if(0!==t.length){var r=!1;this.isInTransaction||(this.beginTransaction(),r=!0),this.delete(t),r&&this.commitTransaction()}}})),Object.defineProperties(e,u({_extendQueryBasedSchema:function(t){s(t,e.Permissions.Class),s(t,e.Permissions.Permission),s(t,e.Permissions.Realm),s(t,e.Permissions.Role),s(t,e.Permissions.User),s(t,e.Subscription.ResultSets)},_createUserAgentDescription:function(){try{var e="RealmJS/";if(e=e+t(453).version+" ("+r+", ","undefined"!=typeof navigator&&"ReactNative"===navigator.product){var n=t(12).Platform;e+=n.OS+", v"+n.Version}else e+=process.version;return e+=")"}catch(e){return"RealmJS/Unknown"}}}))}var v=Object.freeze({BOOL:"bool",INT:"int",FLOAT:"float",DOUBLE:"double",STRING:"string",DATE:"date",DATA:"data",OBJECT:"object",LIST:"list"});Object.defineProperty(e,"Types",{get:function(){if("undefined"!=typeof console){var e=(new Error).stack.split("\n").slice(2).join("\n"),t="`Realm.Types` is deprecated! Please specify the type name as lowercase string instead!\n"+e;void 0!=console.warn?console.warn(t):console.log(t)}return v},configurable:!0})}},451);