import CommunityDetailPage from '@/components/CommunityDetailPage'
import HashoutLayout from '@/layout/HashoutLayout'
import { poppins } from '@/pages'
import React from 'react'

export default function index() {
  return (
    <HashoutLayout poppins={poppins.className}>
        <CommunityDetailPage />
    </HashoutLayout>
  )
}
