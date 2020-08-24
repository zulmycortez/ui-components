import React, { useState } from 'react'
import PageStyle from '../../components/PageStyle'
import PageTitle from '../../components/PageTitle'
import Slider from '../../components/Slider'
import Section from '../../components/Section'

const SliderPage = () => {
  const [on, setOn] = useState(false)

  const onSliderChange = () => { setOn(!on) }

  return (
    <PageStyle>
      <PageTitle title="Slider" />
      <Slider 
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

export default SliderPage
