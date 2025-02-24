'use client'

import Header from '@/components/layouts/Header'
import React from 'react'
import { useSelector } from 'react-redux'

const MainLayout = ({ children }) => {
    const { theme } = useSelector((state) => state.userPreferences);

    return (
        <main className={theme}>
            <Header />
            {children}
      </main>
  )
}

export default MainLayout
