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
    <div  className=' w-200 mx-auto mt-10 flex flex-col gap-6'>
        <Link to="/vans" className=" font-bold text-blue-500">Back to all vans</Link>
      <img src={imageUrl} alt={name} className=' rounded-md' />
      <button className={`  text-center  w-30  text-2xl text-white px-4 py-2  rounded-md mt-2 ${type === 'simple' ? 'bg-[#E17654]' : type === 'luxury' ? 'bg-[#115E59]' : 'bg-[#161616]'}`}>{type}</button>

      <h1 className=' text-5xl font-semibold'> {name}</h1>
      <p className=' font-bold text-3xl'>${price}/day</p>
      <p className=' text-3xl'>{description}</p>
      <Link className="block text-center mt-6 bg-[#FF8C38] text-white font-bold py-2 px-4 rounded">Rent this  van</Link>

    </div>
  )
}

export default VanDetailsLayout
