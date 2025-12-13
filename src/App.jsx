import React from 'react'
import Header from './components/Header'
import SideNav from './components/SideNav'
import DataHeader from './components/DataHeader'
function App() {
  return (
    <>
      <Header/>
      <div className='flex'>
        <SideNav/>
      <DataHeader/>
      </div>
    </>
  )
}

export default App