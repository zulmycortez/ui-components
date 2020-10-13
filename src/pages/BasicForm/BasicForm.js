import React, { useState } from 'react'
import BasicFormStyle from './BasicFormStyle'
import PageStyle from '../../components/PageStyle'
import Input from '../../components/Input'
import Switch from '../../components/Switch'
import PageTitle from '../../components/PageTitle'

const initialValues = {
  firstName: '',
  lastName: '',
  address: '',
  turnOnNotications: '',
  willRecieveNotications: ''
}

const BasicForm = () => {
  const [values, setValues] = useState(initialValues)

  const onChange = e => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <PageStyle>
      <PageTitle title="Basic Form" />
      <BasicFormStyle>
        <Input
          label="First Name"
          value={values.firstName}
          name="firstName"
          onChange={onChange}
        />
        <Input
          label="Last Name"
          value={values.lastName}
          name="lastName"
          onChange={onChange}
        />
        <Input
          label="Address"
          value={values.address}
          name="address"
          onChange={onChange}
        />
        <Switch
          label="Turn on notifications"
          value={values.turnOnNotications}
          name="turnOnNotications"
          onChange={onChange}
        />
      </BasicFormStyle>
    </PageStyle>
  )
}

export default BasicForm
