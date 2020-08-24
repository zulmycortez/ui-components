import React from 'react'
import SectionStyle from './SectionStyle'

const Section = ({ children }) => {
  return (
    <SectionStyle>
      {children}
    </SectionStyle>
  )
}

export default Section
