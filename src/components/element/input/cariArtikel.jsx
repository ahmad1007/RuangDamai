import React from 'react'

const CariArtikel = ({setArtikel}) => {
  return (
    <>
    <input
      type="text"
      placeholder="Cari artikel disini..."
      className="input input-md w-[550px] bg-green-50 border-none shadow-md max-w-sm"
      onChange={(e) => setArtikel(e.target.value)}
    />
  </>
  )
}

export default CariArtikel