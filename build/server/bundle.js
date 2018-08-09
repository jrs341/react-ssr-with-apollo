/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-persisted-queries");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsxFileName='/Volumes/GITCLONES/react-ssr-with-apollo/src/server.js';var _express=__webpack_require__(8);var _express2=_interopRequireDefault(_express);var _path=__webpack_require__(9);var _path2=_interopRequireDefault(_path);var _httpProxyMiddleware=__webpack_require__(10);var _httpProxyMiddleware2=_interopRequireDefault(_httpProxyMiddleware);var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _server=__webpack_require__(11);var _server2=_interopRequireDefault(_server);var _reactRouter=__webpack_require__(2);var _apolloClient=__webpack_require__(12);var _apolloClient2=_interopRequireDefault(_apolloClient);var _reactApollo=__webpack_require__(3);var _apolloCacheInmemory=__webpack_require__(13);var _apolloLink=__webpack_require__(4);var _apolloLinkHttp=__webpack_require__(5);var _nodeFetch=__webpack_require__(14);var _nodeFetch2=_interopRequireDefault(_nodeFetch);var _apolloLinkPersistedQueries=__webpack_require__(6);var _links=__webpack_require__(15);var _Html=__webpack_require__(19);var _Html2=_interopRequireDefault(_Html);var _Layout=__webpack_require__(20);var _Layout2=_interopRequireDefault(_Layout);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var PORT=3000;if(process.env.PORT){PORT=parseInt(process.env.PORT,10);}var API_HOST= true?'http://localhost:3010':'';var app=new _express2.default();var apiProxy=(0,_httpProxyMiddleware2.default)({target:API_HOST,changeOrigin:true});app.use('/graphql',apiProxy);app.use('/graphiql',apiProxy);app.use('/login',apiProxy);app.use('/logout',apiProxy);if(false){app.use('/static',_express2.default.static(_path2.default.join(process.cwd(),'build/client')));}else{app.use('/static',(0,_httpProxyMiddleware2.default)({target:'http://localhost:3020',pathRewrite:{'^/static':''}}));}var links=[_links.errorLink,(0,_links.queryOrMutationLink)({fetch:_nodeFetch2.default,uri:API_HOST+'/graphql'})];if(false){links.unshift((0,_apolloLinkPersistedQueries.createPersistedQueryLink)());}app.use(function(req,res){var client=new _apolloClient2.default({ssrMode:true,link:_apolloLink.ApolloLink.from(links),cache:new _apolloCacheInmemory.InMemoryCache()});var context={};var component=_react2.default.createElement(_reactApollo.ApolloProvider,{client:client,__source:{fileName:_jsxFileName,lineNumber:76}},_react2.default.createElement(_reactRouter.StaticRouter,{location:req.url,context:context,__source:{fileName:_jsxFileName,lineNumber:77}},_react2.default.createElement(_Layout2.default,{__source:{fileName:_jsxFileName,lineNumber:78}})));(0,_reactApollo.renderToStringWithData)(component).then(function(content){res.status(200);var html=_react2.default.createElement(_Html2.default,{content:content,client:client,__source:{fileName:_jsxFileName,lineNumber:86}});res.send('<!doctype html>\n'+_server2.default.renderToStaticMarkup(html));res.end();}).catch(function(e){console.error('RENDERING ERROR:',e);res.status(500);res.end('An error occurred. Please submit an issue to [https://github.com/apollographql/GitHunt-React] with the following stack trace:\n\n'+e.stack);});});app.listen(PORT,function(){return console.log('App Server is now running on http://localhost:'+PORT);});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("http-proxy-middleware");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.requestLink=exports.queryOrMutationLink=exports.subscriptionLink=exports.errorLink=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _apolloLink=__webpack_require__(4);var _apolloLinkHttp=__webpack_require__(5);var _apolloLinkWs=__webpack_require__(16);var _apolloLinkError=__webpack_require__(17);var _apolloUtilities=__webpack_require__(18);var _apolloLinkPersistedQueries=__webpack_require__(6);var errorLink=exports.errorLink=(0,_apolloLinkError.onError)(function(_ref){var graphQLErrors=_ref.graphQLErrors,networkError=_ref.networkError;if(graphQLErrors)graphQLErrors.map(function(_ref2){var message=_ref2.message,location=_ref2.location,path=_ref2.path;return console.log('[GraphQL error]: Message: '+message+', Location: '+location+', Path: '+path);});if(networkError)console.log('[Network error]: '+networkError);});var subscriptionLink=exports.subscriptionLink=function subscriptionLink(){var config=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return new _apolloLinkWs.WebSocketLink(_extends({uri: true?'ws://localhost:3010/subscriptions':'wss://api.githunt.com/subscriptions',options:{reconnect:true}},config));};var queryOrMutationLink=exports.queryOrMutationLink=function queryOrMutationLink(){var config=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return(0,_apolloLinkPersistedQueries.createPersistedQueryLink)({useGETForHashedQueries:true}).concat(new _apolloLinkHttp.HttpLink(_extends({},config,{credentials:'same-origin'})));};var requestLink=exports.requestLink=function requestLink(_ref3){var queryOrMutationLink=_ref3.queryOrMutationLink,subscriptionLink=_ref3.subscriptionLink;return _apolloLink.ApolloLink.split(function(_ref4){var query=_ref4.query;var _getMainDefinition=(0,_apolloUtilities.getMainDefinition)(query),kind=_getMainDefinition.kind,operation=_getMainDefinition.operation;return kind==='OperationDefinition'&&operation==='subscription';},subscriptionLink,queryOrMutationLink);};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-ws");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName="/Volumes/GITCLONES/react-ssr-with-apollo/src/routes/Html.js";var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Html=function Html(_ref){var content=_ref.content,cache=_ref.client.cache;return _react2.default.createElement("html",{lang:"en",__source:{fileName:_jsxFileName,lineNumber:6}},_react2.default.createElement("head",{__source:{fileName:_jsxFileName,lineNumber:7}},_react2.default.createElement("meta",{charSet:"utf-8",__source:{fileName:_jsxFileName,lineNumber:8}}),_react2.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1",__source:{fileName:_jsxFileName,lineNumber:9}}),_react2.default.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",integrity:"sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7",crossOrigin:"anonymous",__source:{fileName:_jsxFileName,lineNumber:10}}),_react2.default.createElement("title",{__source:{fileName:_jsxFileName,lineNumber:16}},"Calhoun's Riverside RV Retreat")),_react2.default.createElement("body",{__source:{fileName:_jsxFileName,lineNumber:18}},_react2.default.createElement("div",{id:"content",dangerouslySetInnerHTML:{__html:content},__source:{fileName:_jsxFileName,lineNumber:19}}),_react2.default.createElement("div",{id:"footer",__source:{fileName:_jsxFileName,lineNumber:20}}),_react2.default.createElement("script",{charSet:"UTF-8",dangerouslySetInnerHTML:{__html:"window.__APOLLO_STATE__="+JSON.stringify(cache.extract())+";"},__source:{fileName:_jsxFileName,lineNumber:31}}),_react2.default.createElement("script",{src:"/static/bundle.js",charSet:"UTF-8",__source:{fileName:_jsxFileName,lineNumber:37}})));};exports.default=Html;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='/Volumes/GITCLONES/react-ssr-with-apollo/src/routes/Layout.js';var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactRouter=__webpack_require__(2);var _index=__webpack_require__(21);var _index2=_interopRequireDefault(_index);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Layout=function Layout(){return _react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:23}},_react2.default.createElement('div',{className:'container',__source:{fileName:_jsxFileName,lineNumber:26}},_react2.default.createElement(_reactRouter.Switch,{__source:{fileName:_jsxFileName,lineNumber:27}},_index2.default.map(function(route){return _react2.default.createElement(_reactRouter.Route,_extends({key:'route-'+route.name},route,{__source:{fileName:_jsxFileName,lineNumber:28}}));}))));};exports.default=Layout;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _Main=__webpack_require__(22);var _Main2=_interopRequireDefault(_Main);var _NotFoundPage=__webpack_require__(29);var _NotFoundPage2=_interopRequireDefault(_NotFoundPage);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var routes=[{path:'/',name:'home',exact:true,component:_Main2.default},{path:'*',name:'notfound',component:_NotFoundPage2.default}];exports.default=routes;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/GITCLONES/react-ssr-with-apollo/src/routes/Main.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactApollo=__webpack_require__(3);var _Canvas=__webpack_require__(23);var _Canvas2=_interopRequireDefault(_Canvas);var _LineChart=__webpack_require__(24);var _LineChart2=_interopRequireDefault(_LineChart);var _AllCustomers=__webpack_require__(26);var _AllCustomers2=_interopRequireDefault(_AllCustomers);var _SearchCustomers=__webpack_require__(27);var _SearchCustomers2=_interopRequireDefault(_SearchCustomers);var _TivoliRiverInfo=__webpack_require__(28);var _TivoliRiverInfo2=_interopRequireDefault(_TivoliRiverInfo);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Main=function(_React$Component){_inherits(Main,_React$Component);function Main(){_classCallCheck(this,Main);var _this=_possibleConstructorReturn(this,(Main.__proto__||Object.getPrototypeOf(Main)).call(this));_this.state={query:'',customer:''};_this.onChange=_this.onChange.bind(_this);_this.onSelect=_this.onSelect.bind(_this);return _this;}_createClass(Main,[{key:'onChange',value:function onChange(event){this.setState({query:event.target.value});}},{key:'onSelect',value:function onSelect(event){this.setState({customer:event.target.value});console.log('customer',event.target.innerText);}},{key:'render',value:function render(){var _this2=this;return _react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:36}},_react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:37}},' Calhoun\'s Demo Dashboard '),_react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:38}},' Search Customers '),_react2.default.createElement(_reactApollo.Query,{query:_TivoliRiverInfo2.default,ssr:true,__source:{fileName:_jsxFileName,lineNumber:39}},function(_ref){var loading=_ref.loading,data=_ref.data;if(loading){return _react2.default.createElement('h3',{__source:{fileName:_jsxFileName,lineNumber:43}},' Loading ');}else if(data==undefined||data.getTivoliRiverInfo.length===0){return _react2.default.createElement('h3',{__source:{fileName:_jsxFileName,lineNumber:45}},' No Data ');}else{return _react2.default.createElement(_LineChart2.default,{data:data.getTivoliRiverInfo,__source:{fileName:_jsxFileName,lineNumber:47}});}}),_react2.default.createElement('input',{tabIndex:'1',placeholder:'Search ...',type:'text',onChange:this.onChange,style:{display:'block'},__source:{fileName:_jsxFileName,lineNumber:53}}),this.state.query!=''?_react2.default.createElement('ul',{__source:{fileName:_jsxFileName,lineNumber:61}},this.state.query!=''?_react2.default.createElement(_reactApollo.Query,{query:_SearchCustomers2.default,ssr:false,variables:{query:this.state.query},__source:{fileName:_jsxFileName,lineNumber:63}},function(_ref2){var loading=_ref2.loading,data=_ref2.data;if(loading){return _react2.default.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:68}},' loading ');}else if(data==undefined||data.searchCustomer.length===0){return _react2.default.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:70}},' Add Customer ');}else{var options=data.searchCustomer.map(function(customer,i){return _react2.default.createElement('li',{tabIndex:i+2,__source:{fileName:_jsxFileName,lineNumber:73}},' ',_react2.default.createElement('span',{key:'span'+i,onClick:_this2.onSelect,__source:{fileName:_jsxFileName,lineNumber:73}},customer.given_name),' ');});return options;}}):null):_react2.default.createElement('button',{__source:{fileName:_jsxFileName,lineNumber:84}},' Add Customer '),_react2.default.createElement(_reactApollo.Query,{query:_AllCustomers2.default,__source:{fileName:_jsxFileName,lineNumber:88}},function(_ref3){var loading=_ref3.loading,data=_ref3.data;if(loading){return _react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:91}},' Loading ');}else{return _react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:94}},_react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:95}},' All Customers '),data.allCustomers.map(function(customer){return _react2.default.createElement('p',{key:customer.email,__source:{fileName:_jsxFileName,lineNumber:97}},' ',customer.given_name+' '+customer.family_name+' : '+customer.email,' ');}));}}));}}]);return Main;}(_react2.default.Component);exports.default=Main;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/GITCLONES/react-ssr-with-apollo/src/components/Canvas.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(1);var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Canvas=function(_Component){_inherits(Canvas,_Component);function Canvas(props){_classCallCheck(this,Canvas);var _this=_possibleConstructorReturn(this,(Canvas.__proto__||Object.getPrototypeOf(Canvas)).call(this,props));_this.state={};return _this;}_createClass(Canvas,[{key:'componentDidMount',value:function componentDidMount(){var canvas=this.refs.tivoliRiverLevel;var context=canvas.getContext("2d");var width=canvas.width=800;var height=canvas.height=400;var stats=[40,65,72,120,250,87,100,42];context.translate(0,height);context.scale(1,-1);context.fillStyle='#f6f6f6';context.fillRect(0,0,width,height);var left=0;var prev_stat=stats[0];var move_left_by=100;for(stat in status){the_stat=stats[stat];context.beginPath();context.moveTo(left,prev_stat);context.lineTo(left+move_left_by,the_stat);context.lineWidth=5;context.lineCap='round';context.stroke();prev_stat=the_stat;left+=move_left_by;}}},{key:'render',value:function render(){return _react2.default.createElement('canvas',{ref:'tivoliRiverLevel',style:{border:'1px solid #000000'},__source:{fileName:_jsxFileName,lineNumber:59}});}}]);return Canvas;}(_react.Component);Canvas.propTypes={};Canvas.defaultProps={};exports.default=Canvas;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/GITCLONES/react-ssr-with-apollo/src/components/LineChart.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(1);var _propTypes2=_interopRequireDefault(_propTypes);__webpack_require__(25);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var LineChart=function(_Component){_inherits(LineChart,_Component);function LineChart(props){_classCallCheck(this,LineChart);var _this=_possibleConstructorReturn(this,(LineChart.__proto__||Object.getPrototypeOf(LineChart)).call(this,props));_this.state={};_this.makeAxis=_this.makeAxis.bind(_this);_this.makeMajorAxis=_this.makeMajorAxis.bind(_this);_this.makeMinorXAxis=_this.makeMinorXAxis.bind(_this);_this.makeMinorYAxis=_this.makeMinorYAxis.bind(_this);return _this;}_createClass(LineChart,[{key:'makeAxis',value:function makeAxis(){return _react2.default.createElement('g',{__source:{fileName:_jsxFileName,lineNumber:33}},this.makeMajorAxis(),this.makeMinorXAxis(),this.makeMinorYAxis());}},{key:'makeMajorAxis',value:function makeMajorAxis(){var _props=this.props,svgHeight=_props.svgHeight,svgWidth=_props.svgWidth;return[_react2.default.createElement('line',{key:'majorX',x1:'3',y1:svgHeight-12,x2:svgWidth,y2:svgHeight-12,style:{stroke:'black',strokeWidth:'.3'},__source:{fileName:_jsxFileName,lineNumber:45}}),_react2.default.createElement('line',{key:'majorY',x1:'5',y1:svgHeight-10,x2:'5',y2:'0',style:{stroke:'black',strokeWidth:'.3'},__source:{fileName:_jsxFileName,lineNumber:46}})];}},{key:'makeMinorXAxis',value:function makeMinorXAxis(){var svgWidth=this.props.svgWidth;var minorXAxis=[];for(var i=0;i<10;i++){if(i===1||i===2){i===1?minorXAxis.push([_react2.default.createElement('line',{key:'minorX'+i,x1:'3',y1:'3.12',x2:svgWidth,y2:'3.12',style:{stroke:'red',strokeWidth:'.2'},__source:{fileName:_jsxFileName,lineNumber:57}}),_react2.default.createElement('text',{x:'0',y:'3.6',style:{fill:'red',fontSize:'1.5'},__source:{fileName:_jsxFileName,lineNumber:58}},' 8.96 ')]):minorXAxis.push([_react2.default.createElement('line',{key:'minorX'+i,x1:'3',y1:i*3,x2:svgWidth,y2:i*3,style:{stroke:'orange',strokeWidth:'.1'},__source:{fileName:_jsxFileName,lineNumber:59}}),_react2.default.createElement('text',{x:'1',y:i*3+.4,style:{fill:'black',fontSize:'1.5'},__source:{fileName:_jsxFileName,lineNumber:60}},' ',i*3+2,' ')]);}else{minorXAxis.push([_react2.default.createElement('line',{key:'minorX'+i,x1:'3',y1:i*3,x2:svgWidth,y2:i*3,style:{stroke:'black',strokeWidth:'.1'},__source:{fileName:_jsxFileName,lineNumber:62}}),_react2.default.createElement('text',{x:'1',y:i*3+.4,style:{fill:'black',fontSize:'1.5'},__source:{fileName:_jsxFileName,lineNumber:63}},' ',(30-i*3)/3,' ')]);}}return minorXAxis;}},{key:'makeMinorYAxis',value:function makeMinorYAxis(){var _props2=this.props,data=_props2.data,svgHeight=_props2.svgHeight,svgWidth=_props2.svgWidth;var minorYAxis=[];for(var i=1;i<svgWidth/5;i++){if(i%2===0){minorYAxis.push([_react2.default.createElement('line',{key:'minorY'+i,x1:i*5+5,y1:svgHeight-10,x2:i*5+5,y2:'0',style:{stroke:'grey',strokeWidth:'.1'},__source:{fileName:_jsxFileName,lineNumber:74}}),_react2.default.createElement('text',{x:i*5+4.5,y:svgHeight-8,style:{fill:'black',fontSize:'1.5'},__source:{fileName:_jsxFileName,lineNumber:75}},' ',(30-i*3)/3,' ')]);}else{minorYAxis.push(_react2.default.createElement('line',{key:'minorY'+i,x1:i*5+5,y1:svgHeight-10,x2:i*5+5,y2:'0',style:{stroke:'grey',strokeDasharray:'1,.5',strokeWidth:'.1'},__source:{fileName:_jsxFileName,lineNumber:77}}));}}return minorYAxis;}},{key:'render',value:function render(){var _props3=this.props,data=_props3.data,svgHeight=_props3.svgHeight,svgWidth=_props3.svgWidth;var lastValue=data[data.length-1];var sixHour=Number(data[data.length-1].level)-Number(data[data.length-25].level);var twelveHour=Number(data[data.length-1].level)-Number(data[data.length-49].level);var twentyFourHour=Number(data[data.length-1].level)-Number(data[data.length-97].level);var fortyEightHour=Number(data[data.length-1].level)-Number(data[data.length-193].level);var sixHourColor=sixHour<0?'green':sixHour===0?'yellow':'red';var twelveHourColor=twelveHour<0?'green':twelveHour===0?'yellow':'red';var twentyFourHourColor=twentyFourHour<0?'green':twentyFourHour===0?'yellow':'red';var fortyEightHourColor=fortyEightHour<0?'green':fortyEightHour===0?'yellow':'red';var sixY='';var sixHourArrow=sixHour<0?sixY='11.5,8 12.5,9 13.5,8':sixHour===0?sixY='0,0':sixY='11.5,8 12.5,7 13.5,8';var twelveY='';var twelveHourArrow=twelveHour<0?twelveY='16.5,8 17.5,9 18.5,8':twelveHour===0?twelveY='0,0':twelveY='16.5,8 17.5,7 18.5,8';var twentyFourY='';var twentyFourHourArrow=twentyFourHour<0?twentyFourY='22.5,8 23.5,9 24.5,8':twentyFourHour===0?twentyFourY='0,0':twentyFourY='22.5,8 23.5,7 24.5,8';var fortyEightY=void 0;var fortyEightHourArrow=fortyEightHour<0?fortyEightY='29.5,8 30.5,9 31.5,8':fortyEightHour===0?fortyEightY='0,0':fortyEightY='29.5,8 30.5,7 31.5,8';return _react2.default.createElement('svg',{viewBox:'-1 -1 '+svgWidth+' '+svgHeight,__source:{fileName:_jsxFileName,lineNumber:138}},data.map(function(point,i){return _react2.default.createElement('circle',{key:i,style:{stroke:'#2196F3',fill:'#2196F3'},cx:i/9.03+5,cy:(10-point.level)*3,r:'.05',__source:{fileName:_jsxFileName,lineNumber:140}});}),this.makeAxis(),_react2.default.createElement('rect',{x:'6',y:'0',width:'27',height:'10',style:{strokeWidth:'.2',stroke:'orange',fill:'white'},__source:{fileName:_jsxFileName,lineNumber:143}}),_react2.default.createElement('text',{x:'7',y:'2',style:{fill:'black',fontSize:'1.5'},__source:{fileName:_jsxFileName,lineNumber:144}},' Last Observation: ',lastValue.date.slice(0,16),' '),_react2.default.createElement('text',{x:'7',y:'4',style:{fill:'black',fontSize:'1.5'},__source:{fileName:_jsxFileName,lineNumber:145}},' Last Observed Value: ',lastValue.level,'  ft'),_react2.default.createElement('text',{x:'7',y:'6',style:{fill:'black',fontSize:'1.5'},__source:{fileName:_jsxFileName,lineNumber:146}},' Trend:  6hr  '),_react2.default.createElement('text',{x:'16',y:'6',style:{fill:'black',fontSize:'1.5'},__source:{fileName:_jsxFileName,lineNumber:147}},' 12hr '),_react2.default.createElement('text',{x:'22',y:'6',style:{fill:'black',fontSize:'1.5'},__source:{fileName:_jsxFileName,lineNumber:148}},' 24hr '),_react2.default.createElement('text',{x:'29',y:'6',style:{fill:'black',fontSize:'1.5'},__source:{fileName:_jsxFileName,lineNumber:149}},' 48hr '),_react2.default.createElement('line',{x1:'12.5',y1:'7',x2:'12.5',y2:'9',style:{stroke:''+sixHourColor,strokeWidth:'.2'},__source:{fileName:_jsxFileName,lineNumber:150}}),_react2.default.createElement('line',{x1:'17.5',y1:'7',x2:'17.5',y2:'9',style:{stroke:''+twelveHourColor,strokeWidth:'.2'},__source:{fileName:_jsxFileName,lineNumber:151}}),_react2.default.createElement('line',{x1:'23.5',y1:'7',x2:'23.5',y2:'9',style:{stroke:''+twentyFourHourColor,strokeWidth:'.2'},__source:{fileName:_jsxFileName,lineNumber:152}}),_react2.default.createElement('line',{x1:'30.5',y1:'7',x2:'30.5',y2:'9',style:{stroke:''+fortyEightHourColor,strokeWidth:'.2'},__source:{fileName:_jsxFileName,lineNumber:153}}),_react2.default.createElement('polyline',{points:sixY,style:{stroke:''+sixHourColor,strokeWidth:'.2',fill:'none'},__source:{fileName:_jsxFileName,lineNumber:154}}),_react2.default.createElement('polyline',{points:twelveY,style:{stroke:''+twelveHourColor,strokeWidth:'.2',fill:'none'},__source:{fileName:_jsxFileName,lineNumber:155}}),_react2.default.createElement('polyline',{points:twentyFourY,style:{stroke:''+twentyFourHourColor,strokeWidth:'.2',fill:'none'},__source:{fileName:_jsxFileName,lineNumber:156}}),_react2.default.createElement('polyline',{points:fortyEightY,style:{stroke:''+fortyEightHourColor,strokeWidth:'.2',fill:'none'},__source:{fileName:_jsxFileName,lineNumber:157}}));}}]);return LineChart;}(_react.Component);LineChart.propTypes={};LineChart.defaultProps={data:[],color:'#2196F3',svgHeight:42,svgWidth:77};exports.default=LineChart;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

/*.linechart_path {
  stroke-width: 3; // Thick Line
  fill: none;      // No Fill
}
.linechart_axis {
  stroke: #bdc3c7; // Grey Axis Color
}*/

/***/ }),
/* 26 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allCustomers"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"allCustomers"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"given_name"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"family_name"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"email"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":73}};
    doc.loc.source = {"body":"query allCustomers {\n\tallCustomers {\n\tgiven_name\n\tfamily_name\n\temail\n\t}\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set(opRefs);
      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["allCustomers"] = oneQuery(doc, "allCustomers");
        


/***/ }),
/* 27 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchCustomers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"searchCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"given_name"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"family_name"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"email"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":109}};
    doc.loc.source = {"body":"query searchCustomers($query: String) {\n\tsearchCustomer(query: $query) {\n\tgiven_name\n\tfamily_name\n\temail\n\t}\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set(opRefs);
      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["searchCustomers"] = oneQuery(doc, "searchCustomers");
        


/***/ }),
/* 28 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"tivoliRiverInfo"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"getTivoliRiverInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"date"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"level"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":63}};
    doc.loc.source = {"body":"query tivoliRiverInfo {\n\tgetTivoliRiverInfo {\n\tdate\n\tlevel\n\t}\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set(opRefs);
      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["tivoliRiverInfo"] = oneQuery(doc, "tivoliRiverInfo");
        


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/GITCLONES/react-ssr-with-apollo/src/routes/NotFoundPage.js';var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _Status=__webpack_require__(30);var _Status2=_interopRequireDefault(_Status);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var NotFoundPage=function NotFoundPage(){return _react2.default.createElement(_Status2.default,{code:404,__source:{fileName:_jsxFileName,lineNumber:5}},_react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:6}},'Sorry, the requested page could not be found.'));};exports.default=NotFoundPage;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/GITCLONES/react-ssr-with-apollo/src/routes/Status.js';var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(1);var _propTypes2=_interopRequireDefault(_propTypes);var _reactRouterDom=__webpack_require__(31);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Status=function Status(_ref){var code=_ref.code,children=_ref.children;return _react2.default.createElement(_reactRouterDom.Route,{render:function render(_ref2){var staticContext=_ref2.staticContext;if(staticContext){staticContext.status=code;}return children;},__source:{fileName:_jsxFileName,lineNumber:6}});};Status.defaultProps={code:200};Status.propTypes={code:_propTypes2.default.number,children:_propTypes2.default.element.isRequired};exports.default=Status;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map