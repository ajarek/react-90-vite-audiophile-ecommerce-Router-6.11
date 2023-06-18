import React from 'react'
import './FullPageLayout.css'

export const FullPageLayout = ({ children, onClick }) => {
  return (
    <div
      className='full-page-layout'
      onClick={onClick}
    >
      {children}
    </div>
  )
}
export default FullPageLayout
