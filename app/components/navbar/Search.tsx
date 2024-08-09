import React from 'react'

const Search = () => {
  return (
    <div className="  hidden md:flex flex-1">
    <input className="py-2 px-3 rounded border-none outline-none flex flex-1 " type="text" placeholder="Arama Yap..." />
    <button className="p-2 px-8 text-sm border border-transparent bg-yellow-600">Ara</button>
  </div>
  )
}

export default Search