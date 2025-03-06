import React from 'react'

export default function card() {
  return (
    <div>
      <div className="bg-background text-txt p-2 rounded-md mt-20 mx-5 hover:bg-purple-600 hover:text-white max-w-80 min-h-40 drop-shadow-md hover:drop-shadow-xl text-center">
        <h3 className="font-bold mt-12">Best Seller</h3>
        <p className="text-xs text-blue-400 mt-2">Duis sint ad duis aliqua.</p>
      </div>
    </div>
  )
}