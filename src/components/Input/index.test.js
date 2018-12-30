import React from 'react'
import Input from './index'
import { shallow } from 'enzyme'

describe('Input component', () => {
  it('renders input', () => {
    const input = shallow(
      <Input />
    )
    expect(input.exists('input')).toBe(true)
  })

  it('renders input with given value', () => {
    const value = 'hellotest'
    const input = shallow(
      <Input value={value} />
    )

    expect(input.find('input').props().value).toEqual(value)
  })

  it('calls onChange handler with a new value', () => {
    const value = 'hellotest'
    const newValue = 'newvalue'

    const onChange = jest.fn()

    const component = shallow(
      <Input
        value={value}
        onChange={onChange}
      />
    );

    const evt = { target: { value: newValue } }
    component.find('input').simulate('change', evt)

    expect(onChange).toBeCalledTimes(1)
    expect(onChange).toBeCalledWith(newValue)
  });

  it('has an error state', () => {
    const component = shallow(
      <Input
        error
      />
    );

    expect(component.hasClass('error')).toBe(true)
  });

  it('has a disabled state', () => {
    const value = 'hellotest'
    const newValue = 'newvalue'

    const onChange = jest.fn()

    const component = shallow(
      <Input
        value={value}
        onChange={onChange}
        disabled
      />
    );

    const evt = { target: { value: newValue } }
    component.find('input').simulate('change', evt)

    expect(component.hasClass('disabled')).toBe(true)
    expect(onChange).toBeCalledTimes(0)
  });
})

