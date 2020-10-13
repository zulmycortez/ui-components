import React from 'react'
import { render } from '@testing-library/react'
import Checkbox from './Checkbox'

const renderCheckbox = props => {
  const utils = render(
    <Checkbox {...props}/>
  )
  const checkbox = utils.getByRole("checkbox")
  return { utils, checkbox }
}

describe("Checkbox component", () => {
  it('should render', () => {
    const { checkbox } = renderCheckbox({ })
    expect(checkbox).toBeTruthy()
  })

  it('should check value', () => {
    const { checkbox } = renderCheckbox({ value: true })
    expect(checkbox).toBeChecked()
  })

  it('should change value on an onClick event', () => {
    const onChange = jest.fn()
    const { checkbox } = renderCheckbox({ value: false, onChange })
    checkbox.click()
    expect(onChange).toBeCalled()
  })
})
