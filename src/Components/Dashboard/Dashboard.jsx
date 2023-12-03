import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Overview from '../Overview/Overview'
import Layout from '../Layout/Layout'

const Dashboard = () => {
  return (
    <div>
        <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          {/* Add more routes for other components */}
        </Routes>
      </Layout>

    </div>
  )
}

export default Dashboard