import React, { useEffect, useState } from 'react'
import PageHeader from './PageHeader'
import TicketsList from './TicketsList'


function Dashboard() {
  const [searchText, setSearchText] = useState('');
  

  return (
    <div>
      <PageHeader searchText={searchText} setSearchText={setSearchText}/>
      <TicketsList searchText={searchText}/>
    </div>
  )
}

export default Dashboard