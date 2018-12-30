import React from 'react'
import './index.css'

class Input extends React.Component {
  onChange = (evt) => {
    const { onChange, disabled } = this.props
    const { value } = evt.target

    if (!disabled && onChange) {
      onChange(value)
    }
  }

  render() {
    const {
      value,
      error,
      disabled,
    } = this.props

    let className = 'input '
    if (error) {
      className += 'error '
    }
    if (disabled) {
      className += 'disabled '
    }

    return (
      <input
        className={className}
        value={value}
        onChange={this.onChange}
      />
    )
  }
}

export default Input
