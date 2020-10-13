import React, { useState } from 'react'
import BasicFormStyle from './BasicFormStyle'
import PageStyle from '../../components/PageStyle'
import { Input, Switch, Button } from '../../components'
import PageTitle from '../../components/PageTitle'

const initialValues = {
  firstName: '',
  lastName: '',
  address: '',
  turnOnNotications: ''
}

const BasicForm = () => {
  const [values, setValues] = useState(initialValues)
  const [view, setView] = useState("initial")

  const onChange = e => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const onFormSubmit = () => {
    setView("confirm")
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
        <Button onClick={onFormSubmit}>
          Submit
        </Button>
      </BasicFormStyle>
    </PageStyle>
  )
}

export default BasicForm
