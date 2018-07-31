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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-persisted-queries");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _jsxFileName='/Volumes/GITCLONES/react-ssr-with-apollo/src/server.js';var _express=__webpack_require__(7);var _express2=_interopRequireDefault(_express);var _path=__webpack_require__(8);var _path2=_interopRequireDefault(_path);var _httpProxyMiddleware=__webpack_require__(9);var _httpProxyMiddleware2=_interopRequireDefault(_httpProxyMiddleware);var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _server=__webpack_require__(10);var _server2=_interopRequireDefault(_server);var _reactRouter=__webpack_require__(1);var _apolloClient=__webpack_require__(11);var _apolloClient2=_interopRequireDefault(_apolloClient);var _reactApollo=__webpack_require__(2);var _apolloCacheInmemory=__webpack_require__(12);var _apolloLink=__webpack_require__(3);var _apolloLinkHttp=__webpack_require__(4);var _nodeFetch=__webpack_require__(13);var _nodeFetch2=_interopRequireDefault(_nodeFetch);var _apolloLinkPersistedQueries=__webpack_require__(5);var _links=__webpack_require__(14);var _Html=__webpack_require__(18);var _Html2=_interopRequireDefault(_Html);var _Layout=__webpack_require__(19);var _Layout2=_interopRequireDefault(_Layout);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var PORT=3000;if(process.env.PORT){PORT=parseInt(process.env.PORT,10);}var API_HOST= true?'http://localhost:3010':'';var app=new _express2.default();var apiProxy=(0,_httpProxyMiddleware2.default)({target:API_HOST,changeOrigin:true});app.use('/graphql',apiProxy);app.use('/graphiql',apiProxy);app.use('/login',apiProxy);app.use('/logout',apiProxy);if(false){app.use('/static',_express2.default.static(_path2.default.join(process.cwd(),'build/client')));}else{app.use('/static',(0,_httpProxyMiddleware2.default)({target:'http://localhost:3020',pathRewrite:{'^/static':''}}));}var links=[_links.errorLink,(0,_links.queryOrMutationLink)({fetch:_nodeFetch2.default,uri:API_HOST+'/graphql'})];if(false){links.unshift((0,_apolloLinkPersistedQueries.createPersistedQueryLink)());}app.use(function(req,res){var client=new _apolloClient2.default({ssrMode:true,link:_apolloLink.ApolloLink.from(links),cache:new _apolloCacheInmemory.InMemoryCache()});var context={};var component=_react2.default.createElement(_reactApollo.ApolloProvider,{client:client,__source:{fileName:_jsxFileName,lineNumber:76}},_react2.default.createElement(_reactRouter.StaticRouter,{location:req.url,context:context,__source:{fileName:_jsxFileName,lineNumber:77}},_react2.default.createElement(_Layout2.default,{__source:{fileName:_jsxFileName,lineNumber:78}})));(0,_reactApollo.renderToStringWithData)(component).then(function(content){res.status(200);var html=_react2.default.createElement(_Html2.default,{content:content,client:client,__source:{fileName:_jsxFileName,lineNumber:86}});res.send('<!doctype html>\n'+_server2.default.renderToStaticMarkup(html));res.end();}).catch(function(e){console.error('RENDERING ERROR:',e);res.status(500);res.end('An error occurred. Please submit an issue to [https://github.com/apollographql/GitHunt-React] with the following stack trace:\n\n'+e.stack);});});app.listen(PORT,function(){return console.log('App Server is now running on http://localhost:'+PORT);});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("http-proxy-middleware");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});exports.requestLink=exports.queryOrMutationLink=exports.subscriptionLink=exports.errorLink=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _apolloLink=__webpack_require__(3);var _apolloLinkHttp=__webpack_require__(4);var _apolloLinkWs=__webpack_require__(15);var _apolloLinkError=__webpack_require__(16);var _apolloUtilities=__webpack_require__(17);var _apolloLinkPersistedQueries=__webpack_require__(5);var errorLink=exports.errorLink=(0,_apolloLinkError.onError)(function(_ref){var graphQLErrors=_ref.graphQLErrors,networkError=_ref.networkError;if(graphQLErrors)graphQLErrors.map(function(_ref2){var message=_ref2.message,location=_ref2.location,path=_ref2.path;return console.log('[GraphQL error]: Message: '+message+', Location: '+location+', Path: '+path);});if(networkError)console.log('[Network error]: '+networkError);});var subscriptionLink=exports.subscriptionLink=function subscriptionLink(){var config=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return new _apolloLinkWs.WebSocketLink(_extends({uri: true?'ws://localhost:3010/subscriptions':'wss://api.githunt.com/subscriptions',options:{reconnect:true}},config));};var queryOrMutationLink=exports.queryOrMutationLink=function queryOrMutationLink(){var config=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};return(0,_apolloLinkPersistedQueries.createPersistedQueryLink)({useGETForHashedQueries:true}).concat(new _apolloLinkHttp.HttpLink(_extends({},config,{credentials:'same-origin'})));};var requestLink=exports.requestLink=function requestLink(_ref3){var queryOrMutationLink=_ref3.queryOrMutationLink,subscriptionLink=_ref3.subscriptionLink;return _apolloLink.ApolloLink.split(function(_ref4){var query=_ref4.query;var _getMainDefinition=(0,_apolloUtilities.getMainDefinition)(query),kind=_getMainDefinition.kind,operation=_getMainDefinition.operation;return kind==='OperationDefinition'&&operation==='subscription';},subscriptionLink,queryOrMutationLink);};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-ws");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName="/Volumes/GITCLONES/react-ssr-with-apollo/src/routes/Html.js";var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Html=function Html(_ref){var content=_ref.content,cache=_ref.client.cache;return _react2.default.createElement("html",{lang:"en",__source:{fileName:_jsxFileName,lineNumber:6}},_react2.default.createElement("head",{__source:{fileName:_jsxFileName,lineNumber:7}},_react2.default.createElement("meta",{charSet:"utf-8",__source:{fileName:_jsxFileName,lineNumber:8}}),_react2.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1",__source:{fileName:_jsxFileName,lineNumber:9}}),_react2.default.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css",integrity:"sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7",crossOrigin:"anonymous",__source:{fileName:_jsxFileName,lineNumber:10}}),_react2.default.createElement("title",{__source:{fileName:_jsxFileName,lineNumber:16}},"Calhoun's Riverside RV Retreat")),_react2.default.createElement("body",{__source:{fileName:_jsxFileName,lineNumber:18}},_react2.default.createElement("div",{id:"content",dangerouslySetInnerHTML:{__html:content},__source:{fileName:_jsxFileName,lineNumber:19}}),_react2.default.createElement("div",{id:"footer",__source:{fileName:_jsxFileName,lineNumber:20}},_react2.default.createElement("ul",{__source:{fileName:_jsxFileName,lineNumber:21}},_react2.default.createElement("li",{__source:{fileName:_jsxFileName,lineNumber:22}},"Fork on ",_react2.default.createElement("a",{href:"https://github.com/apollostack/GitHunt",__source:{fileName:_jsxFileName,lineNumber:23}},"Github")),_react2.default.createElement("li",{__source:{fileName:_jsxFileName,lineNumber:25}},"This is an ",_react2.default.createElement("a",{href:"http://www.apollostack.com/",__source:{fileName:_jsxFileName,lineNumber:26}},"Apollo")," example app"))),_react2.default.createElement("script",{charSet:"UTF-8",dangerouslySetInnerHTML:{__html:"window.__APOLLO_STATE__="+JSON.stringify(cache.extract())+";"},__source:{fileName:_jsxFileName,lineNumber:31}}),_react2.default.createElement("script",{src:"/static/bundle.js",charSet:"UTF-8",__source:{fileName:_jsxFileName,lineNumber:37}})));};exports.default=Html;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='/Volumes/GITCLONES/react-ssr-with-apollo/src/routes/Layout.js';var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactRouter=__webpack_require__(1);var _index=__webpack_require__(20);var _index2=_interopRequireDefault(_index);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Layout=function Layout(){return _react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:23}},_react2.default.createElement('div',{className:'container',__source:{fileName:_jsxFileName,lineNumber:26}},_react2.default.createElement(_reactRouter.Switch,{__source:{fileName:_jsxFileName,lineNumber:27}},_index2.default.map(function(route){return _react2.default.createElement(_reactRouter.Route,_extends({key:'route-'+route.name},route,{__source:{fileName:_jsxFileName,lineNumber:28}}));}))));};exports.default=Layout;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _Main=__webpack_require__(21);var _Main2=_interopRequireDefault(_Main);var _NotFoundPage=__webpack_require__(24);var _NotFoundPage2=_interopRequireDefault(_NotFoundPage);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var routes=[{path:'/',name:'home',exact:true,component:_Main2.default},{path:'*',name:'notfound',component:_NotFoundPage2.default}];exports.default=routes;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/GITCLONES/react-ssr-with-apollo/src/routes/Main.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _reactApollo=__webpack_require__(2);var _AllCustomers=__webpack_require__(22);var _AllCustomers2=_interopRequireDefault(_AllCustomers);var _SearchCustomers=__webpack_require__(23);var _SearchCustomers2=_interopRequireDefault(_SearchCustomers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Main=function(_React$Component){_inherits(Main,_React$Component);function Main(){_classCallCheck(this,Main);var _this=_possibleConstructorReturn(this,(Main.__proto__||Object.getPrototypeOf(Main)).call(this));_this.state={query:''};_this.onChange=_this.onChange.bind(_this);return _this;}_createClass(Main,[{key:'onChange',value:function onChange(event){this.setState({query:event.target.value});}},{key:'render',value:function render(){return _react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:25}},_react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:26}},' Calhoun\'s Demo Dashboard '),_react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:27}},' Search Customers '),_react2.default.createElement('input',{placeholder:'Search ...',type:'text',onChange:this.onChange,style:{display:'block'},__source:{fileName:_jsxFileName,lineNumber:28}}),this.state.query!=''?_react2.default.createElement('select',{__source:{fileName:_jsxFileName,lineNumber:35}},_react2.default.createElement('option',{__source:{fileName:_jsxFileName,lineNumber:36}},' Add Customer '),this.state.query!=''?_react2.default.createElement(_reactApollo.Query,{query:_SearchCustomers2.default,ssr:false,variables:{query:this.state.query},__source:{fileName:_jsxFileName,lineNumber:38}},function(_ref){var loading=_ref.loading,data=_ref.data;if(loading){return _react2.default.createElement('option',{__source:{fileName:_jsxFileName,lineNumber:43}},' loading ');}else if(data==undefined||data.searchCustomer.length===0){return _react2.default.createElement('option',{__source:{fileName:_jsxFileName,lineNumber:45}},' Add Customer ');}else{var options=data.searchCustomer.map(function(customer){return _react2.default.createElement('option',{key:customer.email,__source:{fileName:_jsxFileName,lineNumber:48}},' ',customer.given_name+' : '+customer.email,' ');});return options;}}):null):_react2.default.createElement('button',{__source:{fileName:_jsxFileName,lineNumber:58}},' Add Customer '),_react2.default.createElement(_reactApollo.Query,{query:_AllCustomers2.default,__source:{fileName:_jsxFileName,lineNumber:62}},function(_ref2){var loading=_ref2.loading,data=_ref2.data;if(loading){return _react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:65}},' Loading ');}else{return _react2.default.createElement('div',{__source:{fileName:_jsxFileName,lineNumber:68}},_react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:69}},' All Customers '),data.allCustomers.map(function(customer){return _react2.default.createElement('p',{key:customer.email,__source:{fileName:_jsxFileName,lineNumber:71}},' ',customer.given_name+' : '+customer.email,' ');}));}}));}}]);return Main;}(_react2.default.Component);exports.default=Main;

/***/ }),
/* 22 */
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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/GITCLONES/react-ssr-with-apollo/src/routes/NotFoundPage.js';var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _Status=__webpack_require__(25);var _Status2=_interopRequireDefault(_Status);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var NotFoundPage=function NotFoundPage(){return _react2.default.createElement(_Status2.default,{code:404,__source:{fileName:_jsxFileName,lineNumber:5}},_react2.default.createElement('h1',{__source:{fileName:_jsxFileName,lineNumber:6}},'Sorry, the requested page could not be found.'));};exports.default=NotFoundPage;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='/Volumes/GITCLONES/react-ssr-with-apollo/src/routes/Status.js';var _react=__webpack_require__(0);var _react2=_interopRequireDefault(_react);var _propTypes=__webpack_require__(26);var _propTypes2=_interopRequireDefault(_propTypes);var _reactRouterDom=__webpack_require__(27);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var Status=function Status(_ref){var code=_ref.code,children=_ref.children;return _react2.default.createElement(_reactRouterDom.Route,{render:function render(_ref2){var staticContext=_ref2.staticContext;if(staticContext){staticContext.status=code;}return children;},__source:{fileName:_jsxFileName,lineNumber:6}});};Status.defaultProps={code:200};Status.propTypes={code:_propTypes2.default.number,children:_propTypes2.default.element.isRequired};exports.default=Status;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map