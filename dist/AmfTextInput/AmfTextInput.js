Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/AmfTextInput/AmfTextInput.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _fieldPropTypes=require('../fieldPropTypes');var _fieldPropTypes2=_interopRequireDefault(_fieldPropTypes);var _reactNative=require('react-native');var _reactNativeMaterialTextfield=require('react-native-material-textfield');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var AmfTextInput=function(_Component){_inherits(AmfTextInput,_Component);function AmfTextInput(props){_classCallCheck(this,AmfTextInput);var _this=_possibleConstructorReturn(this,(AmfTextInput.__proto__||Object.getPrototypeOf(AmfTextInput)).call(this,props));_this.onBlur=function(){_this.validate();};_this.onFocus=function(){if(_this.props.validation&&_this.props.validation.required&&_this.props.value===null)_this.props.onChange('');};_this.inputValid=function(){var _this$props=_this.props,validation=_this$props.validation,label=_this$props.label,value=_this$props.value;if(!validation)return{status:true};if(value===null||value===undefined)return{status:true};if(validation.required){if(value==='')return{status:false,message:label+' tidak boleh kosong'};}if(validation.regex&&value!==''){if(!validation.regex.test(value))return{status:false,message:'Format tidak sesuai'};}if(validation.exactLength){if(value.length!==parseInt(validation.exactLength))return{status:false,message:label+' harus '+validation.exactLength+' karakter'};}if(validation.minLength){if(value.length<parseInt(validation.minLength))return{status:false,message:label+' minimal '+validation.minLength+' karakter'};}if(validation.maxLength){if(value.length>parseInt(validation.maxLength))return{status:false,message:label+' maksimum '+validation.minLength+' karakter'};}return{status:true};};_this.validate=function(){var validationObject=_this.inputValid();_this.setState({valid:validationObject.status,errorMessage:validationObject.message});};_this.state={valid:false,message:''};return _this;}_createClass(AmfTextInput,[{key:'componentDidMount',value:function componentDidMount(){this.validate();}},{key:'render',value:function render(){var textInputValidationStyle={};var validationText=void 0;var _props=this.props,label=_props.label,onChange=_props.onChange,value=_props.value;if(!this.state.valid){textInputValidationStyle={borderColor:'red'};validationText=_react2.default.createElement(_reactNative.Text,{style:style.errorText,__source:{fileName:_jsxFileName,lineNumber:77}},this.state.errorMessage);}return _react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:81}},_react2.default.createElement(_reactNativeMaterialTextfield.TextField,{label:label,onChangeText:onChange,value:value||"",__source:{fileName:_jsxFileName,lineNumber:82}}),validationText);}}]);return AmfTextInput;}(_react.Component);var style=_reactNative.StyleSheet.create({errorText:{color:'red',margin:4,marginBottom:0},label:{color:'#454545',marginBottom:8},textInput:{backgroundColor:'white',height:40,padding:10,borderWidth:1,borderColor:'#DDDDDD',color:'#9B9B9B',fontSize:14,borderRadius:3,paddingBottom:10}});AmfTextInput.propTypes=_fieldPropTypes2.default;exports.default=AmfTextInput;