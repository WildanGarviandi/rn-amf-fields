Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/AmfCheckBox/AmfCheckBox.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _fieldPropTypes=require('../fieldPropTypes');var _fieldPropTypes2=_interopRequireDefault(_fieldPropTypes);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _reactNativeCheckboxGroup=require('react-native-checkbox-group');var _reactNativeCheckboxGroup2=_interopRequireDefault(_reactNativeCheckboxGroup);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var AmfCheckBox=function(_Component){_inherits(AmfCheckBox,_Component);function AmfCheckBox(props){_classCallCheck(this,AmfCheckBox);var _this=_possibleConstructorReturn(this,(AmfCheckBox.__proto__||Object.getPrototypeOf(AmfCheckBox)).call(this,props));_this.checkError();return _this;}_createClass(AmfCheckBox,[{key:'checkError',value:function checkError(){var _props=this.props,label=_props.label,options=_props.options,value=_props.value,onChange=_props.onChange;if(!label){throw new TypeError('Label for AmfCheckBox not exists. Did you forget to add label');}if(!options){throw new TypeError('Field "'+label+'" (AmfCheckBox) doesnt have options');}}},{key:'render',value:function render(){var _props2=this.props,label=_props2.label,options=_props2.options,value=_props2.value,onChange=_props2.onChange,error=_props2.error;var validationText=void 0;var selected=options.find(function(i){return i.value===value;});if(error!=='')validationText=_react2.default.createElement(_reactNative.Text,{style:style.errorText,__source:{fileName:_jsxFileName,lineNumber:31}},error);return _react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:34}},_react2.default.createElement(_reactNative.Text,{style:style.label,__source:{fileName:_jsxFileName,lineNumber:35}},this.props.label),_react2.default.createElement(_reactNativeCheckboxGroup2.default,{callback:onChange,iconSize:30,checkedIcon:'md-checkbox',uncheckedIcon:'md-checkbox-outline',checkboxes:options.map(function(option,i){return{label:option.label,value:option.value,selected:option.value===value};}),labelStyle:{color:'#333'},rowStyle:{flexDirection:'row'},rowDirection:'column',__source:{fileName:_jsxFileName,lineNumber:36}}),validationText);}}]);return AmfCheckBox;}(_react.Component);var style=_reactNative.StyleSheet.create({errorText:{color:'red',margin:4,marginBottom:0},label:{color:'#454545',marginRight:16,marginBottom:8}});exports.default=AmfCheckBox;