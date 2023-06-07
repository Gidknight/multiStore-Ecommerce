import React from 'react'
import {Header, LineC} from '../../components'


const LineGraph = () => {
  return (
    <section className="m-2 md:m-5 mt-2 p-2 md:p-10 bg-white rounded-3xl pt-20 md:pt-10">
    <Header category="Charts" title="Line Graph" />
    <LineC />
    </section>
  )
}

export default LineGraph