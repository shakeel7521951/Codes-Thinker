import React from 'react'
import img from '../../../public/about/about.png'
export default function CareerPathways() {
    const aray = [
        {
            image: img, title: "Submit Application"
        },
        {
            image: img, title: "Expert Evaluation"
        },
        {
            image: img, title: "Personal Interview"
        },
        {
            image: img, title: "Seamless Onboarding"
        },
    ]
    return (
        <div className=' p-4 sm:p10'>
            <h1 className="text-center text-2xl sm:text-4xl font-bold mb-10  text-[#0F00AA]">Your Path to Joining Code's Thinker</h1>


            <div className=' grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4'>
                {
                    aray.map((item, index) => (
                        <div key={index + 1} className='mx-auto'>
                            <div className=' mx-auto hover:border-dotted  group overflow-hidden border-3 border-black  h-40 w-40 rounded-full'>
                                <img src={item.image} alt={item.title} className=' scale-110 transition-all ease-in-out duration-100 group-hover:scale-95 h-full w-full rounded-full' />
                            </div>
                            <div className=' mt-2'>
                                <span className=' font-bold text-md sm:text-xl'>{index + 1}-</span>
                                <span className=' font-bold text-md sm:text-xl'>{item.title}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
