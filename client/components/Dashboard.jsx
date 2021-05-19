import React, { useEffect, useState } from 'react'
import PageHeader from './PageHeader'
import TicketsList from './TicketsList'


function Dashboard() {
  return (
    <div>
      {/* {tickets.map(ticket => <p key={ticket.TicketID}>{ticket.ProblemStatement}</p>)} */}
      <PageHeader/>
      <TicketsList/>
    </div>
  )
}

export default Dashboard