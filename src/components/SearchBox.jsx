'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SearchBox = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) return
    router.push(`/search/${search}`)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between items-center max-w-6xl m-auto px-4"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keywords..."
        className="w-full  h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent"
      />
      <button
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
        disabled={!search}
      >
        Search
      </button>
    </form>
  )
}
export default SearchBox
