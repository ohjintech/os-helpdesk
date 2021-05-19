import React, { useEffect, useState } from 'react'
import PageHeader from './PageHeader'
import TicketsList from './TicketsList'


function Dashboard() {
  return (
    <div>
      <PageHeader/>
      <TicketsList/>
    </div>
  )
}

export default Dashboard