import React from 'react'

export default function Button({label}) {
  return (
    <button className=' px-6 uppercase py-2.5 bg-[black] rounded-full text-xs font-medium w-[max-content] text-white'>{label}</button>
  )
}
