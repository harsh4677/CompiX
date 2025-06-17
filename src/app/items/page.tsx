import AppSidebar from '@/components/AppSidebar'
import Navbar from '@/components/Navbar'
import React from 'react'
import Introduction from '../Introduction/page'

export default function Page() {  // Changed 'page' to 'Page' (component names should be PascalCase)
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">  {/* Added flex to properly layout sidebar and content */}
        <AppSidebar/>
        <div className="flex-1">  {/* Added flex-1 to make Introduction take remaining space */}
          <Introduction/>
        </div>
      </div>
    </main>
  )
}