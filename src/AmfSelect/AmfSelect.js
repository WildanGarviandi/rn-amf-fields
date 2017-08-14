import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Picker } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class AmfSelect extends Component {
  constructor(props) {

    super(props)

    this.state = {
      valid: false,
      isFocused: false
    }

  }

  componentDidMount() {
    this.validate()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isFocused !== this.state.isFocused) {
      if (!this.state.isFocused) this.validate()
    }
  }

  getLabel = (val) => {
    let option = this.props.options.find(i => i.value === val)
    return option && option.label
  }

  inputValid = () => {
    const { validation, label } = this.props
    if (!validation) return ({status: true})

    // check if pristine
    if (this.props.value === null || this.props.value === undefined) return ({status: true})

    // check if required
    if (validation.required) {
      if (this.props.value === '') return ({status: false, message: label + ' harus dipilih'})
    }

    return ({status: true})
  }

  onSelectWillShow = () => {
    if (this.props.validation && this.props.validation.required && this.props.value === null) {
      this.props.onChange('')
    }

    this.setState({isFocused: true})
  }

  onSelectWillHide = () => {
    this.setState({isFocused: false})
  }

  onSelect = (value) => {
    this.props.onChange(value)
  }

  validate = () => {
    let validationObject = this.inputValid()
    this.setState({valid: validationObject.status, errorMessage: validationObject.message})
  }

  render() {
    const { layout, value, label } = this.props

    let validationStyle = {}
    let validationText
    
    if (!this.state.valid) {
      validationStyle = {borderColor: 'red', borderWidth: 1}
      validationText = <Text style={style.errorText}>{this.state.errorMessage}</Text>
    }

    let labelText
    if (this.props.label) {
      labelText = <Text style={[style.label, {marginBottom: layout == 'vertical' ? 8 : 0}]}>{this.props.label}</Text>
    }

    return (
      <View>
        <Picker selectedValue={value} onValueChange={this.onSelect} >
          <Picker.Item label={label} />
          { this.props.options.map((option, index) => <Picker.Item key={index} {...option} />) }
        </Picker>
        <View style={{backgroundColor:'#4b6ac5', borderColor:'#4b6ac5', borderStyle:'solid', height:3}} />
        { validationText }
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {},
  containerHorizontal: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dropdownContainer: {
    elevation: 4,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  dropdown: {
    width: 100,
    elevation: 4,
    padding: 8,
    height: 150
  },
  errorText: {
    color: 'red',
    margin: 4,
    marginBottom: 0
  },
  label: {
    color: '#454545',
    marginRight: 16
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30
  },
  icon: {
    marginRight: 16
  },
  valueText: {
    marginLeft: 16
  }
})

const itemShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
})

AmfSelect.defaultProps = {
  layout: 'vertical'
}

AmfSelect.propTypes = {
  disabled: PropTypes.bool,
  dropdownStyle: PropTypes.object,
  options: PropTypes.arrayOf(itemShape).isRequired,
  label: PropTypes.string,
  layout: PropTypes.oneOf(['vertical', 'horizontal']),
  onChange: PropTypes.func.isRequired,
  optionStyle: PropTypes.object,
  selector: PropTypes.element,
  style: PropTypes.object,
  validation: PropTypes.object,
  value: PropTypes.any,
}

export default AmfSelect
