import React, {Component, PropTypes} from 'react';
import InputMask from 'react-input-mask'

class TelInput extends Component {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    fieldName: PropTypes.string,
    fieldId: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    handleInputChange: PropTypes.func,
    handleKeyPress: PropTypes.func,
    handleOnBlur: PropTypes.func,
    autoFocus: PropTypes.bool,
    autoComplete: PropTypes.string,
    inputProps: PropTypes.object,
    mask: PropTypes.string,
  };

  render() {
    const {
      mask,
      inputProps,
      autoComplete,
      className,
      value,
      placeholder,
      autoFocus,

    } = this.props;

    const _inputProps = {
      ...inputProps,
      type: "tel",
      autoComplete,
      className,
      value,
      placeholder,
      autoFocus,
      disabled: this.props.disabled ? 'disabled' : false,
      readOnly: this.props.readonly ? 'readonly' : false,
      name: this.props.fieldName,
      id: this.props.fieldId,
      onChange: this.props.handleInputChange,
      onBlur: this.props.handleOnBlur,

    }

    if (mask) {
      return (
        <InputMask {..._inputProps} mask={mask} />
      )
    }

    return (
      <input
        {..._inputProps}
      />
    );
  }
}


export default TelInput;
