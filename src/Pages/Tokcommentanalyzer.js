import { Search } from '@mui/icons-material'
import { Button } from 'bootstrap'
import React from 'react'

export default function Tokcommentanalyzer() {
  return (
    <div className='TokcommentHeader'>
      <div className='TChead'>
        <h3>TikTok Comments Analyzer</h3>
      </div>
      <div className='TCinput'>
        <input id='Tcinp' type='text ' placeholder='Enter here' />
        <button id='Tcbtn'>Enter Comment here <Search /> </button>
      </div>


    </div>
  )
}
