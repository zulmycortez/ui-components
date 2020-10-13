import React, { useState } from 'react'
import PageStyle from '../../components/PageStyle'
import PageTitle from '../../components/PageTitle'
import { Switch } from '../../components'
import Section from '../../components/Section'

const SwitchPage = () => {
  const [on, setOn] = useState(false)

  const onSliderChange = () => { setOn(!on) }

  return (
    <PageStyle>
      <PageTitle title="Slider" />
      <Switch 
        value={on}
        onChange={onSliderChange}
        label="Turn on notifications"
      />
      <Section>
        {on ? "Successfully enrolled in notifications" : "Notifications off"}
      </Section>
    </PageStyle>
  )
}

export default SwitchPage
