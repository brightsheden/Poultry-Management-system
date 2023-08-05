import AddChicken from '@/components/AddChicken'
import React from 'react'

function dashboard() {
  return (
    <div className='mt-28 container mx-auto '>
        {/* header */}
        <div className='text-center bg-blue-200 p-5 '>
            <h1 className='text-4xl text-medium'>Welcome to the dashboard</h1>
            <p className='text-base font-bold'>Simple tools for managing a Poultry</p>
        </div>

        <div className='my-8'>
            <div className='text-center text-4xl'>
            <h2>All Chicken Available</h2>
            </div>
          
            <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" type='button' className='text-xl p-2 rounded-md bg-blue-500 text-white'>Add Chickens</button>
            <AddChicken/>

            <div>
                {/*table*/}
                
<div className="relative overflow-x-auto shadow-md sm:rounded-lg my-5 text-2xl">
  <table className="w-full text-base text-left text-gray-500 dark:text-gray-400">
    <thead className="text-base text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
           Name
        </th>
        <th scope="col" className="px-6 py-3">
          Breed
        </th>
        <th scope="col" className="px-6 py-3">
          Age
        </th>
        <th scope="col" className="px-6 py-3">
          Sex
        </th>
        <th scope="col" className="px-6 py-3">
          <span className="">Edit/Delete</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Apple MacBook Pro 17"
        </th>
        <td className="px-6 py-4">
          Silver
        </td>
        <td className="px-6 py-4">
          Laptop
        </td>
        <td className="px-6 py-4">
          $2999
        </td>
        <td className="px-6 py-4 text-right">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
      </tr>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Microsoft Surface Pro
        </th>
        <td className="px-6 py-4">
          White
        </td>
        <td className="px-6 py-4">
          Laptop PC
        </td>
        <td className="px-6 py-4">
          $1999
        </td>
        <td className="px-6 py-4 text-right">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
      </tr>
      <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Magic Mouse 2
        </th>
        <td className="px-6 py-4">
          Black
        </td>
        <td className="px-6 py-4">
          Accessories
        </td>
        <td className="px-6 py-4">
          $99
        </td>
        <td className="px-6 py-4 text-right">
          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
        </td>
      </tr>
    </tbody>
  </table>
</div>


            </div>
        </div>

    </div>
  )
}

export default dashboard