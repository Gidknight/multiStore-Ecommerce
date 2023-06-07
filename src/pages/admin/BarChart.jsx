import React from 'react';
import { BarC, Header } from '../../components';

const BarChart = () => {
  return (
    <section className="m-2 md:m-5 mt-2 p-2 md:p-10 bg-white rounded-3xl pt-20 md:pt-10">
    <Header category="Charts" title="Bar Chart" />
    <BarC />
    </section>
  )
}

export default BarChart