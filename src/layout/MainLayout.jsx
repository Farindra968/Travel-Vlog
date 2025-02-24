import Header from '@/components/layouts/Header'
import React from 'react'

const MainLayout = ({children}) => {
    return (
        <main className='dark'>
            <Header />
            {children}
      </main>
  )
}

export default MainLayout
