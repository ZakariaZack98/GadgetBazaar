import Breadcrumbs from '@/components/common/Breadcrubms'
import React from 'react'

const layout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <>
      <Breadcrumbs/>
      {children}
    </>
  )
}

export default layout