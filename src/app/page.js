'use client'

import { useState } from 'react'
import Categories from '@/features/home/Categories/Categories'
import MainPost from '@/features/post/MainPost/MainPost'

export default function Home() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)

  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId)
  }

  return (
    <div className="w-full h-full overflow-y-auto scrollLayout">
      <Categories onCategorySelect={handleCategorySelect} />
      <br></br>
      <MainPost selectedCategoryId={selectedCategoryId} />
    </div>
  )
}
