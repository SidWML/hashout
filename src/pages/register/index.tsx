import Register from '@/components/auth/Register'
import React from 'react'
import { poppins } from '..'

export default function index() {
  return (
    <div className={`${poppins.className}`}>
        <Register />
    </div>
  )
}
