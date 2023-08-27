import React from 'react'

function Category({category: {id,title,image}}) {
  return (
    <a href='/#' className='flex flex-col group items-center text-center p-4 gap-y-2 hover:bg-purple-50'>
        <img src={image} alt={title} className='w-12 h-12 rounded border-gray-300'/>
        <span className='text-sm font-semibold text-gray-700 group-hover:text-brand-color tracking-tight whitespace-nowrap'>{title}</span>
    </a>
  )
}

export default Category