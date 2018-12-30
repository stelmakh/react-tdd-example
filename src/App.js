import React, { Component } from 'react'
import Input from './components/Input'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      error: false,
      checked: false
    }
  }

  onChangeValue = (value) => {
    this.setState({
      value,
      error: false
    })
  }

  onChangeCheckbox = (evt) => {
    this.setState({
      checked: evt.currentTarget.checked,
    })
  }

  onSubmit = (evt) => {
    if (evt) {
      evt.preventDefault()
    }

    const { value } = this.state
    if (value.length < 3) {
      this.setState({error: true})
      return
    } else {
      console.log('Success: ', value)
    }
  }

  render () {
    const {
      value,
      error,
      checked,
    } = this.state

    return (
      <div className='App'>
        <form onSubmit={this.onSubmit}>
          <div className='consent'>
            <input
              type='checkbox'
              value={checked}
              onChange={this.onChangeCheckbox}
            />
            <span>I agree to Terms of Service</span>
          </div>

          <Input
            value={value}
            error={error}
            onChange={this.onChangeValue}
            disabled={!checked}
          />

          <button className='button' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default App
