import React from 'react'
import { Appbar } from '../Components/App_Abr'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <Appbar />
      <Outlet />
    </div>
  )
}
