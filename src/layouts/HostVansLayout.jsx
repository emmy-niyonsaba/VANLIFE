import React from 'react'
import { Link } from 'react-router-dom'

function HostVansLayout(props) {
  //{ id: '1', 
  // name:
  //  'Modest Explorer', 
  // price: 60, description: 'The Modest Explorer is a van designed to get you o…our home and escape for a weekend or even longer!', imageUrl: 'https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png', … }
  const { id,name,price,imageUrl } = props;
  return (
    <div>
      <Link to={`/hosts/vans/${id}`}>
        <div className=' flex  gap-5   items-center'>
          <img src={imageUrl}  className=' w-30 rounded-md'/>
          <div>
            <h1 className=' text-xl font-bold'>{name}</h1>
          <p>${price}/day</p>
          </div>
        </div>
      
      </Link>
    </div>
  )
}

export default HostVansLayout
