import React from 'react'
import H1 from '../H1/H1'

const Main = (props) => {
    const {children}=props
  return (
    <main>
        <H1/>
        {children}
    </main>
  )
}

export default Main