Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/AmfField/AmfField.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _AmfTextInput=require('../AmfTextInput/AmfTextInput');var _AmfTextInput2=_interopRequireDefault(_AmfTextInput);var _AmfNumberInput=require('../AmfNumberInput/AmfNumberInput');var _AmfNumberInput2=_interopRequireDefault(_AmfNumberInput);var _AmfFormattedNumberInput=require('../AmfFormattedNumberInput/AmfFormattedNumberInput');var _AmfFormattedNumberInput2=_interopRequireDefault(_AmfFormattedNumberInput);var _AmfRadioButton=require('../AmfRadioButton/AmfRadioButton');var _AmfRadioButton2=_interopRequireDefault(_AmfRadioButton);var _AmfSelect=require('../AmfSelect/AmfSelect');var _AmfSelect2=_interopRequireDefault(_AmfSelect);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _fieldPropTypes=require('../fieldPropTypes');var _fieldPropTypes2=_interopRequireDefault(_fieldPropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var switcher={'text':_AmfTextInput2.default,'number':_AmfNumberInput2.default,'formatted-number':_AmfFormattedNumberInput2.default,'select':_AmfSelect2.default,'radio':_AmfRadioButton2.default};var AmfField=function(_Component){_inherits(AmfField,_Component);function AmfField(props){_classCallCheck(this,AmfField);return _possibleConstructorReturn(this,(AmfField.__proto__||Object.getPrototypeOf(AmfField)).call(this,props));}_createClass(AmfField,[{key:'render',value:function render(){var _props=this.props,type=_props.type,label=_props.label,onChange=_props.onChange,value=_props.value,options=_props.options;if(type in switcher){var _Component2=switcher[type];return _react2.default.createElement(_Component2,{type:type,label:label,onChange:onChange,value:value,options:options,__source:{fileName:_jsxFileName,lineNumber:28}});}else{throw new TypeError('Unknown type Field "'+type+'" in AmfField');}}}]);return AmfField;}(_react.Component);AmfField.propTypes=_extends({},_fieldPropTypes2.default,{type:_propTypes2.default.string.isRequired});exports.default=AmfField;