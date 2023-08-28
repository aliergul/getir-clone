import React from 'react'

function Menu({title,items}) {
  return (
    <section>
        <nav className='grid gap-y-4'>
            <h6 className='text-lg text-primary-brand-color'>{title}</h6>
        </nav>
        <nav>
            <ul className='flex flex-col pt-2 gap-y-4'>
                {items.map((item,key)=>(
                    <li key={key}>
                        <a href='/#' className='text-sm hover:text-brand-color'>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    </section>
  )
}

export default Menu