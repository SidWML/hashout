import React from 'react'
import Home from "../../components/auth/Home"
import Login from '@/components/auth/Login'
import { poppins } from '..'

export default function index() {
  return (
   <div className={`${poppins.className}`}>
    <Login />
   </div>
  )
}
