import React from 'react'
import { Link } from 'react-router-dom'

const Test = () => {
  return (
    <div className="grid grid-flow-col auto-cols-max">
      <div>
        <h1 className="text-3xl mb-8 ">Your Test Details</h1>
        <Link
          className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          to="/test_page"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Upcomming Test</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">Your upcomming Test schedule on 21/08/2022</p>
        </Link>
      </div>
      <div></div>
    </div>
  )
}

export default Test
