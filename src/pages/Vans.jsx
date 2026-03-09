import { Suspense } from 'react'
import { useSearchParams, useLoaderData, Await } from 'react-router-dom'
import VansLayout from '../layouts/VansLayout'
import Loading from '../components/Loading'

const loadVans = async () => {
    const response = await fetch('/api/vans')
    if (!response.ok) {
        throw new Error('Failed to fetch vans.')
    }
    const data = await response.json()
    return data.vans
}

// Defer utility for React Router v7
function defer(data) {
    return data
}

export function loader() {
    return defer({ vans: loadVans() })
}

const Vans = () => {
    const dataPromise = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    const filterType = searchParams.get('type')

    // Categories
    const categories = ["simple", "luxury", "rugged"]

    return (
        <>
            <h1 className='text-3xl md:text-5xl font-bold my-6 px-4 md:px-10'>Explore our van options</h1>
            <div className='flex flex-wrap gap-3 md:gap-4 items-center px-4 md:px-10'>
                {categories.map((category) => {
                    return (
                        <button 
                            key={category} 
                            className='bg-[#f0ca9c] text-white px-4 py-2 rounded-md capitalize'
                            onClick={() => setSearchParams({ type: category })}
                        >
                            {category}
                        </button>
                    )
                })}
                {filterType && (
                    <button 
                        onClick={() => setSearchParams({})} 
                        className='font-bold text-base md:text-xl underline'
                    >
                        Clear Filter
                    </button>
                )}
            </div>
            
            <Suspense fallback={<Loading message="Loading Vans..." />}>
                <Await resolve={dataPromise.vans}>
                    {(vans) => {
                        const filteredVans = filterType 
                            ? vans.filter(van => van.type === filterType) 
                            : vans

                        return (
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-10 mt-8'>
                                {filteredVans.map((van) => (
                                    <VansLayout key={van.id} {...van} />
                                ))}
                            </div>
                        )
                    }}
                </Await>
            </Suspense>
        </>
    )
}


export default Vans
