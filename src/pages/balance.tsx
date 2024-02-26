import { User } from "@/lib/db";
import { connectToDatabase } from "@/lib/dbConnect";
import { useEffect, useState } from "react";

export default function balance() {
    return (
        <div>
            <h1 className="text-6xl flex justify-center mb-20">Balance</h1>
            <div className="grid grid-cols-12">
                <div className="col-span-5">
                    <div className="max-w-sm ml-56 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl flex justify-center font-bold tracking-tight text-gray-900 dark:text-white">Balance</h5>
                        <p className="text-2xl flex justify-center font-normal text-gray-700 dark:text-gray-400">$</p>
                        <div className="flex justify-center mt-10">
                            <a href="#" className="inline-flex items-center px-3 mr-5 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <button>Add</button>
                            </a>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <button>Withdraw</button>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center ml-32">
                        <figure className="relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                            <img className="rounded-lg h-auto" src="/both.jpg" alt="image description" />
                        </figure>
                    </div>
                </div>
                <div className="col-span-7">
                    <div className="ml-10 lg:ml-56 mr-56 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-2 text-2xl flex justify-center font-bold tracking-tight text-gray-900 dark:text-white">News</h5>
                        <p className="text-2xl flex justify-center font-normal text-gray-700 dark:text-gray-400">The tranquility of the serene meadow enveloped me as I wandered through the lush grass, feeling the gentle caress of the breeze against my skin, listening to the symphony of chirping birds and rustling leaves harmonizing with the distant babbling of a nearby brook; each step I took, filling me with a sense of peace and contentment, as if time itself had paused to admire the beauty of the moment, the vibrant colors of wildflowers dancing in the sunlight, painting a picturesque scene that seemed to exist beyond the constraints of reality, a fleeting glimpse of paradise</p>
                        <div className="flex justify-center mt-10">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}