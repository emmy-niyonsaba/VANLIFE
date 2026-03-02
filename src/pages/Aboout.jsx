
import React from 'react'
import { Link } from 'react-router-dom'
import { aboutImg } from '../../public/images'

function Aboout() {
   return (
        <div className=" m-10">
            <img src={aboutImg} className=' w-full h-100 '/>
            <div >
                <h1  className=' font-bold text-7xl m-15'>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className="text-2xl m-10  font-serif">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p className="text-2xl m-10">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className=" bg-[#FFCC8D] p-10 mt-10 flex flex-col gap-10">
                <h2 className=' text-5xl font-bold'>Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="bg-[#161616] rounded-md p-8 m-15 w-80 text-3xl font-bold text-white" to="/vans">Explore our vans</Link>
            </div>
        </div>
    );
}

export default Aboout
