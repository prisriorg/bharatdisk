"use client"
import React from 'react'

const Error = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-black">500 - Server Error</h1>
        <p className="text-gray-600 mt-4">Sorry, something went wrong on our end.</p>
        <a href="/" className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Go to Homepage</a>
      </div>
  )
}

export default Error