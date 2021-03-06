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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _Spinner=__webpack_require__(30);Object.defineProperty(exports,'Spinner',{enumerable:true,get:function get(){return _Spinner.Spinner;}});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _Spinner=__webpack_require__(33);Object.defineProperty(exports,'Spinner',{enumerable:true,get:function get(){return _Spinner.Spinner;}});

/***/ }),
/* 5 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"availability"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"cabinAvailability"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"meter"},"arguments":[],"directives":[],"selectionSet":null}]}},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"rvAvailability"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"meter"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":91}};
    doc.loc.source = {"body":"query availability {\n\tcabinAvailability {\n\t_id\n\tmeter\n\t}\n\trvAvailability {\n\t_id\n\tmeter\n\t}\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["availability"] = oneQuery(doc, "availability");
        


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-persisted-queries");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/routes/Main.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactApollo=__webpack_require__(1);var _AllCustomers=__webpack_require__(29);var _AllCustomers2=_interopRequireDefault(_AllCustomers);var _Availability=__webpack_require__(32);var _Availability2=_interopRequireDefault(_Availability);var _CheckAvailability=__webpack_require__(34);var _CheckAvailability2=_interopRequireDefault(_CheckAvailability);var _CurrentCustomers=__webpack_require__(37);var _CurrentCustomers2=_interopRequireDefault(_CurrentCustomers);var _CustomerInfoForm=__webpack_require__(39);var _CustomerInfoForm2=_interopRequireDefault(_CustomerInfoForm);var _TivoliRiverLevel=__webpack_require__(49);var _TivoliRiverLevel2=_interopRequireDefault(_TivoliRiverLevel);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Main=function(_React$Component){_inherits(Main,_React$Component);function Main(){_classCallCheck(this,Main);return _possibleConstructorReturn(this,(Main.__proto__||Object.getPrototypeOf(Main)).apply(this,arguments));}_createClass(Main,[{key:'render',value:function render(props){return _react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:14}},_react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:15}},' Calhoun\'s Demo Dashboard '),_react2.default.createElement(_CheckAvailability2.default,{__source:{fileName:_jsxFileName,lineNumber:17}}),_react2.default.createElement(_CustomerInfoForm2.default,{__source:{fileName:_jsxFileName,lineNumber:19}}),_react2.default.createElement(_CurrentCustomers2.default,{__source:{fileName:_jsxFileName,lineNumber:20}}));}}]);return Main;}(_react2.default.Component);exports.default=(0,_reactApollo.withApollo)(Main);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/CustomerInfoForm/DateRangeField.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var DateRangeField=function(_Component){_inherits(DateRangeField,_Component);function DateRangeField(){_classCallCheck(this,DateRangeField);var _this=_possibleConstructorReturn(this,(DateRangeField.__proto__||Object.getPrototypeOf(DateRangeField)).call(this));_this.state={checkin:'',checkout:''};_this.getDaysInMonth=_this.getDaysInMonth.bind(_this);_this.isLeapYear=_this.isLeapYear.bind(_this);_this.setCheckoutDate=_this.setCheckoutDate.bind(_this);_this.setDate=_this.setDate.bind(_this);return _this;}_createClass(DateRangeField,[{key:'getDaysInMonth',value:function getDaysInMonth(year,month){return[31,this.isLeapYear(year)?29:28,31,30,31,30,31,31,30,31,30,31][month];}},{key:'isLeapYear',value:function isLeapYear(year){console.log('year',year);return year%4===0&&year%100!==0||year%400===0;}},{key:'setCheckoutDate',value:function setCheckoutDate(date,rate){var checkoutDate=date.getUTCDate();if(rate=='Monthly'){date.setDate(1);date.setMonth(date.getMonth()+1);date.setDate(Math.min(checkoutDate,this.getDaysInMonth(date.getFullYear(),date.getMonth())));console.log('checkoutDate monthly',date);return date;}else if(rate=='Weekly'){date.setDate(checkoutDate+7);console.log('wwekly',date);}else{date.setDate(checkoutDate+1);console.log('daily',date);}return date;}},{key:'setDate',value:function setDate(event){if(event.target.name=='checkout'&&event.target.value==''){this.props.setParentState('checkout','unknown');}else{if(event.target.name=='checkin'&&this.props.rate!='Daily'||this.props.rate!=''){var checkinDate=new Date(event.target.value);console.log('checkinDate',checkinDate);this.setCheckoutDate(checkinDate,this.props.rate);}this.props.setParentState(event.target.name,event.target.value);}}},{key:'render',value:function render(){return _react2.default.createElement('fieldset',{form:'checkin',name:'dateRange',__source:{fileName:_jsxFileName,lineNumber:79}},_react2.default.createElement('legend',{__source:{fileName:_jsxFileName,lineNumber:80}},' Date Range '),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:81}},'Checkin'),_react2.default.createElement('input',{name:'checkin',tabIndex:'4',type:'date',onChange:this.setDate,required:true,__source:{fileName:_jsxFileName,lineNumber:82}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:89}},'Checkout'),this.props.rate=='Daily'||this.props.rate==''?_react2.default.createElement('input',{name:'checkout',tabIndex:'4',type:'date',onChange:this.setDate,required:true,__source:{fileName:_jsxFileName,lineNumber:91}}):_react2.default.createElement('input',{name:'checkout',tabIndex:'4',type:'date',onChange:this.setDate,value:this.state.checkout,required:true,__source:{fileName:_jsxFileName,lineNumber:98}}));}}]);return DateRangeField;}(_react.Component);exports.default=DateRangeField;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/CustomerInfoForm/RateField.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var rates=['Daily','Weekly','Monthly'];var RateField=function(_Component){_inherits(RateField,_Component);function RateField(){_classCallCheck(this,RateField);var _this=_possibleConstructorReturn(this,(RateField.__proto__||Object.getPrototypeOf(RateField)).call(this));_this.state={rate:''};_this.renderSelected=_this.renderSelected.bind(_this);_this.renderUnselected=_this.renderUnselected.bind(_this);_this.setRate=_this.setRate.bind(_this);return _this;}_createClass(RateField,[{key:'renderSelected',value:function renderSelected(){var _this2=this;var selected=rates.map(function(rate){if(_this2.state.rate==rate){return[_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:23}},' ',rate,' '),_react2.default.createElement('input',{key:rate,name:rate,type:'checkbox',onClick:_this2.setRate,checked:true,__source:{fileName:_jsxFileName,lineNumber:24}})];}else{return[_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:34}},' ',rate,' '),_react2.default.createElement('input',{key:rate,name:rate,type:'checkbox',disabled:true,__source:{fileName:_jsxFileName,lineNumber:35}})];}});return selected;}},{key:'renderUnselected',value:function renderUnselected(){var _this3=this;var unselected=rates.map(function(rate){return[_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:51}},' ',rate,' '),_react2.default.createElement('input',{key:rate,name:rate,type:'checkbox',onClick:_this3.setRate,__source:{fileName:_jsxFileName,lineNumber:52}})];});return unselected;}},{key:'setRate',value:function setRate(event){if(this.state.rate==event.target.name){this.setState({rate:''});this.props.setParentState('rate','');}else{this.setState({rate:event.target.name});this.props.setParentState('rate',event.target.name);}}},{key:'render',value:function render(){return _react2.default.createElement('fieldset',{key:'rateSet',form:'checkin',name:'rateSet',__source:{fileName:_jsxFileName,lineNumber:75}},_react2.default.createElement('legend',{__source:{fileName:_jsxFileName,lineNumber:76}},' Rental Rate '),this.state.rate==''?this.renderUnselected():this.renderSelected());}}]);return RateField;}(_react.Component);exports.default=RateField;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/CustomerInfoForm/RentalTypeField.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var rentals=['RV','Cabin'];var RentalTypeField=function(_Component){_inherits(RentalTypeField,_Component);function RentalTypeField(){_classCallCheck(this,RentalTypeField);var _this=_possibleConstructorReturn(this,(RentalTypeField.__proto__||Object.getPrototypeOf(RentalTypeField)).call(this));_this.state={type:''};_this.setType=_this.setType.bind(_this);_this.renderSelected=_this.renderSelected.bind(_this);_this.renderUnselected=_this.renderUnselected.bind(_this);return _this;}_createClass(RentalTypeField,[{key:'setType',value:function setType(event){if(this.state.type==event.target.name){this.setState({type:''});this.props.setParentState('type','');}else{this.setState({type:event.target.name});this.props.setParentState('type',event.target.name);}}},{key:'renderSelected',value:function renderSelected(){var _this2=this;var selected=rentals.map(function(type){if(_this2.state.type==type){return[_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:33}},' ',type,' '),_react2.default.createElement('input',{key:type,name:type,type:'checkbox',onClick:_this2.setType,checked:true,__source:{fileName:_jsxFileName,lineNumber:34}})];}else{return[_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:44}},' ',type,' '),_react2.default.createElement('input',{key:type,name:type,type:'checkbox',disabled:true,__source:{fileName:_jsxFileName,lineNumber:45}})];}});return selected;}},{key:'renderUnselected',value:function renderUnselected(){var _this3=this;var unselected=rentals.map(function(type){return[_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:61}},' ',type,' '),_react2.default.createElement('input',{key:type,name:type,type:'checkbox',onClick:_this3.setType,__source:{fileName:_jsxFileName,lineNumber:62}})];});return unselected;}},{key:'render',value:function render(){return _react2.default.createElement('fieldset',{form:'checkin',name:'rateSet',__source:{fileName:_jsxFileName,lineNumber:75}},_react2.default.createElement('legend',{__source:{fileName:_jsxFileName,lineNumber:76}},' Rental Type '),this.state.type==''?this.renderUnselected():this.renderSelected());}}]);return RentalTypeField;}(_react.Component);exports.default=RentalTypeField;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/server.js';var _express=__webpack_require__(15);var _express2=_interopRequireDefault(_express);var _path=__webpack_require__(16);var _path2=_interopRequireDefault(_path);var _httpProxyMiddleware=__webpack_require__(17);var _httpProxyMiddleware2=_interopRequireDefault(_httpProxyMiddleware);var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _server=__webpack_require__(18);var _server2=_interopRequireDefault(_server);var _reactRouter=__webpack_require__(6);var _apolloClient=__webpack_require__(19);var _apolloClient2=_interopRequireDefault(_apolloClient);var _reactApollo=__webpack_require__(1);var _apolloCacheInmemory=__webpack_require__(20);var _apolloLink=__webpack_require__(7);var _apolloLinkHttp=__webpack_require__(8);var _nodeFetch=__webpack_require__(21);var _nodeFetch2=_interopRequireDefault(_nodeFetch);var _apolloLinkPersistedQueries=__webpack_require__(9);var _links=__webpack_require__(22);var _Html=__webpack_require__(26);var _Html2=_interopRequireDefault(_Html);var _Layout=__webpack_require__(27);var _Layout2=_interopRequireDefault(_Layout);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var PORT=3000;if(process.env.PORT){PORT=parseInt(process.env.PORT,10);}var API_HOST= true?'http://localhost:3010':'';var app=new _express2.default();var apiProxy=(0,_httpProxyMiddleware2.default)({target:API_HOST,changeOrigin:true});app.use('/graphql',apiProxy);app.use('/graphiql',apiProxy);app.use('/login',apiProxy);app.use('/logout',apiProxy);if(false){app.use('/static',_express2.default.static(_path2.default.join(process.cwd(),'build/client')));}else{app.use('/static',(0,_httpProxyMiddleware2.default)({target:'http://localhost:3020',pathRewrite:{'^/static':''}}));}var links=[_links.errorLink,(0,_links.queryOrMutationLink)({fetch:_nodeFetch2.default,uri:API_HOST+'/graphql'})];if(false){links.unshift((0,_apolloLinkPersistedQueries.createPersistedQueryLink)());}app.use(function(req,res){var client=new _apolloClient2.default({ssrMode:true,link:_apolloLink.ApolloLink.from(links),cache:new _apolloCacheInmemory.InMemoryCache()});var context={};var component=_react2.default.createElement(_reactApollo.ApolloProvider,{client:client,__source:{fileName:_jsxFileName,lineNumber:78}},_react2.default.createElement(_reactRouter.StaticRouter,{location:req.url,context:context,__source:{fileName:_jsxFileName,lineNumber:79}},_react2.default.createElement(_Layout2.default,{__source:{fileName:_jsxFileName,lineNumber:80}})));(0,_reactApollo.renderToStringWithData)(component).then(function(content){res.status(200);var html=_react2.default.createElement(_Html2.default,{content:content,client:client,__source:{fileName:_jsxFileName,lineNumber:88}});res.send('<!doctype html>\n'+_server2.default.renderToStaticMarkup(html));res.end();}).catch(function(e){console.error('RENDERING ERROR:',e);res.status(500);res.end('An error occurred. Please submit an issue to [https://github.com/apollographql/GitHunt-React] with the following stack trace:\n\n'+e.stack);});});app.listen(PORT,function(){return console.log('App Server is now running on http://localhost:'+PORT);});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("http-proxy-middleware");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.requestLink=exports.queryOrMutationLink=exports.subscriptionLink=exports.errorLink=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _apolloLink=__webpack_require__(7);var _apolloLinkHttp=__webpack_require__(8);var _apolloLinkWs=__webpack_require__(23);var _apolloLinkError=__webpack_require__(24);var _apolloUtilities=__webpack_require__(25);var _apolloLinkPersistedQueries=__webpack_require__(9);var errorLink=exports.errorLink=(0,_apolloLinkError.onError)(function(_ref){var graphQLErrors=_ref.graphQLErrors,networkError=_ref.networkError;if(graphQLErrors)graphQLErrors.map(function(_ref2){var message=_ref2.message,location=_ref2.location,path=_ref2.path;return console.log('[GraphQL error]: Message: '+message+', Location: '+location+', Path: '+path);});if(networkError)console.log('[Network error]: '+networkError);});var subscriptionLink=exports.subscriptionLink=function subscriptionLink(){var config=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return new _apolloLinkWs.WebSocketLink(_extends({uri: true?'ws://localhost:3010/subscriptions':'wss://api.githunt.com/subscriptions',options:{reconnect:true}},config));};var queryOrMutationLink=exports.queryOrMutationLink=function queryOrMutationLink(){var config=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return(0,_apolloLinkPersistedQueries.createPersistedQueryLink)({useGETForHashedQueries:true}).concat(new _apolloLinkHttp.HttpLink(_extends({},config,{credentials:'same-origin'})));};var requestLink=exports.requestLink=function requestLink(_ref3){var queryOrMutationLink=_ref3.queryOrMutationLink,subscriptionLink=_ref3.subscriptionLink;return _apolloLink.ApolloLink.split(function(_ref4){var query=_ref4.query;var _getMainDefinition=(0,_apolloUtilities.getMainDefinition)(query),kind=_getMainDefinition.kind,operation=_getMainDefinition.operation;return kind==='OperationDefinition'&&operation==='subscription';},subscriptionLink,queryOrMutationLink);};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-ws");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName="/Volumes/PATRIOT/react-ssr-with-apollo/src/routes/Html.js";var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Html=function Html(_ref){var content=_ref.content,cache=_ref.client.cache;return _react2.default.createElement("html",{lang:"en",__source:{fileName:_jsxFileName,lineNumber:6}},_react2.default.createElement("head",{__source:{fileName:_jsxFileName,lineNumber:7}},_react2.default.createElement("meta",{charSet:"utf-8",__source:{fileName:_jsxFileName,lineNumber:8}}),_react2.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1",__source:{fileName:_jsxFileName,lineNumber:9}}),_react2.default.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",integrity:"sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7",crossOrigin:"anonymous",__source:{fileName:_jsxFileName,lineNumber:10}}),_react2.default.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet",__source:{fileName:_jsxFileName,lineNumber:16}}),_react2.default.createElement("link",{href:"https://fonts.googleapis.com/css?family=Akronim",rel:"stylesheet",__source:{fileName:_jsxFileName,lineNumber:17}}),_react2.default.createElement("link",{href:"https://fonts.googleapis.com/css?family=Amita",rel:"stylesheet",__source:{fileName:_jsxFileName,lineNumber:18}}),_react2.default.createElement("link",{href:"https://fonts.googleapis.com/css?family=Averia Gruesa Libre",rel:"stylesheet",__source:{fileName:_jsxFileName,lineNumber:19}}),_react2.default.createElement("link",{href:"https://fonts.googleapis.com/css?family=Alex Brush",rel:"stylesheet",__source:{fileName:_jsxFileName,lineNumber:20}}),_react2.default.createElement("link",{rel:"icon",href:"/static/favicon.ico",__source:{fileName:_jsxFileName,lineNumber:21}}),_react2.default.createElement("title",{__source:{fileName:_jsxFileName,lineNumber:22}},"Calhoun's Riverside RV Retreat")),_react2.default.createElement("body",{__source:{fileName:_jsxFileName,lineNumber:24}},_react2.default.createElement("div",{id:"content",dangerouslySetInnerHTML:{__html:content},__source:{fileName:_jsxFileName,lineNumber:30}}),_react2.default.createElement("div",{id:"footer",__source:{fileName:_jsxFileName,lineNumber:32}}),_react2.default.createElement("script",{charSet:"UTF-8",dangerouslySetInnerHTML:{__html:"window.__APOLLO_STATE__="+JSON.stringify(cache.extract())+";"},__source:{fileName:_jsxFileName,lineNumber:34}}),_react2.default.createElement("script",{src:"/static/bundle.js",charSet:"UTF-8",__source:{fileName:_jsxFileName,lineNumber:40}})));};exports.default=Html;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/routes/Layout.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactRouter=__webpack_require__(6);var _reactApollo=__webpack_require__(1);var _index=__webpack_require__(28);var _index2=_interopRequireDefault(_index);var _Main=__webpack_require__(10);var _Main2=_interopRequireDefault(_Main);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Layout=function(_React$Component){_inherits(Layout,_React$Component);function Layout(){_classCallCheck(this,Layout);return _possibleConstructorReturn(this,(Layout.__proto__||Object.getPrototypeOf(Layout)).apply(this,arguments));}_createClass(Layout,[{key:'render',value:function render(props){var _this2=this;return _react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:27}},_react2.default.createElement('div',{className:'container',__source:{fileName:_jsxFileName,lineNumber:29}},_react2.default.createElement(_reactRouter.Switch,{__source:{fileName:_jsxFileName,lineNumber:30}},_react2.default.createElement(_reactRouter.Route,{path:'/',render:function render(props){return _react2.default.createElement(_Main2.default,_extends({client:_this2.props.client},props,{__source:{fileName:_jsxFileName,lineNumber:32}}));},__source:{fileName:_jsxFileName,lineNumber:31}}))));}}]);return Layout;}(_react2.default.Component);exports.default=(0,_reactApollo.withApollo)(Layout);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _Main=__webpack_require__(10);var _Main2=_interopRequireDefault(_Main);var _NotFoundPage=__webpack_require__(56);var _NotFoundPage2=_interopRequireDefault(_NotFoundPage);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var routes=[{path:'/',name:'home',exact:true,component:_Main2.default},{path:'*',name:'notfound',component:_NotFoundPage2.default}];exports.default=routes;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/AllCustomers/AllCustomers.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactApollo=__webpack_require__(1);var _Spinner=__webpack_require__(2);var _Spinner2=_interopRequireDefault(_Spinner);var _AllCustomers=__webpack_require__(31);var _AllCustomers2=_interopRequireDefault(_AllCustomers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var AllCustomers=function(_React$Component){_inherits(AllCustomers,_React$Component);function AllCustomers(){_classCallCheck(this,AllCustomers);return _possibleConstructorReturn(this,(AllCustomers.__proto__||Object.getPrototypeOf(AllCustomers)).apply(this,arguments));}_createClass(AllCustomers,[{key:'render',value:function render(){return _react2.default.createElement(_reactApollo.Query,{query:_AllCustomers2.default,__source:{fileName:_jsxFileName,lineNumber:10}},function(_ref){var loading=_ref.loading,data=_ref.data;if(loading){return _react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:13}},' ',_react2.default.createElement(_Spinner2.default,{__source:{fileName:_jsxFileName,lineNumber:13}}),' ');}else{return _react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:16}},_react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:17}},' All Customers '),data.allCustomers.map(function(customer){return _react2.default.createElement('p',{key:customer.email,__source:{fileName:_jsxFileName,lineNumber:19}},' ',customer.given_name+' '+customer.family_name+' : '+customer.email,' ');}));}});}}]);return AllCustomers;}(_react2.default.Component);exports.default=AllCustomers;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.Spinner=undefined;var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/Spinner/Spinner.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Spinner=function(_Component){_inherits(Spinner,_Component);function Spinner(){_classCallCheck(this,Spinner);return _possibleConstructorReturn(this,(Spinner.__proto__||Object.getPrototypeOf(Spinner)).apply(this,arguments));}_createClass(Spinner,[{key:'render',value:function render(){return _react2.default.createElement('div',{className:'ura-spinner-container',__source:{fileName:_jsxFileName,lineNumber:6}},_react2.default.createElement('div',{className:'ura-spinner',__source:{fileName:_jsxFileName,lineNumber:7}},_react2.default.createElement('div',{className:'ura-rect1',__source:{fileName:_jsxFileName,lineNumber:8}}),_react2.default.createElement('div',{className:'ura-rect2',__source:{fileName:_jsxFileName,lineNumber:9}}),_react2.default.createElement('div',{className:'ura-rect3',__source:{fileName:_jsxFileName,lineNumber:10}}),_react2.default.createElement('div',{className:'ura-rect4',__source:{fileName:_jsxFileName,lineNumber:11}}),_react2.default.createElement('div',{className:'ura-rect5',__source:{fileName:_jsxFileName,lineNumber:12}})));}}]);return Spinner;}(_react.Component);exports.Spinner=Spinner;

/***/ }),
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/Availability/Availability.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactApollo=__webpack_require__(1);var _Spinner=__webpack_require__(4);var _Availability=__webpack_require__(5);var _Availability2=_interopRequireDefault(_Availability);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Availability=function(_Component){_inherits(Availability,_Component);function Availability(){_classCallCheck(this,Availability);return _possibleConstructorReturn(this,(Availability.__proto__||Object.getPrototypeOf(Availability)).apply(this,arguments));}_createClass(Availability,[{key:'render',value:function render(){console.log('options',this.props.options);var _props=this.props,type=_props.type,rate=_props.rate,checkin=_props.checkin;return _react2.default.createElement(_reactApollo.Query,{query:_Availability2.default,__source:{fileName:_jsxFileName,lineNumber:12}},function(_ref){var loading=_ref.loading,data=_ref.data;if(loading){return _react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:15}},' ',_react2.default.createElement(_Spinner.Spinner,{__source:{fileName:_jsxFileName,lineNumber:15}}),' ');}else{return _react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:18}},_react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:19}},' Availability '),_react2.default.createElement('h3',{__source:{fileName:_jsxFileName,lineNumber:20}},' Cabins '),data.cabinAvailability.map(function(meter){return[_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:23}},' ',meter.meter,' '),_react2.default.createElement('input',{type:'checkbox',__source:{fileName:_jsxFileName,lineNumber:24}})];}),_react2.default.createElement('h3',{__source:{fileName:_jsxFileName,lineNumber:29}},' RV Spaces '),data.rvAvailability.map(function(meter){return[_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:32}},' ',meter.meter,' '),_react2.default.createElement('input',{type:'checkbox',__source:{fileName:_jsxFileName,lineNumber:33}})];}));}});}}]);return Availability;}(_react.Component);exports.default=Availability;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.Spinner=undefined;var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/Components/Spinner/Spinner.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Spinner=function(_Component){_inherits(Spinner,_Component);function Spinner(){_classCallCheck(this,Spinner);return _possibleConstructorReturn(this,(Spinner.__proto__||Object.getPrototypeOf(Spinner)).apply(this,arguments));}_createClass(Spinner,[{key:'render',value:function render(){return _react2.default.createElement('div',{className:'ura-spinner-container',__source:{fileName:_jsxFileName,lineNumber:6}},_react2.default.createElement('div',{className:'ura-spinner',__source:{fileName:_jsxFileName,lineNumber:7}},_react2.default.createElement('div',{className:'ura-rect1',__source:{fileName:_jsxFileName,lineNumber:8}}),_react2.default.createElement('div',{className:'ura-rect2',__source:{fileName:_jsxFileName,lineNumber:9}}),_react2.default.createElement('div',{className:'ura-rect3',__source:{fileName:_jsxFileName,lineNumber:10}}),_react2.default.createElement('div',{className:'ura-rect4',__source:{fileName:_jsxFileName,lineNumber:11}}),_react2.default.createElement('div',{className:'ura-rect5',__source:{fileName:_jsxFileName,lineNumber:12}})));}}]);return Spinner;}(_react.Component);exports.Spinner=Spinner;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/CheckAvailability/CheckAvailability.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _CabinAvailability=__webpack_require__(35);var _CabinAvailability2=_interopRequireDefault(_CabinAvailability);var _DateRangeField=__webpack_require__(11);var _DateRangeField2=_interopRequireDefault(_DateRangeField);var _RateField=__webpack_require__(12);var _RateField2=_interopRequireDefault(_RateField);var _RentalTypeField=__webpack_require__(13);var _RentalTypeField2=_interopRequireDefault(_RentalTypeField);var _RVAvailability=__webpack_require__(36);var _RVAvailability2=_interopRequireDefault(_RVAvailability);var _Spinner=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var CheckAvailability=function(_Component){_inherits(CheckAvailability,_Component);function CheckAvailability(props){_classCallCheck(this,CheckAvailability);var _this=_possibleConstructorReturn(this,(CheckAvailability.__proto__||Object.getPrototypeOf(CheckAvailability)).call(this,props));_this.state={type:'',rate:'',checkin:'',checkout:'',timeout:true};_this.noResponse=_this.noResponse.bind(_this);_this.setParentState=_this.setParentState.bind(_this);return _this;}_createClass(CheckAvailability,[{key:'componentWillUnmount',value:function componentWillUnmount(){clearTimeout(this.timeout);}},{key:'noResponse',value:function noResponse(type){var _this2=this;var component=void 0;this.state.timeout?component=_react2.default.createElement(_Spinner.Spinner,{__source:{fileName:_jsxFileName,lineNumber:33}}):component=_react2.default.createElement('h2',{__source:{fileName:_jsxFileName,lineNumber:34}},' Sorry there are no ',type,'s available ');this.state.timeout?this.timeout=setTimeout(function(){_this2.setState({timeout:false});},1000):clearTimeout(this.timeout);return component;}},{key:'setParentState',value:function setParentState(name,data){this.setState(_defineProperty({},name,data));}},{key:'render',value:function render(){var _state=this.state,type=_state.type,rate=_state.rate,checkin=_state.checkin,checkout=_state.checkout;var date=new Date(checkin);var dateUTC=Date.UTC(date.getUTCFullYear(),date.getUTCMonth(),date.getUTCDate());var today=new Date();var todayUTC=Date.UTC(today.getUTCFullYear(),today.getUTCMonth(),today.getUTCDate());var tenDays=24*60*60*1000*9;var sevenDays=24*60*60*1000*6;var cabinDiff=(dateUTC-todayUTC)/tenDays;var RVdiff=(dateUTC-todayUTC)/sevenDays;return _react2.default.createElement('fieldset',{form:'checkin',name:'checkAvailable',__source:{fileName:_jsxFileName,lineNumber:60}},_react2.default.createElement('legend',{__source:{fileName:_jsxFileName,lineNumber:61}},' Check Availability '),_react2.default.createElement(_RentalTypeField2.default,{setParentState:this.setParentState,__source:{fileName:_jsxFileName,lineNumber:62}}),_react2.default.createElement(_RateField2.default,{setParentState:this.setParentState,__source:{fileName:_jsxFileName,lineNumber:63}}),_react2.default.createElement(_DateRangeField2.default,{setParentState:this.setParentState,rate:this.state.rate,__source:{fileName:_jsxFileName,lineNumber:64}}),type=='Cabin'&&checkin!=''&&checkout!=''&&rate!=''?type=='Cabin'&&rate=='Monthly'&&cabinDiff>=-1.5&&cabinDiff<=1?_react2.default.createElement(_CabinAvailability2.default,{__source:{fileName:_jsxFileName,lineNumber:67}}):this.noResponse(type):null,type=='RV'&&checkin!=''&&checkout!=''&&rate!=''?RVdiff>=-1.5&&RVdiff<=1?_react2.default.createElement(_RVAvailability2.default,{__source:{fileName:_jsxFileName,lineNumber:73}}):this.noResponse(type):null);}}]);return CheckAvailability;}(_react.Component);exports.default=CheckAvailability;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/Availability/CabinAvailability.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactApollo=__webpack_require__(1);var _Spinner=__webpack_require__(4);var _Availability=__webpack_require__(5);var _Availability2=_interopRequireDefault(_Availability);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var CabinAvailability=function(_Component){_inherits(CabinAvailability,_Component);function CabinAvailability(){_classCallCheck(this,CabinAvailability);return _possibleConstructorReturn(this,(CabinAvailability.__proto__||Object.getPrototypeOf(CabinAvailability)).apply(this,arguments));}_createClass(CabinAvailability,[{key:'render',value:function render(){return _react2.default.createElement(_reactApollo.Query,{query:_Availability2.default,__source:{fileName:_jsxFileName,lineNumber:9}},function(_ref){var loading=_ref.loading,data=_ref.data;if(loading){return _react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:12}},' ',_react2.default.createElement(_Spinner.Spinner,{__source:{fileName:_jsxFileName,lineNumber:12}}),' ');}else{return _react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:15}},_react2.default.createElement('h3',{__source:{fileName:_jsxFileName,lineNumber:16}},' Available Cabins '),data.cabinAvailability.map(function(meter){return[_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:19}},' ',meter.meter,' '),_react2.default.createElement('input',{type:'checkbox',__source:{fileName:_jsxFileName,lineNumber:20}})];}));}});}}]);return CabinAvailability;}(_react.Component);exports.default=CabinAvailability;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/Availability/RVAvailability.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactApollo=__webpack_require__(1);var _Spinner=__webpack_require__(4);var _Availability=__webpack_require__(5);var _Availability2=_interopRequireDefault(_Availability);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var RVAvailability=function(_Component){_inherits(RVAvailability,_Component);function RVAvailability(){_classCallCheck(this,RVAvailability);return _possibleConstructorReturn(this,(RVAvailability.__proto__||Object.getPrototypeOf(RVAvailability)).apply(this,arguments));}_createClass(RVAvailability,[{key:'render',value:function render(){return _react2.default.createElement(_reactApollo.Query,{query:_Availability2.default,__source:{fileName:_jsxFileName,lineNumber:9}},function(_ref){var loading=_ref.loading,data=_ref.data;if(loading){return _react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:12}},' ',_react2.default.createElement(_Spinner.Spinner,{__source:{fileName:_jsxFileName,lineNumber:12}}),' ');}else{return _react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:15}},_react2.default.createElement('h3',{__source:{fileName:_jsxFileName,lineNumber:16}},' RV Spaces '),data.rvAvailability.map(function(meter){return[_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:19}},' ',meter.meter,' '),_react2.default.createElement('input',{type:'checkbox',__source:{fileName:_jsxFileName,lineNumber:20}})];}));}});}}]);return RVAvailability;}(_react.Component);exports.default=RVAvailability;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/CurrentCustomers/CurrentCustomers.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactApollo=__webpack_require__(1);var _Spinner=__webpack_require__(2);var _Spinner2=_interopRequireDefault(_Spinner);var _CurrentCustomers=__webpack_require__(38);var _CurrentCustomers2=_interopRequireDefault(_CurrentCustomers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var CurrentCustomers=function(_React$Component){_inherits(CurrentCustomers,_React$Component);function CurrentCustomers(){_classCallCheck(this,CurrentCustomers);var _this=_possibleConstructorReturn(this,(CurrentCustomers.__proto__||Object.getPrototypeOf(CurrentCustomers)).call(this));_this.state={customer:''};_this.dropDown=_this.dropDown.bind(_this);_this.onChange=_this.onChange.bind(_this);return _this;}_createClass(CurrentCustomers,[{key:'dropDown',value:function dropDown(event){if(this.state.customer==event.target.id){this.setState({customer:''});}else{this.setState({customer:event.target.id});}}},{key:'onChange',value:function onChange(event){console.log('props',this.props);this.setState({query:event.target.value});}},{key:'render',value:function render(){var _this2=this;return _react2.default.createElement(_reactApollo.Query,{query:_CurrentCustomers2.default,__source:{fileName:_jsxFileName,lineNumber:39}},function(_ref){var loading=_ref.loading,data=_ref.data;if(loading){return _react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:42}},' ',_react2.default.createElement(_Spinner2.default,{__source:{fileName:_jsxFileName,lineNumber:42}}),' ');}else{return _react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:45}},_react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:46}},'Current Customers'),_react2.default.createElement('table',{__source:{fileName:_jsxFileName,lineNumber:47}},_react2.default.createElement('tbody',{__source:{fileName:_jsxFileName,lineNumber:48}},_react2.default.createElement('tr',{__source:{fileName:_jsxFileName,lineNumber:49}},_react2.default.createElement('td',{__source:{fileName:_jsxFileName,lineNumber:50}},' Location '),_react2.default.createElement('td',{__source:{fileName:_jsxFileName,lineNumber:51}},' First Name '),_react2.default.createElement('td',{__source:{fileName:_jsxFileName,lineNumber:52}},' Last Name '),_react2.default.createElement('td',{__source:{fileName:_jsxFileName,lineNumber:53}},' Phone Number '),_react2.default.createElement('td',{__source:{fileName:_jsxFileName,lineNumber:54}},' Customer Id '),_react2.default.createElement('td',{__source:{fileName:_jsxFileName,lineNumber:55}},' Email '),_react2.default.createElement('td',{__source:{fileName:_jsxFileName,lineNumber:56}},' Current Invoice '),_react2.default.createElement('td',{__source:{fileName:_jsxFileName,lineNumber:57}})),data.currentCustomers.map(function(obj,i){return _react2.default.createElement('tr',{__source:{fileName:_jsxFileName,lineNumber:61}},_react2.default.createElement('td',{__source:{fileName:_jsxFileName,lineNumber:62}},obj.meter),_react2.default.createElement('td',{__source:{fileName:_jsxFileName,lineNumber:63}},obj.given_name),_react2.default.createElement('td',{__source:{fileName:_jsxFileName,lineNumber:64}},obj.family_name),_react2.default.createElement('td',{__source:{fileName:_jsxFileName,lineNumber:65}},obj.phone_number),_react2.default.createElement('td',{__source:{fileName:_jsxFileName,lineNumber:66}},obj._id),_react2.default.createElement('td',{__source:{fileName:_jsxFileName,lineNumber:67}},obj.email),_react2.default.createElement('td',{__source:{fileName:_jsxFileName,lineNumber:68}},' 0000023 '),_react2.default.createElement('td',{__source:{fileName:_jsxFileName,lineNumber:69}},_react2.default.createElement('i',{className:'material-icons',style:{fontSize:'12px',color:'blue'},id:obj._id,onClick:_this2.dropDown,__source:{fileName:_jsxFileName,lineNumber:70}},_this2.state.customer==obj._id?'cancel':'more_vert'),_react2.default.createElement('menu',{style:_this2.state.customer==obj._id?{}:{display:'none'},__source:{fileName:_jsxFileName,lineNumber:74}},_react2.default.createElement('li',{'data-id':obj._id,onClick:_this2.onSelect,__source:{fileName:_jsxFileName,lineNumber:75}},' CheckOut '),_react2.default.createElement('li',{'data-id':obj._id,onClick:_this2.onSelect,__source:{fileName:_jsxFileName,lineNumber:76}},' Transfer '))));}))));}});}}]);return CurrentCustomers;}(_react2.default.Component);exports.default=CurrentCustomers;

/***/ }),
/* 38 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"currentCustomers"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"currentCustomers"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"given_name"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"family_name"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"email"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"meter"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"phone_number"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":107}};
    doc.loc.source = {"body":"query currentCustomers {\n\tcurrentCustomers {\n\t_id\n\tgiven_name\n\tfamily_name\n\temail\n\tmeter\n\tphone_number\n\t}\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["currentCustomers"] = oneQuery(doc, "currentCustomers");
        


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/CustomerInfoForm/CustomerInfoForm.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactApollo=__webpack_require__(1);var _AdditionalOccupantsField=__webpack_require__(40);var _AdditionalOccupantsField2=_interopRequireDefault(_AdditionalOccupantsField);var _CustomerInfoField=__webpack_require__(41);var _CustomerInfoField2=_interopRequireDefault(_CustomerInfoField);var _DateRangeField=__webpack_require__(11);var _DateRangeField2=_interopRequireDefault(_DateRangeField);var _RateField=__webpack_require__(12);var _RateField2=_interopRequireDefault(_RateField);var _RentalTypeField=__webpack_require__(13);var _RentalTypeField2=_interopRequireDefault(_RentalTypeField);var _RVInfoField=__webpack_require__(42);var _RVInfoField2=_interopRequireDefault(_RVInfoField);var _PetInfoField=__webpack_require__(43);var _PetInfoField2=_interopRequireDefault(_PetInfoField);var _Search=__webpack_require__(44);var _Search2=_interopRequireDefault(_Search);var _VehicleInfoField=__webpack_require__(48);var _VehicleInfoField2=_interopRequireDefault(_VehicleInfoField);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var CustomerInfoForm=function(_Component){_inherits(CustomerInfoForm,_Component);function CustomerInfoForm(){_classCallCheck(this,CustomerInfoForm);var _this=_possibleConstructorReturn(this,(CustomerInfoForm.__proto__||Object.getPrototypeOf(CustomerInfoForm)).call(this));_this.state={cabin:false,customer:{},updatedInfo:{_id:''}};_this.resetForm=_this.resetForm.bind(_this);_this.setCustomer=_this.setCustomer.bind(_this);return _this;}_createClass(CustomerInfoForm,[{key:'resetForm',value:function resetForm(event){this.setState({customer:{}});this.setState({updatedInfo:{_id:''}});}},{key:'setCustomer',value:function setCustomer(customer){this.setState({customer:customer});this.setState({updatedInfo:{_id:customer._id}});}},{key:'render',value:function render(props){return _react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:42}},_react2.default.createElement(_Search2.default,{setCustomer:this.setCustomer,resetForm:this.resetForm,__source:{fileName:_jsxFileName,lineNumber:43}}),_react2.default.createElement('form',{name:'checkin',__source:{fileName:_jsxFileName,lineNumber:46}},_react2.default.createElement(_RentalTypeField2.default,{__source:{fileName:_jsxFileName,lineNumber:47}}),_react2.default.createElement(_RateField2.default,{__source:{fileName:_jsxFileName,lineNumber:48}}),_react2.default.createElement(_DateRangeField2.default,{__source:{fileName:_jsxFileName,lineNumber:49}}),_react2.default.createElement(_CustomerInfoField2.default,{__source:{fileName:_jsxFileName,lineNumber:50}}),_react2.default.createElement(_AdditionalOccupantsField2.default,{__source:{fileName:_jsxFileName,lineNumber:51}}),_react2.default.createElement(_PetInfoField2.default,{__source:{fileName:_jsxFileName,lineNumber:52}}),_react2.default.createElement(_RVInfoField2.default,{__source:{fileName:_jsxFileName,lineNumber:53}}),_react2.default.createElement(_VehicleInfoField2.default,{__source:{fileName:_jsxFileName,lineNumber:54}}),_react2.default.createElement('input',{type:'submit',__source:{fileName:_jsxFileName,lineNumber:56}}),_react2.default.createElement('input',{type:'reset',onClick:this.resetForm,__source:{fileName:_jsxFileName,lineNumber:59}}),_react2.default.createElement('input',{type:'submit',value:'Call List',__source:{fileName:_jsxFileName,lineNumber:63}})));}}]);return CustomerInfoForm;}(_react.Component);exports.default=(0,_reactApollo.withApollo)(CustomerInfoForm);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/CustomerInfoForm/AdditionalOccupantsField.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var AdditionalOccupantsField=function(_Component){_inherits(AdditionalOccupantsField,_Component);function AdditionalOccupantsField(){_classCallCheck(this,AdditionalOccupantsField);var _this=_possibleConstructorReturn(this,(AdditionalOccupantsField.__proto__||Object.getPrototypeOf(AdditionalOccupantsField)).call(this));_this.state={customer:{}};return _this;}_createClass(AdditionalOccupantsField,[{key:'render',value:function render(){return _react2.default.createElement('fieldset',{form:'checkin',name:'additionalOccupantInfo',__source:{fileName:_jsxFileName,lineNumber:14}},_react2.default.createElement('legend',{__source:{fileName:_jsxFileName,lineNumber:15}},' Additional Occupants '),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:16}},'Additional Occupant'),_react2.default.createElement('input',{tabIndex:'14',name:'additional_occupant_1',type:'text',onChange:this.updateCustomer,value:this.state.customer.additional_occupant_1,__source:{fileName:_jsxFileName,lineNumber:17}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:24}},'Additional Occupant Age'),_react2.default.createElement('input',{tabIndex:'15',name:'additional_occupant_1_age',type:'text',onChange:this.updateCustomer,value:this.state.customer.additional_occupant_1_age,__source:{fileName:_jsxFileName,lineNumber:25}}));}}]);return AdditionalOccupantsField;}(_react.Component);exports.default=AdditionalOccupantsField;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/CustomerInfoForm/CustomerInfoField.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var CustomerInfoField=function(_Component){_inherits(CustomerInfoField,_Component);function CustomerInfoField(){_classCallCheck(this,CustomerInfoField);var _this=_possibleConstructorReturn(this,(CustomerInfoField.__proto__||Object.getPrototypeOf(CustomerInfoField)).call(this));_this.state={customer:{}};_this.updateCustomer=_this.updateCustomer.bind(_this);return _this;}_createClass(CustomerInfoField,[{key:'updateCustomer',value:function updateCustomer(event){if(Object.keys(this.state.customer).length===0){var customer={};var input=document.getElementById(event.target.name);this.setState({customer:customer});}this.setState({customer:_extends({},this.state.customer,_defineProperty({},event.target.name,event.target.value))});}},{key:'render',value:function render(){return _react2.default.createElement('fieldset',{form:'checkin',name:'customerInfo',__source:{fileName:_jsxFileName,lineNumber:24}},_react2.default.createElement('legend',{__source:{fileName:_jsxFileName,lineNumber:25}},' Customer Info '),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:26}},'First Name'),_react2.default.createElement('input',{tabIndex:'2',name:'given_name',type:'text',onChange:this.updateCustomer,value:this.state.customer.given_name,__source:{fileName:_jsxFileName,lineNumber:27}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:34}},'Last Name'),_react2.default.createElement('input',{id:'family_name',tabIndex:'3',name:'family_name',type:'text',onChange:this.updateCustomer,value:this.state.customer.family_name,__source:{fileName:_jsxFileName,lineNumber:35}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:43}},'Email'),_react2.default.createElement('input',{id:'email',tabIndex:'4',name:'email',type:'email',onChange:this.updateCustomer,value:this.state.customer.email,__source:{fileName:_jsxFileName,lineNumber:44}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:52}},'Phone'),_react2.default.createElement('input',{tabIndex:'5',name:'phone_number',type:'tel',value:this.state.customer.phone_number,__source:{fileName:_jsxFileName,lineNumber:53}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:59}},'Alt Phone'),_react2.default.createElement('input',{tabIndex:'6',name:'phone_number_alt',type:'tel',onChange:this.updateCustomer,value:this.state.customer.phone_number_alt,__source:{fileName:_jsxFileName,lineNumber:60}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:67}},'Address'),_react2.default.createElement('input',{tabIndex:'7',name:'address_line_1',type:'text',onChange:this.updateCustomer,value:this.state.customer.address_line_1,__source:{fileName:_jsxFileName,lineNumber:68}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:75}},'City'),_react2.default.createElement('input',{tabIndex:'8',name:'locality',type:'text',onChange:this.updateCustomer,value:this.state.customer.locality,__source:{fileName:_jsxFileName,lineNumber:76}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:83}},'State'),_react2.default.createElement('input',{tabIndex:'9',name:'administrative_district_level_1',type:'text',onChange:this.updateCustomer,value:this.state.customer.administrative_district_level_1,__source:{fileName:_jsxFileName,lineNumber:84}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:91}},'Postal Code'),_react2.default.createElement('input',{tabIndex:'10',name:'postal_code',type:'text',onChange:this.updateCustomer,value:this.state.customer.postal_code,__source:{fileName:_jsxFileName,lineNumber:92}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:99}},'Country'),_react2.default.createElement('input',{tabIndex:'11',name:'country',type:'text',onChange:this.updateCustomer,value:this.state.customer.country,__source:{fileName:_jsxFileName,lineNumber:100}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:107}},'Drivers License Num'),_react2.default.createElement('input',{tabIndex:'12',name:'drivers_license_num',type:'text',onChange:this.updateCustomer,value:this.state.customer.drivers_license_num,__source:{fileName:_jsxFileName,lineNumber:108}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:115}},'Drivers License State'),_react2.default.createElement('input',{tabIndex:'13',name:'drivers_license_state',type:'text',onChange:this.updateCustomer,value:this.state.customer.drivers_license_state,__source:{fileName:_jsxFileName,lineNumber:116}}));}}]);return CustomerInfoField;}(_react.Component);exports.default=CustomerInfoField;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/CustomerInfoForm/RVInfoField.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var RVInfoField=function(_Component){_inherits(RVInfoField,_Component);function RVInfoField(){_classCallCheck(this,RVInfoField);var _this=_possibleConstructorReturn(this,(RVInfoField.__proto__||Object.getPrototypeOf(RVInfoField)).call(this));_this.state={customer:{}};return _this;}_createClass(RVInfoField,[{key:'render',value:function render(){return _react2.default.createElement('fieldset',{form:'checkin',name:'RVInfo',__source:{fileName:_jsxFileName,lineNumber:14}},_react2.default.createElement('legend',{__source:{fileName:_jsxFileName,lineNumber:15}},' RV Info '),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:16}},'RV Type'),_react2.default.createElement('input',{tabIndex:'19',name:'unit_type',type:'text',onChange:this.updateCustomer,value:this.state.customer.unit_type,__source:{fileName:_jsxFileName,lineNumber:17}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:24}},'RV Length'),_react2.default.createElement('input',{tabIndex:'20',name:'unit_length',type:'text',onChange:this.updateCustomer,value:this.state.customer.unit_length,__source:{fileName:_jsxFileName,lineNumber:25}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:32}},'RV Year'),_react2.default.createElement('input',{tabIndex:'21',name:'unit_year',type:'text',onChange:this.updateCustomer,value:this.state.customer.unit_type,__source:{fileName:_jsxFileName,lineNumber:33}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:40}},'RV License Plate Num'),_react2.default.createElement('input',{tabIndex:'22',name:'unit_license',type:'text',onChange:this.updateCustomer,value:this.state.customer.unit_license,__source:{fileName:_jsxFileName,lineNumber:41}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:48}},'RV License Plate State'),_react2.default.createElement('input',{tabIndex:'23',name:'unit_state',type:'text',onChange:this.updateCustomer,value:this.state.customer.unit_state,__source:{fileName:_jsxFileName,lineNumber:49}}));}}]);return RVInfoField;}(_react.Component);exports.default=RVInfoField;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/CustomerInfoForm/PetInfoField.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var PetInfoField=function(_Component){_inherits(PetInfoField,_Component);function PetInfoField(){_classCallCheck(this,PetInfoField);var _this=_possibleConstructorReturn(this,(PetInfoField.__proto__||Object.getPrototypeOf(PetInfoField)).call(this));_this.state={customer:{}};return _this;}_createClass(PetInfoField,[{key:'render',value:function render(){return _react2.default.createElement('fieldset',{form:'checkin',name:'petInfo',__source:{fileName:_jsxFileName,lineNumber:14}},_react2.default.createElement('legend',{__source:{fileName:_jsxFileName,lineNumber:15}},' Pet Info '),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:16}},'Number of Pets'),_react2.default.createElement('input',{tabIndex:'16',name:'pets_number_of',type:'text',onChange:this.updateCustomer,value:this.state.customer.pets_number_of,__source:{fileName:_jsxFileName,lineNumber:17}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:24}},'Type of Pets'),_react2.default.createElement('input',{tabIndex:'17',name:'pets_type',type:'text',onChange:this.updateCustomer,value:this.state.customer.pets_type,__source:{fileName:_jsxFileName,lineNumber:25}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:32}},'Breed of Dog'),_react2.default.createElement('input',{tabIndex:'18',name:'pets_breed',type:'text',onChange:this.updateCustomer,value:this.state.customer.pets_breed,__source:{fileName:_jsxFileName,lineNumber:33}}));}}]);return PetInfoField;}(_react.Component);exports.default=PetInfoField;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/Search/Search.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactApollo=__webpack_require__(1);var _Spinner=__webpack_require__(2);var _AllMeters=__webpack_require__(45);var _AllMeters2=_interopRequireDefault(_AllMeters);var _SearchCustomers=__webpack_require__(46);var _SearchCustomers2=_interopRequireDefault(_SearchCustomers);var _GetCustomer=__webpack_require__(47);var _GetCustomer2=_interopRequireDefault(_GetCustomer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Search=function(_React$Component){_inherits(Search,_React$Component);function Search(){_classCallCheck(this,Search);var _this=_possibleConstructorReturn(this,(Search.__proto__||Object.getPrototypeOf(Search)).call(this));_this.state={query:'',customer:{}};_this.onChange=_this.onChange.bind(_this);_this.onSelect=_this.onSelect.bind(_this);return _this;}_createClass(Search,[{key:'onChange',value:function onChange(event){this.setState({query:event.target.value});}},{key:'onSelect',value:function onSelect(event){var _this2=this;var client=this.props.client;client.query({query:_GetCustomer2.default,variables:{id:event.target.attributes.getNamedItem('data-id').value}}).then(function(res){_this2.props.setCustomer(res.data.getCustomer);}).catch(function(err){console.log('query error',err);});this.setState({query:''});}},{key:'render',value:function render(props){var _this3=this;return _react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:53}},_react2.default.createElement('input',{tabIndex:'1',placeholder:'Search ...',type:'text',onChange:this.onChange,onClick:this.props.resetForm,value:this.state.query,style:{display:'block'},__source:{fileName:_jsxFileName,lineNumber:54}}),this.state.query!=''?_react2.default.createElement('ul',{__source:{fileName:_jsxFileName,lineNumber:64}},this.state.query!=''?_react2.default.createElement(_reactApollo.Query,{query:_SearchCustomers2.default,ssr:false,variables:{query:this.state.query},__source:{fileName:_jsxFileName,lineNumber:66}},function(_ref){var loading=_ref.loading,data=_ref.data;if(loading){return _react2.default.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:71}},' ',_react2.default.createElement(_Spinner.Spinner,{__source:{fileName:_jsxFileName,lineNumber:71}}),' ');}else if(data==undefined||data.searchCustomer.length===0){return _react2.default.createElement('li',{__source:{fileName:_jsxFileName,lineNumber:73}},' Add Customer ');}else{var options=data.searchCustomer.map(function(customer,i){return _react2.default.createElement('li',{tabIndex:i+2,key:i+2,'data-id':customer._id,onClick:_this3.onSelect,__source:{fileName:_jsxFileName,lineNumber:76}},' ',customer.given_name);});return options;}}):null):null);}}]);return Search;}(_react2.default.Component);exports.default=(0,_reactApollo.withApollo)(Search);

/***/ }),
/* 45 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allMeters"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"allMeters"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"meter"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":47}};
    doc.loc.source = {"body":"query allMeters {\n\tallMeters {\n\t_id\n\tmeter\n\t}\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["allMeters"] = oneQuery(doc, "allMeters");
        


/***/ }),
/* 46 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchCustomers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"searchCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"given_name"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"family_name"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"email"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":114}};
    doc.loc.source = {"body":"query searchCustomers($query: String) {\n\tsearchCustomer(query: $query) {\n\t_id\n\tgiven_name\n\tfamily_name\n\temail\n\t}\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
/* 47 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"defaultValue":null}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"getCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"given_name"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"family_name"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"email"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"phone_number"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"address_line_1"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"locality"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"administrative_district_level_1"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"postal_code"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"country"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"drivers_license_num"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"drivers_license_state"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}],"loc":{"start":0,"end":237}};
    doc.loc.source = {"body":"query getCustomer($id: String) {\n\tgetCustomer(id: $id) {\n\t_id\n\tgiven_name\n\tfamily_name\n\temail\n\tphone_number\n\taddress_line_1\n\tlocality\n\tadministrative_district_level_1\n\tpostal_code\n\tcountry\n\tdrivers_license_num\n\tdrivers_license_state\n\t}\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
    
        module.exports["getCustomer"] = oneQuery(doc, "getCustomer");
        


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/CustomerInfoForm/VehicleInfoField.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var VehicleInfoField=function(_Component){_inherits(VehicleInfoField,_Component);function VehicleInfoField(){_classCallCheck(this,VehicleInfoField);var _this=_possibleConstructorReturn(this,(VehicleInfoField.__proto__||Object.getPrototypeOf(VehicleInfoField)).call(this));_this.state={customer:{}};return _this;}_createClass(VehicleInfoField,[{key:'render',value:function render(){return _react2.default.createElement('fieldset',{form:'checkin',name:'vehicleInfo',__source:{fileName:_jsxFileName,lineNumber:14}},_react2.default.createElement('legend',{__source:{fileName:_jsxFileName,lineNumber:15}},' Vehicle Info '),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:16}},'Vehicle Type'),_react2.default.createElement('input',{tabIndex:'24',name:'vehicle_1_type',type:'text',onChange:this.updateCustomer,value:this.state.customer.vehicle_1_type,__source:{fileName:_jsxFileName,lineNumber:17}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:24}},'Vehicle License Num'),_react2.default.createElement('input',{tabIndex:'25',name:'vehicle_1_license',type:'text',onChange:this.updateCustomer,value:this.state.customer.vehicle_1_license,__source:{fileName:_jsxFileName,lineNumber:25}}),_react2.default.createElement('label',{__source:{fileName:_jsxFileName,lineNumber:32}},'Vehicle License State'),_react2.default.createElement('input',{tabIndex:'25',name:'vehicle_1_state',type:'text',onChange:this.updateCustomer,value:this.state.customer.vehicle_1_state,__source:{fileName:_jsxFileName,lineNumber:33}}));}}]);return VehicleInfoField;}(_react.Component);exports.default=VehicleInfoField;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/TivoliRiverLevel/TivoliRiverLevel.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactApollo=__webpack_require__(1);var _LineChart=__webpack_require__(50);var _LineChart2=_interopRequireDefault(_LineChart);var _Spinner=__webpack_require__(2);var _TivoliRiverInfo=__webpack_require__(55);var _TivoliRiverInfo2=_interopRequireDefault(_TivoliRiverInfo);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var TivoliRiverLevel=function(_React$Component){_inherits(TivoliRiverLevel,_React$Component);function TivoliRiverLevel(){_classCallCheck(this,TivoliRiverLevel);return _possibleConstructorReturn(this,(TivoliRiverLevel.__proto__||Object.getPrototypeOf(TivoliRiverLevel)).apply(this,arguments));}_createClass(TivoliRiverLevel,[{key:'render',value:function render(){return _react2.default.createElement(_reactApollo.Query,{query:_TivoliRiverInfo2.default,ssr:true,__source:{fileName:_jsxFileName,lineNumber:11}},function(_ref){var loading=_ref.loading,data=_ref.data;if(loading){return _react2.default.createElement(_Spinner.Spinner,{__source:{fileName:_jsxFileName,lineNumber:15}});}else if(data==undefined||data.getTivoliRiverInfo.length===0){return _react2.default.createElement('h3',{__source:{fileName:_jsxFileName,lineNumber:17}},' No Data ');}else{return _react2.default.createElement(_LineChart2.default,{data:data.getTivoliRiverInfo,__source:{fileName:_jsxFileName,lineNumber:20}});}});}}]);return TivoliRiverLevel;}(_react2.default.Component);exports.default=TivoliRiverLevel;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/LineChart/LineChart.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(3);var _propTypes2=_interopRequireDefault(_propTypes);var _DataBox=__webpack_require__(51);var _DataBox2=_interopRequireDefault(_DataBox);var _MajorAxis=__webpack_require__(53);var _MajorAxis2=_interopRequireDefault(_MajorAxis);var _MinorAxis=__webpack_require__(54);var _MinorAxis2=_interopRequireDefault(_MinorAxis);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var LineChart=function(_Component){_inherits(LineChart,_Component);function LineChart(){_classCallCheck(this,LineChart);return _possibleConstructorReturn(this,(LineChart.__proto__||Object.getPrototypeOf(LineChart)).apply(this,arguments));}_createClass(LineChart,[{key:'render',value:function render(){var _props=this.props,data=_props.data.data,trendInfo=_props.data.trendInfo,svgWidth=_props.svgWidth,svgHeight=_props.svgHeight;return _react2.default.createElement('svg',{viewBox:'-1 -1 '+svgWidth+' '+svgHeight,__source:{fileName:_jsxFileName,lineNumber:21}},_react2.default.createElement('g',{key:'main group',__source:{fileName:_jsxFileName,lineNumber:22}},data.map(function(point,i){return _react2.default.createElement('circle',{key:i,style:{stroke:'#2196F3',fill:'#2196F3'},cx:i/9.6+5.5,cy:(10-point.level)*3,r:'.05',__source:{fileName:_jsxFileName,lineNumber:24}});}),_react2.default.createElement(_MajorAxis2.default,{__source:{fileName:_jsxFileName,lineNumber:26}}),_react2.default.createElement(_MinorAxis2.default,{__source:{fileName:_jsxFileName,lineNumber:27}}),_react2.default.createElement(_DataBox2.default,{lastReading:trendInfo.lastReading,sixHourDelta:trendInfo.sixHourDelta,twelveHourDelta:trendInfo.twelveHourDelta,twentyFourHourDelta:trendInfo.twentyFourHourDelta,fortyEightHourDelta:trendInfo.fortyEightHourDelta,__source:{fileName:_jsxFileName,lineNumber:28}})));}}]);return LineChart;}(_react.Component);LineChart.propTypes={};LineChart.defaultProps={color:'#2196F3',svgHeight:40,svgWidth:80};exports.default=LineChart;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/LineChart/DataBox.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(3);var _propTypes2=_interopRequireDefault(_propTypes);var _Spinner=__webpack_require__(2);var _TrendInfo=__webpack_require__(52);var _TrendInfo2=_interopRequireDefault(_TrendInfo);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var DataBox=function(_Component){_inherits(DataBox,_Component);function DataBox(){_classCallCheck(this,DataBox);return _possibleConstructorReturn(this,(DataBox.__proto__||Object.getPrototypeOf(DataBox)).apply(this,arguments));}_createClass(DataBox,[{key:'render',value:function render(){var _props=this.props,lastReading=_props.lastReading,sixHourDelta=_props.sixHourDelta,twelveHourDelta=_props.twelveHourDelta,twentyFourHourDelta=_props.twentyFourHourDelta,fortyEightHourDelta=_props.fortyEightHourDelta;if(lastReading!=undefined){return[_react2.default.createElement('rect',{key:'data box',x:'6',y:'0',width:'27',height:'10',style:{strokeWidth:'.2',stroke:'orange',fill:'white'},__source:{fileName:_jsxFileName,lineNumber:16}}),_react2.default.createElement('text',{key:'date',x:'7',y:'2',style:{fill:'black',fontSize:'1.5'},__source:{fileName:_jsxFileName,lineNumber:17}},' Last Observation: ',lastReading.date.slice(0,16),' '),_react2.default.createElement('text',{key:'value',x:'7',y:'4',style:{fill:'black',fontSize:'1.5'},__source:{fileName:_jsxFileName,lineNumber:18}},' Last Observed Value: ',lastReading.level,'  ft'),_react2.default.createElement(_TrendInfo2.default,{sixHourDelta:sixHourDelta,twelveHourDelta:twelveHourDelta,twentyFourHourDelta:twentyFourHourDelta,fortyEightHourDelta:fortyEightHourDelta,__source:{fileName:_jsxFileName,lineNumber:19}})];}else{return _react2.default.createElement(_Spinner.Spinner,{__source:{fileName:_jsxFileName,lineNumber:27}});}}}]);return DataBox;}(_react.Component);DataBox.propTypes={};exports.default=DataBox;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/LineChart/TrendInfo.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(3);var _propTypes2=_interopRequireDefault(_propTypes);var _Spinner=__webpack_require__(2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var TrendInfo=function(_Component){_inherits(TrendInfo,_Component);function TrendInfo(props){_classCallCheck(this,TrendInfo);var _this=_possibleConstructorReturn(this,(TrendInfo.__proto__||Object.getPrototypeOf(TrendInfo)).call(this,props));_this.arrowStyle=_this.arrowStyle.bind(_this);_this.renderPolyLine=_this.renderPolyLine.bind(_this);return _this;}_createClass(TrendInfo,[{key:'arrowStyle',value:function arrowStyle(delta){return{stroke:delta,strokeWidth:'.2',fill:'none'};}},{key:'renderPolyLine',value:function renderPolyLine(props){var textStyle=this.props.textStyle;var arrows=[];for(var key in props){var points='';var x='';var y='';var x1='';var x2='';var y1='';var y2='';var text='';switch(key){case'sixHourDelta':x='7';y='6';x1='12.5';y1='7';x2='12.5';y2='9';text='Trend:  6hr';if(props[key]=='green'){points='11.5,8 12.5,9 13.5,8';}else if(props[key]=='yellow'){points='0,0';}else{points='11.5,8 12.5,7 13.5,8';}break;case'twelveHourDelta':x='16';y='6';x1='17.5';y1='7';x2='17.5';y2='9';text='12hr';if(props[key]=='green'){points='16.5,8 17.5,9 18.5,8';}else if(props[key]=='yellow'){points='0,0';}else{points='16.5,8 17.5,7 18.5,8';}break;case'twentyFourHourDelta':x='22';y='6';x1='23.5';y1='7';x2='23.5';y2='9';text='24hr';if(props[key]=='green'){points='22.5,8 23.5,9 24.5,8';}else if(props[key]=='yellow'){points='0,0';}else{points='22.5,8 23.5,7 24.5,8';}break;case'fortyEightHourDelta':x='28';y='6';x1='29.5';y1='7';x2='29.5';y2='9';text='48hr';if(props[key]=='green'){points='28.5,8 29.5,9 30.5,8';}else if(props[key]=='yellow'){points='0,0';}else{points='28.5,8 29.5,7 30.5,8';}break;default:null;}arrows.push([_react2.default.createElement('text',{key:key+'text',x:x,y:y,style:textStyle,__source:{fileName:_jsxFileName,lineNumber:116}},' ',text,' '),_react2.default.createElement('line',{key:key+'line',x1:x1,y1:y1,x2:x2,y2:y2,style:this.arrowStyle(props[key]),__source:{fileName:_jsxFileName,lineNumber:117}}),_react2.default.createElement('polyline',{key:key+'poly',points:points,style:this.arrowStyle(props[key]),__source:{fileName:_jsxFileName,lineNumber:118}})]);}return arrows;}},{key:'render',value:function render(){var _props=this.props,sixHourDelta=_props.sixHourDelta,twelveHourDelta=_props.twelveHourDelta,twentyFourHourDelta=_props.twentyFourHourDelta,fortyEightHourDelta=_props.fortyEightHourDelta;if(sixHourDelta!=undefined){return _react2.default.createElement('g',{key:'arrow group',__source:{fileName:_jsxFileName,lineNumber:128}},this.renderPolyLine(this.props));}else{return _react2.default.createElement(_Spinner.Spinner,{__source:{fileName:_jsxFileName,lineNumber:132}});}}}]);return TrendInfo;}(_react.Component);TrendInfo.propTypes={};TrendInfo.defaultProps={textStyle:{fill:'black',fontSize:'1.5'}};exports.default=TrendInfo;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/LineChart/MajorAxis.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(3);var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var MajorAxis=function(_Component){_inherits(MajorAxis,_Component);function MajorAxis(props){_classCallCheck(this,MajorAxis);var _this=_possibleConstructorReturn(this,(MajorAxis.__proto__||Object.getPrototypeOf(MajorAxis)).call(this,props));_this.state={};return _this;}_createClass(MajorAxis,[{key:'render',value:function render(){var _props=this.props,svgHeight=_props.svgHeight,svgWidth=_props.svgWidth;return[_react2.default.createElement('text',{key:'yLabel',x:'-15.3',y:'0',style:{fill:'black',fontSize:'1.5',transform:'rotate(-90deg)'},__source:{fileName:_jsxFileName,lineNumber:25}},' Level (ft) '),_react2.default.createElement('line',{key:'majorX',x1:'3',y1:svgHeight-10,x2:svgWidth-5,y2:svgHeight-10,style:{stroke:'black',strokeWidth:'.3'},__source:{fileName:_jsxFileName,lineNumber:26}}),_react2.default.createElement('line',{key:'majorY',x1:'5',y1:svgHeight-8,x2:'5',y2:'0',style:{stroke:'black',strokeWidth:'.3'},__source:{fileName:_jsxFileName,lineNumber:27}})];}}]);return MajorAxis;}(_react.Component);MajorAxis.propTypes={};MajorAxis.defaultProps={svgHeight:40,svgWidth:80};exports.default=MajorAxis;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/components/LineChart/MinorAxis.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(3);var _propTypes2=_interopRequireDefault(_propTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var MinorAxis=function(_Component){_inherits(MinorAxis,_Component);function MinorAxis(props){_classCallCheck(this,MinorAxis);var _this=_possibleConstructorReturn(this,(MinorAxis.__proto__||Object.getPrototypeOf(MinorAxis)).call(this,props));_this.state={};_this.makeMinorXAxis=_this.makeMinorXAxis.bind(_this);_this.makeMinorYAxis=_this.makeMinorYAxis.bind(_this);return _this;}_createClass(MinorAxis,[{key:'makeMinorXAxis',value:function makeMinorXAxis(){var _props=this.props,svgWidth=_props.svgWidth,textStyle=_props.textStyle;var minorXAxis=[];for(var i=0;i<10;i++){if(i===1||i===2){i===1?minorXAxis.push([_react2.default.createElement('line',{key:'minorX'+i,x1:'3',y1:'3.12',x2:svgWidth-5,y2:'3.12',style:{stroke:'red',strokeWidth:'.2'},__source:{fileName:_jsxFileName,lineNumber:32}}),_react2.default.createElement('text',{key:'minorXText'+i,x:'0',y:'3.6',style:{fill:'red',fontSize:'1.5'},__source:{fileName:_jsxFileName,lineNumber:33}},' 8.96 ')]):minorXAxis.push([_react2.default.createElement('line',{key:'minorX'+i,x1:'3',y1:i*3,x2:svgWidth-5,y2:i*3,style:{stroke:'orange',strokeWidth:'.1'},__source:{fileName:_jsxFileName,lineNumber:34}}),_react2.default.createElement('text',{key:'minorXText'+i,x:'1',y:i*3+.4,style:textStyle,__source:{fileName:_jsxFileName,lineNumber:35}},' ',i*3+2,' ')]);}else{minorXAxis.push([_react2.default.createElement('line',{key:'minorX'+i,x1:'3',y1:i*3,x2:svgWidth-5,y2:i*3,style:{stroke:'black',strokeWidth:'.1'},__source:{fileName:_jsxFileName,lineNumber:37}}),_react2.default.createElement('text',{key:'minorXText'+i,x:'1',y:i*3+.4,style:textStyle,__source:{fileName:_jsxFileName,lineNumber:38}},' ',(30-i*3)/3,' ')]);}}return minorXAxis;}},{key:'makeMinorYAxis',value:function makeMinorYAxis(data){var _props2=this.props,svgHeight=_props2.svgHeight,svgWidth=_props2.svgWidth,textStyle=_props2.textStyle;var minorYAxis=[];var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];var days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];var date=new Date();var hour=date.getHours();var hour2=new Date(date.setHours(date.getHours()+12)).getHours();var minutes=date.getMinutes()===0?'00':'00';Date.prototype.addDays=function(days){return new Date(date.getTime()+days*86400000);};for(var i=1;i<=14;i++){var month=months[date.getMonth()];var day='';if(i===10||(i-10)%2===0){day=days[new Date().addDays((i-10)/2).getDay()];}else{day=days[new Date().addDays((i-11)/2).getDay()];}var index='';if(i===10||(i-10)%2===0){index=new Date().addDays((i-10)/2).getDate();}else{index=new Date().addDays((i-11)/2).getDate();}if(i%2===0){minorYAxis.push([_react2.default.createElement('line',{key:'minorY'+i,x1:i*5+5,y1:svgHeight-8,x2:i*5+5,y2:'0',style:{stroke:'grey',strokeWidth:'.1'},__source:{fileName:_jsxFileName,lineNumber:78}}),_react2.default.createElement('text',{key:'minorYText'+i,x:i*5+3.1,y:svgHeight-6,style:textStyle,__source:{fileName:_jsxFileName,lineNumber:79}},hour<12?'0'+hour:hour,':',minutes),_react2.default.createElement('text',{key:'minorYText'+i+1,x:i*5+3.5,y:svgHeight-4,style:textStyle,__source:{fileName:_jsxFileName,lineNumber:80}},day),_react2.default.createElement('text',{key:'minorYText'+i+2,x:i*5+3.1,y:svgHeight-2,style:textStyle,__source:{fileName:_jsxFileName,lineNumber:81}},month,' ',index)]);}else{minorYAxis.push([_react2.default.createElement('line',{key:'minorY'+i,x1:i*5+5,y1:svgHeight-8,x2:i*5+5,y2:'0',style:{stroke:'grey',strokeDasharray:'1,.5',strokeWidth:'.1'},__source:{fileName:_jsxFileName,lineNumber:83}}),_react2.default.createElement('text',{key:'minorYText'+i,x:i*5+3.2,y:svgHeight-6,style:textStyle,__source:{fileName:_jsxFileName,lineNumber:84}},hour2<12?'0'+hour2:hour2,':',minutes),_react2.default.createElement('text',{key:'minorYText'+i+1,x:i*5+3.5,y:svgHeight-4,style:textStyle,__source:{fileName:_jsxFileName,lineNumber:85}},day),_react2.default.createElement('text',{key:'minorYText'+i+2,x:i*5+3.3,y:svgHeight-2,style:textStyle,__source:{fileName:_jsxFileName,lineNumber:86}},month,' ',index)]);}}return minorYAxis;}},{key:'render',value:function render(){return _react2.default.createElement('g',{key:'minor axis',__source:{fileName:_jsxFileName,lineNumber:94}},this.makeMinorYAxis(),this.makeMinorXAxis());}}]);return MinorAxis;}(_react.Component);MinorAxis.propTypes={};MinorAxis.defaultProps={svgHeight:40,svgWidth:80,textStyle:{fill:'black',fontSize:'1.5'}};exports.default=MinorAxis;

/***/ }),
/* 55 */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"tivoliRiverInfo"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"getTivoliRiverInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"trendInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"lastReading"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"date"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"level"},"arguments":[],"directives":[],"selectionSet":null}]}},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"sixHourDelta"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"twelveHourDelta"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"twentyFourHourDelta"},"arguments":[],"directives":[],"selectionSet":null},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"fortyEightHourDelta"},"arguments":[],"directives":[],"selectionSet":null}]}},{"kind":"Field","alias":null,"name":{"kind":"Name","value":"data"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":null,"name":{"kind":"Name","value":"level"},"arguments":[],"directives":[],"selectionSet":null}]}}]}}]}}],"loc":{"start":0,"end":208}};
    doc.loc.source = {"body":"query tivoliRiverInfo {\n\tgetTivoliRiverInfo {\n\t\ttrendInfo {\n\t\t\tlastReading{\n\t\t\tdate\n\t\t\tlevel\n\t\t}\n\t\t\tsixHourDelta\n\t\t\ttwelveHourDelta\n\t\t\ttwentyFourHourDelta\n\t\t\tfortyEightHourDelta\n\t\t}\n\t\tdata {\n\t\t\tlevel\n\t\t}\n\t}\n}","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/routes/NotFoundPage.js';var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _Status=__webpack_require__(57);var _Status2=_interopRequireDefault(_Status);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var NotFoundPage=function NotFoundPage(){return _react2.default.createElement(_Status2.default,{code:404,__source:{fileName:_jsxFileName,lineNumber:5}},_react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:6}},'Sorry, the requested page could not be found.'));};exports.default=NotFoundPage;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/PATRIOT/react-ssr-with-apollo/src/routes/Status.js';var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(3);var _propTypes2=_interopRequireDefault(_propTypes);var _reactRouterDom=__webpack_require__(58);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Status=function Status(_ref){var code=_ref.code,children=_ref.children;return _react2.default.createElement(_reactRouterDom.Route,{render:function render(_ref2){var staticContext=_ref2.staticContext;if(staticContext){staticContext.status=code;}return children;},__source:{fileName:_jsxFileName,lineNumber:6}});};Status.defaultProps={code:200};Status.propTypes={code:_propTypes2.default.number,children:_propTypes2.default.element.isRequired};exports.default=Status;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map