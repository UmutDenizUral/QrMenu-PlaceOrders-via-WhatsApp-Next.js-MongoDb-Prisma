'use client'
import  { useState } from 'react'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="  hidden md:flex flex-1">
    <input className="py-2 px-3 rounded border-none outline flex flex-1 " type="text" placeholder="Arama Yap..." onChange={(e) => setSearchTerm(e.target.value)} />
    <button className="p-2 px-8 text-sm border border-transparent bg-yellow-600">Ara</button>
  </div>
  )
}

export default Search