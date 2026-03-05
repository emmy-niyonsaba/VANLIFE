import React from 'react'
import { Link } from 'react-router-dom'
function VanDetailsLayout(props) {
  //
  //  {id: '2', 
  // name: 'Beach Bum',
  //  price: 80, 
  // description: "Beach Bum is a van inspired by surfers and travele…tures in it you won't find in an ordinary camper.",
  //  imageUrl: 'https://assets.scrimba.com/advanced-react/react-router/beach-bum.png', …}

  const { id, name, price, description, imageUrl, type } = props.van || {}
  return (
    <div  className='max-w-5xl mx-auto mt-6 md:mt-10 flex flex-col gap-5 px-4 md:px-8'>
        <Link to="/vans" className="font-bold text-blue-500">Back to all vans</Link>
      <img src={imageUrl} alt={name} className='rounded-md w-full max-w-3xl' />
      <button className={`text-center w-fit text-sm md:text-base text-white px-4 py-2 rounded-md mt-2 capitalize ${type === 'simple' ? 'bg-[#E17654]' : type === 'luxury' ? 'bg-[#115E59]' : 'bg-[#161616]'}`}>{type}</button>

      <h1 className='text-2xl md:text-5xl font-semibold'>{name}</h1>
      <p className='font-bold text-xl md:text-3xl'>${price}/day</p>
      <p className='text-base md:text-2xl leading-relaxed'>{description}</p>
      <Link className="block text-center mt-6 bg-[#FF8C38] text-white font-bold py-2 px-4 rounded">Rent this  van</Link>

    </div>
  )
}

export default VanDetailsLayout
