import React from 'react'
import { Link } from 'react-router-dom'

function HostVansLayout(props) {
  //{ id: '1', 
  // name:
  //  'Modest Explorer', 
  // price: 60, description: 'The Modest Explorer is a van designed to get you o…our home and escape for a weekend or even longer!', imageUrl: 'https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png', … }
  const { id,name,price,imageUrl } = props;
  return (
    <div className='host-van-item'>
      <Link to={`/hosts/vans/${id}`}>
        <div className='flex gap-4 md:gap-5 items-center bg-white p-3 md:p-4 rounded-md shadow-sm'>
          <img src={imageUrl} alt={name} className='w-24 h-20 md:w-32 md:h-24 object-cover rounded-md'/>
          <div>
            <h1 className='text-lg md:text-xl font-bold'>{name}</h1>
          <p className='text-sm md:text-base'>${price}/day</p>
          </div>
        </div>
      
      </Link>
    </div>
  )
}

export default HostVansLayout
