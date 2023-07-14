import CreatePost from '@/components/CreatePost'
import HashoutLayout from '@/layout/HashoutLayout'
import React from 'react'
import { poppins } from '..'

export default function index() {
  return (
    <HashoutLayout poppins={poppins.className}>
        <CreatePost />
    </HashoutLayout>
  )
}
