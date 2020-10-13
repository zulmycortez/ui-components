import React, { useState } from 'react'
import PageStyle from '../../components/PageStyle'
import PageTitle from '../../components/PageTitle'
import { Checkbox } from '../../components'

const CheckboxPage = () => {
  const [value, setValue] = useState(false)

  const onChange = () => { setValue(!value) }

  return (
    <PageStyle>
      <PageTitle title="Checkbox" />
      <Checkbox
        value={value}
        onChange={onChange}
        label="I accept"
      />
    </PageStyle>
  )
}

export default CheckboxPage
