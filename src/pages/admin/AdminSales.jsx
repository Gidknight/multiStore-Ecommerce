import React, { useState } from 'react'
import { Header, AdminSalesTable } from '../../components'

const AdminSales = () => {

    const [sales, setSales] = useState([])
  return (
    <section className="m-2 md:m-5 mt-2 pt-20 md:pt-10 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Sales Record" />
    <div>
        <AdminSalesTable sales={sales}/>
    </div>

    </section>
  )
}

export default AdminSales